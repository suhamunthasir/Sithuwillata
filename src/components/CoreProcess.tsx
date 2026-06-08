import { motion } from "framer-motion";
import Reveal from "./Reveal";

/**
 * Placeholder imagery from Unsplash (free). Replace `image` URLs with your own
 * photos of school visits, donation packing, and deliveries.
 */
const STEPS = [
  {
    no: "01",
    title: "Identify Children & Schools in Need",
    text: "We connect with local schools and communities to understand what children need most.",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1100&q=80",
  },
  {
    no: "02",
    title: "Collect Donations & Resources",
    text: "We gather books, school supplies, funds, and volunteer support through trusted local campaigns.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1100&q=80",
  },
  {
    no: "03",
    title: "Deliver Support With Care",
    text: "We visit schools and communities directly to distribute support and create meaningful impact.",
    image:
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1100&q=80",
  },
];

export default function CoreProcess() {
  return (
    <section id="about" className="bg-brand-cream py-24 sm:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow">How we work</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-brand-charcoal sm:text-5xl lg:text-6xl">
              We Turn Kindness Into Real Educational Support
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-brand-charcoal/65">
              A simple, transparent process — from finding the children who need
              help most, to placing real resources in their hands.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-7">
          {STEPS.map((step, i) => (
            <Reveal key={step.no} delay={i * 0.12} className="h-full">
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group flex h-full flex-col overflow-hidden rounded-4xl bg-white shadow-[0_18px_50px_rgba(74,74,72,0.07)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal-deep/30 to-transparent" />
                  <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-yellow font-display text-lg font-bold text-brand-ink shadow-lg">
                    {step.no}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7 lg:p-8">
                  <h3 className="font-display text-2xl font-semibold leading-snug text-brand-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-brand-charcoal/60">
                    {step.text}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
