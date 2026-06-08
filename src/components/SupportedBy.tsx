import Reveal from "./Reveal";

const SUPPORTERS = [
  "Local Donors",
  "Volunteers",
  "Schools",
  "Communities",
  "Teachers",
  "Families",
];

export default function SupportedBy() {
  return (
    <section className="border-y border-brand-charcoal/5 bg-white py-14">
      <div className="container-x">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-brand-charcoal/45">
            Supported by kind hearts across Sri Lanka
          </p>
        </Reveal>

        {/* Marquee strip of supporter "logo" boxes */}
        <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-4">
            {[...SUPPORTERS, ...SUPPORTERS].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex h-16 min-w-[200px] items-center justify-center gap-3 rounded-2xl border border-brand-charcoal/8 bg-brand-cream px-7"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-yellow/20 text-brand-yellow-deep">
                  <DotMark />
                </span>
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

function DotMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3c1 7 2 8 9 9-7 1-8 2-9 9-1-7-2-8-9-9 7-1 8-2 9-9z"
        fill="currentColor"
      />
    </svg>
  );
}
