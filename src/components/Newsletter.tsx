import { useState } from "react";
import Reveal from "./Reveal";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  // NOTE: No backend wired up yet — this only simulates a successful submit.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="gallery" className="bg-brand-cream py-24 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-yellow px-8 py-14 sm:px-14 sm:py-16 lg:px-20">
            {/* decorative sparks */}
            <Spark className="absolute right-10 top-8 h-16 w-16 text-brand-ink/10" />
            <Spark className="absolute -bottom-6 left-10 h-24 w-24 text-brand-ink/10" />

            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-brand-ink sm:text-5xl">
                  Follow Our Journey
                </h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-brand-ink/70">
                  Get updates about our projects, donation drives, and school
                  visits.
                </p>
              </div>

              <div>
                {submitted ? (
                  <div className="rounded-3xl bg-brand-ink px-8 py-10 text-center">
                    <p className="font-display text-2xl font-semibold text-brand-yellow">
                      ස්තූතියි! 🙏
                    </p>
                    <p className="mt-2 text-white/80">
                      Thank you for joining our journey.
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
                        placeholder="First Name"
                        className="w-full rounded-2xl bg-brand-cream px-5 py-4 text-sm text-brand-charcoal placeholder:text-brand-charcoal/40 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        className="w-full rounded-2xl bg-brand-cream px-5 py-4 text-sm text-brand-charcoal placeholder:text-brand-charcoal/40 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                      />
                    </div>
                    <button type="submit" className="btn-dark mt-3 w-full text-base">
                      Subscribe
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

function Spark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2c1.2 8 1.8 8.8 10 10-8.2 1.2-8.8 2-10 10-1.2-8-1.8-8.8-10-10 8.2-1.2 8.8-2 10-10z"
        fill="currentColor"
      />
    </svg>
  );
}
