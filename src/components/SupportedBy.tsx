import Reveal from "./Reveal";
import { useLanguage } from "../i18n";

export default function SupportedBy() {
  const { t } = useLanguage();
  const supporters = t.supportedBy.supporters;
  return (
    <section className="border-y border-brand-charcoal/5 bg-white py-14">
      <div className="container-x">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-brand-charcoal/45">
            {t.supportedBy.heading}
          </p>
        </Reveal>

        {/* Marquee strip of supporter "logo" boxes */}
        <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-4">
            {[...supporters, ...supporters].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex h-16 min-w-[200px] items-center justify-center gap-3 rounded-2xl border border-brand-charcoal/8 bg-brand-cream px-7"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-yellow" />
                <span className="whitespace-nowrap text-sm font-semibold text-brand-charcoal/70">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
