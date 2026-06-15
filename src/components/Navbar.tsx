import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../i18n";

const NAV_HREFS = ["#impact", "#projects", "#about", "#gallery"];
const GET_INVOLVED_META = [
  { href: "#donate", icon: HeartIcon },
  { href: "#volunteer", icon: HandIcon },
  { href: "#sponsor", icon: BookIcon },
  { href: "#partner", icon: UsersIcon },
];

export default function Navbar() {
  const { t } = useLanguage();
  const navLinks = NAV_HREFS.map((href, i) => ({
    href,
    label: t.nav.links[i].label,
  }));
  const getInvolved = GET_INVOLVED_META.map((meta, i) => ({
    ...meta,
    title: t.nav.getInvolved[i].title,
    desc: t.nav.getInvolved[i].desc,
  }));

  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // The hero is now an inset card on a cream page, so the bar always sits over
  // a light background — keep the logo and links dark whether scrolled or not.
  const variant: "light" | "dark" = "dark";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo ${
        scrolled
          ? "bg-white/95 shadow-[0_8px_30px_rgba(74,74,72,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
      onMouseLeave={() => setMegaOpen(false)}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Logo variant={variant} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-brand-charcoal/80 transition-colors hover:text-brand-charcoal"
            >
              {l.label}
            </a>
          ))}

          {/* Get Involved trigger + mega menu */}
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
          >
            <button
              className={`ml-2 flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                scrolled
                  ? "bg-brand-yellow text-brand-ink hover:bg-brand-yellow-deep"
                  : "bg-brand-yellow text-brand-ink hover:bg-white"
              }`}
              onClick={() => setMegaOpen((v) => !v)}
            >
              {t.nav.cta}
              <ChevronIcon open={megaOpen} />
            </button>

            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute right-0 top-[calc(100%+14px)] w-[640px] origin-top-right"
                >
                  <div className="overflow-hidden rounded-3xl border border-brand-charcoal/5 bg-white p-3 shadow-[0_24px_60px_rgba(74,74,72,0.18)]">
                    <div className="grid grid-cols-2 gap-2">
                      {getInvolved.map((card) => (
                        <a
                          key={card.title}
                          href={card.href}
                          className="group flex items-start gap-3 rounded-2xl p-4 transition-colors hover:bg-brand-cream"
                        >
                          <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-yellow/15 text-brand-yellow-deep transition-colors group-hover:bg-brand-yellow group-hover:text-brand-ink">
                            <card.icon />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-brand-charcoal">
                              {card.title}
                            </span>
                            <span className="mt-0.5 block text-xs leading-relaxed text-brand-charcoal/55">
                              {card.desc}
                            </span>
                          </span>
                        </a>
                      ))}
                    </div>
                    <div className="mt-2 flex items-center justify-between rounded-2xl bg-brand-charcoal px-5 py-4">
                      <span className="text-sm text-white/90">
                        {t.nav.megaTagline}
                      </span>
                      <a href="#donate" className="btn-primary !px-5 !py-2 text-xs">
                        {t.nav.donateNow}
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* Language switch (English default, Sinhala optional) */}
          <LanguageToggle variant="dark" className="ml-2" />
        </nav>

        {/* Mobile toggle */}
        <button
          className="text-brand-charcoal lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <BurgerIcon open={mobileOpen} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-white lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-6">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-brand-charcoal hover:bg-brand-cream"
                >
                  {l.label}
                </a>
              ))}
              <div className="my-3 h-px bg-brand-charcoal/10" />
              <p className="px-4 text-xs font-semibold uppercase tracking-widest text-brand-charcoal/40">
                {t.nav.getInvolvedHeading}
              </p>
              {getInvolved.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-brand-cream"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-yellow/15 text-brand-yellow-deep">
                    <card.icon />
                  </span>
                  <span className="text-sm font-medium text-brand-charcoal">
                    {card.title}
                  </span>
                </a>
              ))}
              <a
                href="#donate"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-4"
              >
                {t.nav.donateToday}
              </a>
              <div className="mt-5 flex justify-start px-1">
                <LanguageToggle variant="dark" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ----------------------------- icons ----------------------------- */
function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d={open ? "M6 6l12 12" : "M4 7h16"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {!open && (
        <path d="M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      )}
      {open && (
        <path d="M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      )}
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21s-7.5-4.6-10-9.3C.7 9 2 5.5 5.3 5.1 7.4 4.8 9 6 12 8.9 15-6.1 16.6 4.8 18.7 5.1 22 5.5 23.3 9 22 11.7 19.5 16.4 12 21 12 21z"
        fill="currentColor"
        transform="translate(0 -1)"
      />
    </svg>
  );
}
function HandIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 11V6a1.5 1.5 0 013 0v5M10 11V4.5a1.5 1.5 0 013 0V11M13 11V6a1.5 1.5 0 013 0v6M16 9.5a1.5 1.5 0 013 0V14c0 3.3-2.7 6-6 6h-1.6c-1.7 0-3.3-.8-4.3-2.2L4 13.5c-.6-.9.4-2 1.4-1.6L7 12.6" />
    </svg>
  );
}
function BookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5.5A2.5 2.5 0 016.5 3H12v16H6.5A2.5 2.5 0 004 21.5zM20 5.5A2.5 2.5 0 0017.5 3H12v16h5.5a2.5 2.5 0 012.5 2.5z" />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0112 0M16 5.5a3 3 0 010 5.8M21 20a6 6 0 00-4.5-5.8" />
    </svg>
  );
}
