import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * ════════════════════════════════════════════════════════════════════════
 *  HERO BACKGROUND VIDEO  —  REPLACE ME LATER
 * ════════════════════════════════════════════════════════════════════════
 *  `HERO_VIDEO_SRC` below is a temporary, free, publicly-hosted placeholder
 *  so the hero works out of the box.
 *
 *  ➤ To use your own footage of Sri Lankan children / school visits /
 *    volunteers / donation drives, just change HERO_VIDEO_SRC to your file:
 *      - Local file:  put it in /public and use "/hero.mp4"
 *      - Or a hosted URL (Cloudflare Stream, Cloudinary, S3, etc.)
 *
 *  Good FREE sources for placeholder/temp footage:
 *      • https://www.pexels.com/videos/   (search: "sri lanka children school")
 *      • https://mixkit.co/free-stock-video/
 *      • https://pixabay.com/videos/
 *      • https://coverr.co/
 *
 *  `HERO_POSTER` is the fallback image shown while the video loads.
 * ════════════════════════════════════════════════════════════════════════
 */
const HERO_VIDEO_SRC =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4";
const HERO_POSTER =
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Subtle parallax: content drifts up & fades as you scroll past the hero.
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scaleVideo = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
    >
      {/* Background video */}
      <motion.div style={{ scale: scaleVideo }} className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_POSTER}
          preload="auto"
        >
          {/* 👇 REPLACE this source with your own Sri Lankan footage */}
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      </motion.div>

      {/* Dark overlays for legible text (matches New Story's cinematic look) */}
      <div className="absolute inset-0 bg-brand-charcoal-deep/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal-deep/85 via-brand-charcoal-deep/25 to-brand-charcoal-deep/55" />

      {/* Hero content */}
      <motion.div
        style={{ y: yText, opacity }}
        className="container-x relative flex h-full flex-col justify-end pb-24 sm:pb-28 lg:justify-center lg:pb-0"
      >
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            For Sri Lankan school children
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[2.7rem] font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            From Small Acts of Kindness to{" "}
            <span className="text-brand-yellow">Brighter Futures.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl"
          >
            We support Sri Lankan children with education, school supplies, and
            community care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#donate" className="btn-primary text-base">
              Donate
              <ArrowIcon />
            </a>
            <a href="#volunteer" className="btn-ghost-light text-base">
              Volunteer
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
          Scroll
        </span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/40 p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-brand-yellow"
          />
        </span>
      </motion.div>
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
