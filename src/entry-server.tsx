import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

/** Renders the app for a single route to an HTML string (used by prerender.mjs). */
export function render(url: string): string {
  return renderToString(
    <MemoryRouter initialEntries={[url]}>
      <App />
    </MemoryRouter>
  );
}

/** The routes that get their own prerendered .html file. */
export const ROUTES = ["/", "/impact", "/projects", "/about", "/gallery"];
