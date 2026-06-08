import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Reveal from "./Reveal";

const STATS = [
  {
    value: 500,
    suffix: "+",
    label: "Students Supported",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80",
  },
  {
    value: 25,
    suffix: "+",
    label: "Schools Reached",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80",
  },
  {
    value: 100,
    suffix: "+",
    label: "Volunteers",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
  },
  {
    value: 15,
    suffix: "+",
    label: "Projects Completed",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=900&q=80",
  },
  {
    value: 4,
    suffix: "+",
    label: "Districts Reached",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80",
  },
];

/**
 * GSAP-driven count-up that fires when the number scrolls into view.
 */
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || played) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPlayed(true);
          const obj = { n: 0 };
          gsap.to(obj, {
            n: value,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = Math.round(obj.n).toString();
            },
          });
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, played]);

  return (
    <span className="tabular-nums">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

export default function ImpactNumbers() {
  return (
    <section id="impact" className="bg-brand-cream py-24 sm:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Our impact so far</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-brand-charcoal sm:text-5xl lg:text-6xl">
              Kindness, measured in real change.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-5 lg:mt-20 lg:grid-cols-5">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.08}
              className={i === 4 ? "col-span-2 lg:col-span-1" : ""}
            >
              <div className="group relative h-full overflow-hidden rounded-3xl bg-brand-charcoal">
                <img
                  src={stat.image}
                  alt={stat.label}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-30 transition-all duration-700 ease-out-expo group-hover:scale-110 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal-deep via-brand-charcoal/70 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-6 sm:p-7 min-h-[210px]">
                  <span className="font-display text-5xl font-bold tracking-tight text-brand-yellow sm:text-[3.4rem]">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="mt-2 text-sm font-medium leading-snug text-white/85">
                    {stat.label}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
