import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets scroll on route change. When the URL carries a hash (e.g. "/#partner")
 * it scrolls that element into view instead of jumping to the top, so the
 * "Get Involved" funnels on the home page still work across routes.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}
