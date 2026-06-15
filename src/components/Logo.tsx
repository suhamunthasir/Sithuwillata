/**
 * Brand logo for Sithuwillata Athwalak / සිතුවිල්ලට අත්වැලක්
 *
 * This renders an SVG re-creation of the brand mark (two cupping hands
 * cradling a "spark of hope") plus the Sinhala + English wordmark, built
 * entirely from the logo colours so it looks right with no external asset.
 *
 * ──────────────────────────────────────────────────────────────────────────
 * TO USE YOUR EXACT UPLOADED PNG/SVG LOGO INSTEAD:
 *   1. Save your logo file to:  public/logo.png   (or logo.svg)
 *   2. Replace the <BrandMark /> below with:
 *        <img src="/logo.png" alt="Sithuwillata Athwalak" className="h-10 w-auto" />
 * ──────────────────────────────────────────────────────────────────────────
 */

import { useLanguage } from "../i18n";

type LogoProps = {
  /** "light" = for dark backgrounds (hero video). "dark" = for light backgrounds. */
  variant?: "light" | "dark";
  /** Show the text wordmark next to the mark. */
  showText?: boolean;
  className?: string;
};

function BrandMark({ variant = "dark" }: { variant?: "light" | "dark" }) {
  // On a dark background the charcoal hand would vanish, so it becomes white.
  const handColor = variant === "light" ? "#FFFFFF" : "#4A4A48";
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-10 w-10 shrink-0"
      fill="none"
      aria-hidden="true"
    >
      {/* lower cupping hand */}
      <path
        d="M13 35 C13 50 22 58 32 58 C42 58 51 50 51 35"
        stroke={handColor}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      {/* second hand, slightly offset, in brand yellow */}
      <path
        d="M19 31 C19 43 25 49 32 49 C39 49 45 43 45 31"
        stroke="#F4B400"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
      {/* spark of hope / brighter future */}
      <path
        d="M32 6 C33.6 18 36 22.4 49 24.6 C36 26.8 33.6 31.2 32 43 C30.4 31.2 28 26.8 15 24.6 C28 22.4 30.4 18 32 6 Z"
        fill="#F4B400"
      />
    </svg>
  );
}

export default function Logo({
  variant = "dark",
  showText = true,
  className = "",
}: LogoProps) {
  const { t, lang } = useLanguage();
  const titleColor = variant === "light" ? "text-white" : "text-brand-charcoal";
  const subColor =
    variant === "light" ? "text-white/70" : "text-brand-charcoal/60";

  return (
    <a
      href="#top"
      className={`group flex items-center gap-3 ${className}`}
      aria-label="Sithuwillata Athwalak home"
    >
      <span className="transition-transform duration-500 ease-out-expo group-hover:-rotate-6">
        <BrandMark variant={variant} />
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className={`text-lg font-extrabold tracking-tight ${
              lang === "si" ? "font-sinhala" : ""
            } ${titleColor}`}
          >
            {t.logo.title}
          </span>
          <span
            className={`mt-0.5 text-[10px] font-semibold ${
              lang === "en"
                ? "font-sinhala tracking-tight"
                : "uppercase tracking-[0.28em]"
            } ${subColor}`}
          >
            {t.logo.sub}
          </span>
        </span>
      )}
    </a>
  );
}
