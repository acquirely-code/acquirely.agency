import { ecomBody, ecomDisplay } from "@/lib/fonts";
import { withImgDims } from "@/lib/img-dims";
import { siteFooter } from "@/components/site-chrome/markup";
import "@/app/ecommerce/ecommerce.css";
import "@/app/ecommerce/home.css";
import "./site-chrome/site-chrome.css";

const html = withImgDims(siteFooter());

// The landing-page footer for pages not built on .ecom.
export default function Footer() {
  return (
    <div
      className={`ecom hm sc sc-foot ${ecomDisplay.variable} ${ecomBody.variable}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
