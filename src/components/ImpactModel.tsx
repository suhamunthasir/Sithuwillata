import { motion } from "framer-motion";
import Reveal from "./Reveal";

const CARDS = [
  {
    id: "projects",
    label: "Our Model",
    title: "Education Support",
    text: "School supplies, books, learning materials, and student support — delivered straight to the children who need them.",
    cta: "View Projects",
    href: "#projects",
    theme: "dark" as const,
    image:
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1100&q=80",
  },
  {
    id: "community",
    label: "Our Model",
    title: "Community Care",
    text: "Donation drives, volunteer visits, and on-the-ground support for families and rural communities in need.",
    cta: "Get Involved",
    href: "#volunteer",
    theme: "yellow" as const,
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1100&q=80",
  },
];

export default function ImpactModel() {
  return (
    <section id="projects" className="bg-white py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <span className="eyebrow">Two ways we create change</span>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-brand-charcoal sm:text-5xl">
              One mission, two hands working together.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-7">
          {CARDS.map((card, i) => {
            const isYellow = card.theme === "yellow";
            return (
              <Reveal key={card.id} delay={i * 0.12} className="h-full">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative flex h-full min-h-[460px] flex-col justify-end overflow-hidden rounded-5xl p-9 sm:p-11 ${
                    isYellow ? "bg-brand-yellow" : "bg-brand-charcoal"
                  }`}
                >
                  {/* image bleed */}
                  <div className="absolute inset-0">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className={`h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105 ${
                        isYellow ? "opacity-25 mix-blend-multiply" : "opacity-35"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 ${
                        isYellow
                          ? "bg-gradient-to-t from-brand-yellow via-brand-yellow/70 to-brand-yellow/20"
                          : "bg-gradient-to-t from-brand-charcoal via-brand-charcoal/75 to-brand-charcoal/20"
                      }`}
                    />
                  </div>

                  <div className="relative">
                    <span
                      className={`text-xs font-semibold uppercase tracking-[0.22em] ${
                        isYellow ? "text-brand-ink/70" : "text-brand-yellow"
                      }`}
                    >
                      {card.label}
                    </span>
                    <h3
                      className={`mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl ${
                        isYellow ? "text-brand-ink" : "text-white"
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`mt-4 max-w-md text-base leading-relaxed ${
                        isYellow ? "text-brand-ink/75" : "text-white/75"
                      }`}
                    >
                      {card.text}
                    </p>
                    <a
                      href={card.href}
                      className={`mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:gap-3 ${
                        isYellow
                          ? "bg-brand-ink text-white hover:bg-brand-charcoal-deep"
                          : "bg-brand-yellow text-brand-ink hover:bg-brand-yellow-deep"
                      }`}
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
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
