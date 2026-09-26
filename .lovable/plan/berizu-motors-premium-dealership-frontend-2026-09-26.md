# BERIZU MOTORS Premium Dealership Frontend

## Experience
- Create a cinematic obsidian homepage with a full-width vehicle photograph, strong editorial typography, restrained metallic details, and a single warm Berizu accent.
- Add featured inventory, vehicle discovery filters, finance, brand discovery, Berizu AI, trust points, and contact conversion sections.
- Add focused inventory, vehicle-detail, financing, brands, and contact pages with unique search and sharing metadata.
- Use a sticky mobile enquiry bar, touch-friendly controls, swipeable galleries, lazy-loaded images, and restrained motion.

## WooCommerce integration
- Use the connected WooCommerce store as the source of truth for vehicles, categories, attributes, brands, prices, and images.
- Fetch products only through a server-side adapter using the secure connected credentials; no vehicle records will be duplicated in the frontend.
- Map WooCommerce categories and attributes into automotive filters and specifications, with graceful empty and unavailable states.
- Remove cart-style interactions in favor of vehicle-specific WhatsApp, phone, quotation, finance, and viewing enquiries.

## Reusable pieces
- Build shared site navigation/footer plus VehicleCard, VehicleGallery, VehicleSpecs, VehicleFilters, FinanceCTA, WhatsAppCTA, BrandSection, FeaturedVehicles, and SimilarVehicles.
- Use one configurable contact-number value for phone and WhatsApp links until the final Berizu number is supplied.

## Technical details
- Implement server functions in a client-safe module, validate inputs, and surface WooCommerce errors without exposing credentials.
- Use semantic design tokens in the global design system and reusable button variants.
- Keep external vehicle imagery optimized through WooCommerce thumbnails/srcsets and native lazy loading.
- Record the WooCommerce-source-of-truth architecture in project guidance.

## Validation
- Verify the homepage, inventory filtering, product-detail route, enquiry actions, desktop layout, and mobile layout in the live preview.
- Confirm the current build has no errors.
