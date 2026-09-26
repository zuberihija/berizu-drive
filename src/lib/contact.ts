const configuredNumber = import.meta.env["VITE_BERIZU_PHONE"] || "";
export const contactNumber = configuredNumber.replace(/\D/g, "");
export const phoneHref = contactNumber ? `tel:+${contactNumber}` : "/contact";
export function whatsappHref(message: string) {
  return contactNumber ? `https://wa.me/${contactNumber}?text=${encodeURIComponent(message)}` : "/contact";
}
export const directionsHref = "https://www.google.com/maps/search/?api=1&query=Berizu+Motors+Kisumu+Kenya";
