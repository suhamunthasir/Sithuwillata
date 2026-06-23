import { Link } from "react-router-dom";
import Logo from "./Logo";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n";

/** Maps footer link labels to their route or in-page anchor. */
const LINK_MAP: Record<string, string> = {
  "About Us": "/about",
  Team: "/about",
  Contact: "/#contact",
  Impact: "/impact",
  Projects: "/projects",
  Gallery: "/gallery",
  Stories: "/impact",
  Donate: "/#partner",
  Volunteer: "/#partner",
  "Sponsor Supplies": "/#partner",
  "Partner With Us": "/#partner",
};

const SOCIALS = [
  { name: "Instagram", icon: InstagramIcon },
  { name: "Facebook", icon: FacebookIcon },
  { name: "TikTok", icon: TikTokIcon },
  { name: "YouTube", icon: YouTubeIcon },
];

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer id="contact" className="bg-brand-charcoal-deep text-white">
      {/* Big CTA band */}
      <div className="border-b border-white/10">
        <div className="container-x py-16 sm:py-20">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                {t.footer.ctaPre}
                <span className="text-brand-yellow">{t.footer.ctaAccent}</span>
              </h2>
              <Link to="/#partner" className="btn-primary shrink-0 text-base">
                {t.footer.getInvolved}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Link columns */}
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-xs">
            <Logo variant="light" />
            <p className="mt-5 text-sm leading-relaxed text-white/55">
              {t.footer.tagline}
            </p>
          </div>

          {t.footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      to={LINK_MAP[link] ?? "/"}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Socials + bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/45">
            &copy; {new Date().getFullYear()} Sithuwillata Athwalak.{" "}
            {t.footer.madeWith}
          </p>
          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href="#"
                aria-label={s.name}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all duration-300 hover:bg-brand-yellow hover:text-brand-ink"
              >
                <s.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------- social icons ----------------------------- */
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h2.5l.5-3H13v-2c0-.6.4-1 1-1z" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 3c.3 2.2 1.6 3.7 3.8 3.9V10c-1.4 0-2.7-.4-3.8-1.1v5.6c0 3.2-2.4 5.5-5.4 5.5-2.9 0-5.1-2.3-5.1-5.1 0-3 2.5-5.2 5.7-4.9v3.1c-.4-.1-.8-.2-1.2-.2-1.2 0-2.2 1-2.2 2.1 0 1.2 1 2.1 2.1 2.1 1.3 0 2.3-1 2.3-2.6V3H16z" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.6 8.2c-.2-1.1-.9-1.8-2-2C17.8 6 12 6 12 6s-5.8 0-7.6.2c-1.1.2-1.8.9-2 2C2.2 9.9 2.2 12 2.2 12s0 2.1.2 3.8c.2 1.1.9 1.8 2 2C6.2 18 12 18 12 18s5.8 0 7.6-.2c1.1-.2 1.8-.9 2-2 .2-1.7.2-3.8.2-3.8s0-2.1-.4-3.8zM10 15V9l5 3-5 3z" />
    </svg>
  );
}
