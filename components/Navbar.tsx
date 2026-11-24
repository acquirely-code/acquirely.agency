"use client";

import { useEffect, useRef } from "react";
import { ecomBody, ecomDisplay } from "@/lib/fonts";
import { withImgDims } from "@/lib/img-dims";
import { siteNav } from "@/components/site-chrome/markup";
import "@/app/ecommerce/ecommerce.css";
import "@/app/ecommerce/home.css";
import "@/app/ecommerce/ecommerce-dark.css";
import "./site-chrome/site-chrome.css";

const html = withImgDims(siteNav(false));

// The landing-page header for pages not built on .ecom. Takes no layout space: leave ~80px at the top of the page.
export default function Navbar() {
  const ref = useRef<HTMLDivElement>(null);

  // Dropdowns close on outside click, Escape, or picking a link.
  useEffect(() => {
    const dropdowns = Array.from(ref.current?.querySelectorAll<HTMLDetailsElement>(".hm-dd") ?? []);
    const onDoc = (e: MouseEvent) => {
      const target = e.target as Element;
      dropdowns.forEach((dd) => {
        if (!dd.contains(target) || target.closest(".hm-dd-menu a")) dd.open = false;
      });
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      dropdowns.forEach((dd) => {
        if (!dd.open) return;
        dd.open = false;
        dd.querySelector("summary")?.focus();
      });
    };
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`ecom hm sc sc-head ${ecomDisplay.variable} ${ecomBody.variable}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
