import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { useLanguage } from "../i18n";

const TAG_STYLES: Record<string, string> = {
  Ongoing: "bg-brand-yellow/20 text-brand-yellow-deep",
  Completed: "bg-emerald-100 text-emerald-700",
  Upcoming: "bg-brand-charcoal/10 text-brand-charcoal",
};

export default function Projects() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader
        eyebrow={t.pages.projects.eyebrow}
        title={t.pages.projects.title}
        subtitle={t.pages.projects.subtitle}
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {t.pages.projects.items.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-charcoal/5 bg-brand-cream shadow-[0_12px_40px_rgba(74,74,72,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(74,74,72,0.12)]">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span
                      className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
                        TAG_STYLES[p.tag] ?? "bg-white/90 text-brand-charcoal"
                      }`}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-medium uppercase tracking-wider text-brand-yellow-deep">
                      {p.place}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-brand-charcoal">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/60">
                      {p.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
