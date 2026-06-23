import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { useLanguage } from "../i18n";

export default function Gallery() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader
        eyebrow={t.pages.gallery.eyebrow}
        title={t.pages.gallery.title}
        subtitle={t.pages.gallery.subtitle}
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x">
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {t.pages.gallery.images.map((img, i) => (
              <Reveal key={img.src} delay={(i % 3) * 0.06}>
                <figure className="group relative overflow-hidden rounded-3xl border border-brand-charcoal/5 shadow-[0_12px_40px_rgba(74,74,72,0.06)]">
                  <img
                    src={img.src}
                    alt={img.caption}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-brand-charcoal-deep/85 to-transparent p-5 pt-12 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {img.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
