import localFont from "next/font/local";

// Same self-hosted variable fonts as acquirely.in.
export const ecomDisplay = localFont({ src: "../app/fonts/google/montserrat-latin.woff2", weight: "100 900", variable: "--font-ecom-display" });
export const ecomBody = localFont({ src: "../app/fonts/google/open-sans-latin.woff2", weight: "300 800", variable: "--font-ecom-body" });
