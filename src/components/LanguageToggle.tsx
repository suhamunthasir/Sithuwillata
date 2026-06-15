import { useLanguage, type Lang } from "../i18n";

type ToggleProps = {
  /** "light" = for dark/transparent backgrounds, "dark" = for solid light bars. */
  variant?: "light" | "dark";
  className?: string;
};

const OPTIONS: { value: Lang; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "si", label: "සිං" },
];

/**
 * Compact English / Sinhala language switch. The whole site is English by
 * default; this lets visitors switch to Sinhala whenever they like.
 */
export default function LanguageToggle({
  variant = "dark",
  className = "",
}: ToggleProps) {
  const { lang, setLang } = useLanguage();

  const track =
    variant === "light"
      ? "bg-white/10 ring-1 ring-white/30"
      : "bg-brand-charcoal/5 ring-1 ring-brand-charcoal/10";

  return (
    <div
      role="group"
      aria-label="Select language"
      className={`inline-flex items-center rounded-full p-0.5 ${track} ${className}`}
    >
      {OPTIONS.map((opt) => {
        const active = lang === opt.value;
        const inactiveText =
          variant === "light" ? "text-white/70" : "text-brand-charcoal/60";
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setLang(opt.value)}
            aria-pressed={active}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
              active
                ? "bg-brand-yellow text-brand-ink"
                : `${inactiveText} hover:text-brand-yellow`
            } ${opt.value === "si" ? "font-sinhala" : ""}`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
