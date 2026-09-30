# Berizu Drive

Build a premium automotive dealership website frontend for BERIZU MOTORS.

BRAND:

Name: BERIZU MOTORS

Business: Automotive dealership

Location: Kisumu, Kenya

Primary goal: Sell vehicles and generate WhatsApp, phone, quotation and financing enquiries.

Use a sophisticated premium automotive aesthetic.

Do NOT make it look like a generic WordPress/WooCommerce template.

DESIGN SYSTEM — "BERIZU OBSIDIAN":

Dark charcoal/obsidian primary background

White and light-gray typography

Subtle metallic/silver elements

One restrained Berizu accent color for important buttons and highlights

Premium automotive photography

Large imagery

Generous spacing

Subtle glassmorphism where appropriate

Smooth transitions and tasteful animations

Modern rounded cards, but avoid excessive rounded/pill-shaped UI

Professional, masculine, premium dealership appearance

Fully responsive, with special attention to mobile

IMPORTANT:
The vehicle inventory will come from existing WooCommerce Products in WordPress.

Do NOT create a separate hard-coded vehicle listing system.

Every vehicle should be treated as a WooCommerce product.

HOMEPAGE:

HERO
Create a cinematic automotive hero section.

Headline:
"DRIVE SOMETHING EXCEPTIONAL."

Subheadline:
"Premium vehicles. Flexible financing. Trusted service."

Buttons:
"EXPLORE VEHICLES"
"GET FINANCED"

Use a large premium vehicle image/video area.

FEATURED VEHICLES
Create a premium vehicle-product section called:
"FEATURED VEHICLES"

Display WooCommerce products dynamically.

Each product card should show:

Vehicle image

Vehicle name

Price

Key specification

New/Used status if available

CTA: "VIEW VEHICLE"

Do not show unnecessary WooCommerce elements such as quantity selectors, Add to Cart buttons, or shopping-cart UI.

This is an automotive dealership, not a normal e-commerce store.

FIND YOUR VEHICLE
Create an interactive vehicle discovery section.

Categories:

SUVs

Sedans

Pickups

Trucks

Filters should be designed around vehicles:

Brand

Price

Vehicle type

Engine

Transmission

Drive type

Fuel type

New/Used

These filters should ultimately work with WooCommerce product data/categories/attributes.

FINANCING
Create a premium financing section.

Headline:
"GET BEHIND THE WHEEL SOONER."

Text:
"Finance your vehicle through our banking partners with financing options of up to 90%."

CTA:
"CHECK FINANCE OPTIONS"

BRANDS
Create a clean automotive brand section featuring:

Jetour

FAW

Other vehicle brands added to WooCommerce

Do not hard-code brands permanently. Structure the section so it can eventually use WooCommerce product categories/attributes.

BERIZU AI
Create a futuristic but professional section:

"NOT SURE WHAT TO BUY?"

"Tell Berizu AI what you need and discover vehicles that match your requirements."

Button:
"ASK BERIZU AI"

WHY BERIZU
Create four premium feature blocks:

Quality Vehicles

Flexible Financing

Professional Support

Trusted Automotive Service

CONTACT
Create a strong final CTA:
"READY TO FIND YOUR NEXT VEHICLE?"

Buttons:
"WHATSAPP US"
"CALL BERIZU MOTORS"
"GET DIRECTIONS"

VEHICLE PRODUCT PAGE:

Create a completely redesigned WooCommerce single-product experience.

The page should feel like a premium automotive vehicle-detail page.

Include:

Large image gallery

Vehicle name

Price

Vehicle specifications

Engine

Transmission

Drive type

Fuel type

Mileage where available

Vehicle condition

Description

Financing CTA

WhatsApp enquiry

Call enquiry

Request quotation

Book viewing

Similar vehicles

Do NOT display:

Quantity selector

Add to cart

Normal shopping-cart UI

Unnecessary e-commerce elements

The primary conversion should be an enquiry/contact action.

WHATSAPP:
Vehicle enquiry buttons should prepare a WhatsApp message containing the vehicle name and price where available.

MOBILE:
The mobile experience must be excellent.

Use:

Sticky enquiry/WhatsApp CTA

Swipeable vehicle galleries

Large readable prices

Fast-loading images

Easy filtering

Thumb-friendly buttons

TECHNICAL ARCHITECTURE:

Build the frontend so it can communicate with an existing WordPress/WooCommerce backend.

Use WooCommerce products as the source of truth for vehicles.

Do not duplicate the vehicle database inside the frontend.

Structure the code so the WooCommerce API/backend URL and authentication details can be configured later through environment variables.

Keep the frontend modular and production-ready.

Create reusable components for:

VehicleCard

VehicleGallery

VehicleSpecs

VehicleFilters

FinanceCTA

WhatsAppCTA

BrandSection

FeaturedVehicles

SimilarVehicles

SEO:
Create proper SEO-friendly page structure for:

Homepage

Vehicle/product pages

Vehicle categories

Brands

Financing

Contact

PERFORMANCE:

Optimize images

Lazy-load vehicle images

Avoid unnecessary animations

Keep mobile performance high

Overall goal:
Make BERIZU MOTORS feel like a premium modern automotive platform rather than a conventional WooCommerce store.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5a76468d-aa2a-54d1-b3c5-7d046440c35c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
