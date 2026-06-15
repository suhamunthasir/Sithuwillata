import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../i18n";

/**
 * ════════════════════════════════════════════════════════════════════════
 *  HERO BACKGROUND IMAGE  ·  REPLACE ME LATER
 * ════════════════════════════════════════════════════════════════════════
 *  Full-bleed background photo that sits behind the headline (same layout as
 *  the reference hero). `HERO_IMAGE` is a temporary, free placeholder.
 *
 *  To use your own photo of Sri Lankan children / school visits / donation
 *  drives, just change HERO_IMAGE:
 *      - Local file:  put it in /public and use "/hero.jpg"
 *      - Or a hosted URL (Unsplash, Cloudinary, S3, etc.)
 * ════════════════════════════════════════════════════════════════════════
 */
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1624963146266-4481df1e40b5?auto=format&fit=crop&w=1920&q=80";

export default function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Subtle parallax: content drifts up & fades as you scroll past the hero.
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      id="top"
      ref={ref}
      className="bg-brand-cream px-3 pb-3 pt-20 sm:px-4 sm:pb-4 lg:px-5"
    >
      {/* Rounded, inset image card (same layout as the reference hero) */}
      <div className="relative h-[86svh] min-h-[600px] w-full overflow-hidden rounded-[1.75rem] sm:rounded-[2.25rem]">
        {/* Background image */}
        <motion.div style={{ scale: scaleBg }} className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Light-touch overlays: keep the photo vivid, darken only the
            bottom-left where the headline sits so it stays legible. */}
        <div className="absolute inset-0 bg-brand-charcoal-deep/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal-deep/85 via-brand-charcoal-deep/20 to-transparent" />

        {/* Hero content */}
        <motion.div
          style={{ y: yText, opacity }}
          className="relative flex h-full flex-col justify-end p-8 sm:p-12 lg:p-16"
        >
          <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            {t.hero.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[2.7rem] font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {t.hero.titlePre}
            <span className="text-brand-yellow">{t.hero.titleAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#donate" className="btn-primary text-base">
              {t.hero.donate}
              <ArrowIcon />
            </a>
            <a href="#volunteer" className="btn-ghost-light text-base">
              {t.hero.volunteer}
            </a>
          </motion.div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 lg:flex"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.3em]">
            {t.hero.scroll}
          </span>
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/40 p-1">
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-2 w-1 rounded-full bg-brand-yellow"
            />
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
