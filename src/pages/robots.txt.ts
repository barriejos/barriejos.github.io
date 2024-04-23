import type { APIRoute } from "astro";
import { SITE } from "@config";

const robots = `

User-agent: *
Allow: /posts/
Disallow: /archive/

User-agent: Googlebot-Image
Disallow: /

User-agent: GPTBot
Disallow: /

Sitemap: ${new URL("sitemap-index.xml", SITE.website).href}
`.trim();

export const GET: APIRoute = () =>
  new Response(robots, {
    headers: { "Content-Type": "text/plain" },
  });
