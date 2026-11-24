"use client";

import { useRef } from "react";
import { ecomBody, ecomDisplay } from "@/lib/fonts";
import useLandingScripts from "./useLandingScripts";
import "./ecommerce.css";
import "./home.css";
import "./d2c.css";
import "./ecommerce-dark.css";

// Renders a markup-driven landing page (/ecommerce, /lead-gen) in the acquirely.in design.
export default function Landing({ markup }: { markup: string }) {
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
