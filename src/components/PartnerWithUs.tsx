import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n";

const CARD_META = [
  { id: "donate", href: "#donate", icon: HeartIcon },
  { id: "volunteer", href: "#volunteer", icon: HandIcon },
  { id: "partner", href: "#partner", icon: UsersIcon },
];

export default function PartnerWithUs() {
  const { t } = useLanguage();
  const CARDS = CARD_META.map((meta, i) => ({ ...meta, ...t.partner.cards[i] }));
  return (
    <section id="partner" className="bg-white py-24 sm:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">{t.partner.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-brand-charcoal sm:text-5xl lg:text-6xl">
              {t.partner.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-brand-charcoal/65">
              {t.partner.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:mt-20 lg:gap-7">
          {CARDS.map((card, i) => (
            <Reveal key={card.id} delay={i * 0.12} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group flex h-full flex-col rounded-4xl border border-brand-charcoal/8 bg-brand-cream p-8 transition-shadow duration-500 hover:shadow-[0_24px_60px_rgba(74,74,72,0.1)] lg:p-9"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-yellow text-brand-ink shadow-lg shadow-brand-yellow/30 transition-transform duration-500 ease-out-expo group-hover:-rotate-6">
                  <card.icon />
                </span>
                <h3 className="mt-7 font-display text-3xl font-semibold tracking-tight text-brand-charcoal">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-brand-charcoal/60">
                  {card.text}
                </p>
                <a
                  href={card.href}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-charcoal transition-all duration-300 group-hover:gap-3 group-hover:text-brand-yellow-deep"
                >
                  {card.cta}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeartIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
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
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 11V6a1.5 1.5 0 013 0v5M10 11V4.5a1.5 1.5 0 013 0V11M13 11V6a1.5 1.5 0 013 0v6M16 9.5a1.5 1.5 0 013 0V14c0 3.3-2.7 6-6 6h-1.6c-1.7 0-3.3-.8-4.3-2.2L4 13.5c-.6-.9.4-2 1.4-1.6L7 12.6" />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0112 0M16 5.5a3 3 0 010 5.8M21 20a6 6 0 00-4.5-5.8" />
    </svg>
  );
}
