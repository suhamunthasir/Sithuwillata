import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n";

export default function FeaturedStory() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-brand-charcoal py-24 sm:py-32">
      {/* soft glow accents */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-yellow/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-brand-yellow/10 blur-3xl" />

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Quote / text */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-yellow">
                {t.featuredStory.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <QuoteMark />
            </Reveal>
            <Reveal delay={0.1}>
              <blockquote className="mt-2 font-display text-3xl font-medium leading-[1.25] tracking-tight text-white sm:text-4xl lg:text-[2.7rem]">
                {t.featuredStory.quote}
              </blockquote>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex items-center gap-4">
                <span className="h-px w-12 bg-brand-yellow" />
                <div>
                  <p className="text-base font-semibold text-white">{t.featuredStory.name}</p>
                  <p className="text-sm text-white/55">{t.featuredStory.place}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/70">
                {t.featuredStory.body}
              </p>
            </Reveal>
          </div>

          {/* Portrait card */}
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-2xl"
            >
              {/* Replace with your own student portrait */}
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80"
                alt="A student supported by Sithuwillata Athwalak"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal-deep/40 to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-2xl bg-white/10 px-5 py-3 backdrop-blur-md">
                <p className="text-sm font-semibold text-white">
                  {t.featuredStory.badge}
                </p>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function QuoteMark() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-6 text-brand-yellow"
    >
      <path
        d="M9.5 6C6.5 7 5 9.5 5 13v5h5v-5H7.5c0-2 .8-3.5 2.5-4.2L9.5 6zm9 0c-3 1-4.5 3.5-4.5 7v5h5v-5h-2.5c0-2 .8-3.5 2.5-4.2L18.5 6z"
        fill="currentColor"
      />
    </svg>
  );
}
