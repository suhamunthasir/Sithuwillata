// Post-build prerender: turns the SPA into a real .html file per route.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, "dist");
const ssrEntry = path.join(__dirname, "dist-ssr", "entry-server.js");

const { render, ROUTES } = await import(pathToFileURL(ssrEntry).href);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf-8");

for (const url of ROUTES) {
  const appHtml = render(url);
  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  const outPath =
    url === "/"
      ? path.join(dist, "index.html")
      : path.join(dist, url.slice(1), "index.html");

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  console.log(`prerendered ${url} -> ${path.relative(__dirname, outPath)}`);
}

// The SSR bundle is only needed during prerender; drop it from the output.
fs.rmSync(path.join(__dirname, "dist-ssr"), { recursive: true, force: true });
