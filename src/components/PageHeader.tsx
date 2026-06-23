import Reveal from "./Reveal";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-brand-cream pt-36 pb-12 sm:pt-44 sm:pb-16">
      <div className="container-x">
        <Reveal>
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow-deep">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-brand-charcoal sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-charcoal/60">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
