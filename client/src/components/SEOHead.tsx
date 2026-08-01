/**
 * SEOHead — injects per-page meta tags into document.head using useEffect
 * Supports: title, description, canonical, og:title, og:description, og:url, JSON-LD schema
 */
import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  schema?: object | object[];
}

export default function SEOHead({ title, description, canonical, ogTitle, ogDescription, schema }: SEOHeadProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Helper to set/create a meta tag
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        const [attrName, attrValue] = selector.replace("meta[", "").replace("]", "").split("=");
        el.setAttribute(attrName.trim(), attrValue.replace(/"/g, "").trim());
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.rel = rel;
        document.head.appendChild(el);
      }
      el.href = href;
    };

    setMeta('meta[name="description"]', "content", description);
    setLink("canonical", canonical);
    setMeta('meta[property="og:title"]', "content", ogTitle || title);
    setMeta('meta[property="og:description"]', "content", ogDescription || description);
    setMeta('meta[property="og:url"]', "content", canonical);

    // JSON-LD schema
    if (schema) {
      const existingScript = document.querySelector('script[data-seo-schema]');
      if (existingScript) existingScript.remove();
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-schema", "true");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      // Restore homepage defaults on unmount
      document.title = "TSB Accounting Solutions | CPA & Accounting Firm in Northwest Arkansas";
    };
  }, [title, description, canonical, ogTitle, ogDescription, schema]);

  return null;
}
