import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export type Vehicle = {
  id: number;
  name: string;
  slug: string;
  price: string;
  regularPrice: string;
  description: string;
  shortDescription: string;
  images: Array<{ src: string; alt: string; thumbnail?: string; srcset?: string }>;
  categories: Array<{ name: string; slug: string }>;
  attributes: Record<string, string>;
  featured: boolean;
};

type WooProduct = {
  id: number; name: string; slug: string; price?: string; regular_price?: string;
  description?: string; short_description?: string; featured?: boolean;
  images?: Array<{ src: string; alt?: string; thumbnail?: string; srcset?: string }>;
  categories?: Array<{ name: string; slug: string }>;
  attributes?: Array<{ name: string; options?: string[] }>;
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/woocommerce";

function plainText(value = "") {
  return value.replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
}

function mapProduct(product: WooProduct): Vehicle {
  return {
    id: product.id,
    name: product.name,
    slug: product.slug,
    price: product.price || product.regular_price || "",
    regularPrice: product.regular_price || product.price || "",
    description: plainText(product.description),
    shortDescription: plainText(product.short_description),
    images: (product.images || []).map((image) => ({
      src: image.src,
      alt: image.alt || product.name,
      ...(image.thumbnail ? { thumbnail: image.thumbnail } : {}),
      ...(image.srcset ? { srcset: image.srcset } : {}),
    })),
    categories: product.categories || [],
    attributes: Object.fromEntries((product.attributes || []).map((attribute) => [attribute.name.toLowerCase(), attribute.options?.join(", ") || ""])),
    featured: Boolean(product.featured),
  };
}

async function wooFetch(path: string): Promise<unknown> {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const wooKey = process.env["WOOCOMMERCE_API_KEY"];
  if (!lovableKey || !wooKey) throw new Error("Vehicle inventory is not configured");
  const response = await fetch(`${GATEWAY_URL}${path}`, {
    headers: { Authorization: `Bearer ${lovableKey}`, "X-Connection-Api-Key": wooKey },
  });
  const body = await response.text();
  if (!response.ok) {
    console.error(`WooCommerce request failed [${response.status}]: ${body}`);
    throw new Error("Vehicle inventory is temporarily unavailable");
  }
  return JSON.parse(body);
}

export const getVehicles = createServerFn({ method: "GET" })
  .inputValidator((input: { limit?: number; category?: string } = {}) => z.object({ limit: z.number().min(1).max(100).optional(), category: z.string().optional() }).parse(input))
  .handler(async ({ data }) => {
    const params = new URLSearchParams({ per_page: String(data.limit || 24), status: "publish" });
    if (data.category) params.set("category", data.category);
    try {
      const products = await wooFetch(`/products?${params.toString()}`);
      return { vehicles: (products as WooProduct[]).map(mapProduct), error: null as string | null };
    } catch (error) {
      console.error(error);
      return { vehicles: [] as Vehicle[], error: "Our live inventory is refreshing. Please contact us for current availability." };
    }
  });

export const getVehicleBySlug = createServerFn({ method: "GET" })
  .inputValidator((input: { slug: string }) => z.object({ slug: z.string().min(1).max(180) }).parse(input))
  .handler(async ({ data }) => {
    try {
      const products = await wooFetch(`/products?slug=${encodeURIComponent(data.slug)}&status=publish`);
      const product = (products as WooProduct[])[0];
      if (!product) return { vehicle: null, similar: [] as Vehicle[], error: "Vehicle not found" };
      const mapped = mapProduct(product);
      const related = await wooFetch(`/products?per_page=4&status=publish&exclude=${product.id}`);
      return { vehicle: mapped, similar: (related as WooProduct[]).map(mapProduct), error: null as string | null };
    } catch (error) {
      console.error(error);
      return { vehicle: null, similar: [] as Vehicle[], error: "Vehicle details are temporarily unavailable." };
    }
  });
