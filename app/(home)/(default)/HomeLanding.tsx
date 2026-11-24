"use client";

import { useRef } from "react";
import { ecomBody, ecomDisplay } from "@/lib/fonts";
import useLandingScripts from "@/app/ecommerce/useLandingScripts";
import markup from "./markup";
import "@/app/ecommerce/ecommerce.css";
import "@/app/ecommerce/home.css";
import "@/app/ecommerce/ecommerce-dark.css";

// The acquirely.in homepage.
export default function HomeLanding() {
  const rootRef = useRef<HTMLDivElement>(null);
  useLandingScripts(rootRef);

  return (
    <div
      ref={rootRef}
      className={`ecom hm ${ecomDisplay.variable} ${ecomBody.variable}`}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
