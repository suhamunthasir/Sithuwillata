import { useState } from "react";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n";

export default function Newsletter() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  // NOTE: No backend wired up yet; this only simulates a successful submit.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="gallery" className="bg-brand-cream py-24 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-yellow px-8 py-14 sm:px-14 sm:py-16 lg:px-20">
            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-brand-ink sm:text-5xl">
                  {t.newsletter.heading}
                </h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-brand-ink/70">
                  {t.newsletter.intro}
                </p>
              </div>

              <div>
                {submitted ? (
                  <div className="rounded-3xl bg-brand-ink px-8 py-10 text-center">
                    <p className="font-display text-2xl font-semibold text-brand-yellow">
                      {t.newsletter.thanksTitle}
                    </p>
                    <p className="mt-2 text-white/80">
                      {t.newsletter.thanksBody}
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="rounded-3xl bg-white p-3 shadow-xl shadow-brand-ink/10"
                  >
                    <div className="grid gap-3 sm:grid-cols-2">
                      <input
                        type="text"
                        required
                        placeholder={t.newsletter.firstName}
                        className="w-full rounded-2xl bg-brand-cream px-5 py-4 text-sm text-brand-charcoal placeholder:text-brand-charcoal/40 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                      />
                      <input
                        type="email"
                        required
                        placeholder={t.newsletter.email}
                        className="w-full rounded-2xl bg-brand-cream px-5 py-4 text-sm text-brand-charcoal placeholder:text-brand-charcoal/40 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                      />
                    </div>
                    <button type="submit" className="btn-dark mt-3 w-full text-base">
                      {t.newsletter.subscribe}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
