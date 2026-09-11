const WaterQualitySolutions = () => {
  const ENEVIVE_URL = "https://www.enevive.com/msquaredllc";

  const handleEneviveClick = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "enevive_referral_click", {
        event_category: "Water Quality",
        event_label: "Enevive Free Water Analysis",
        link_url: ENEVIVE_URL,
      });
    }
  };

  return (
    <section id="water-quality" className="py-8 px-4 bg-(--plumbing-blue)/10">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-(--plumbing-red)">
            Water Quality Solutions
          </h2>

          <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-(--plumbing-blue)">
            Know What&apos;s in Your Water
          </h3>

          <div className="mt-4 text-lg text-slate-600">
            A simple first step toward better water for your home.
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative min-h-[300px] lg:min-h-[400px] bg-slate-100">
              <img
                src="/images/enevive.jpeg"
                alt="Child holding a glass of clean drinking water"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5">
                <span className="rounded-full bg-(--plumbing-blue)/90 px-4 py-2 text-sm font-semibold text-white shadow-sm">
                  Recommended by M&amp;M Plumbing
                </span>
              </div>
            </div>

            {/* Text */}
            <div className="p-6 sm:p-8 lg:p-10 flex items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-(--plumbing-red)">
                  Complimentary Water Analysis
                </p>

                <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-(--plumbing-blue)">
                  Start With Better Information
                </h3>

                <div className="mt-5 space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    M&amp;M Plumbing recommends Enevive for homeowners who want
                    to better understand the quality of the water they use every
                    day.
                  </p>

                  <p>
                    Begin with a complimentary water analysis and explore
                    available solutions based on your home&apos;s specific
                    water-quality needs.
                  </p>
                </div>

                {/* Benefits */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-(--plumbing-blue) text-white">
                      ✓
                    </span>
                    <span>Learn more about your home&apos;s water quality</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-(--plumbing-blue) text-white">
                      ✓
                    </span>
                    <span>Review available treatment options</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-(--plumbing-blue) text-white">
                      ✓
                    </span>
                    <span>No-obligation consultation</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <a
                    href={ENEVIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleEneviveClick}
                    className="
                      inline-flex items-center justify-center
                      rounded-full
                      px-6 py-3
                      font-semibold
                      bg-(--plumbing-blue)
                      text-white
                      shadow-sm
                      hover:shadow-md
                      hover:opacity-90
                      transition
                    "
                  >
                    Get Your Free Water Analysis
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-2 h-5 w-5"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 010-1.06L8.94 10 5.22 6.28a.75.75 0 111.06-1.06l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0zm5 0a.75.75 0 010-1.06L13.94 10l-3.72-3.72a.75.75 0 111.06-1.06l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>

                  <p className="mt-3 text-sm text-slate-500">
                    You&apos;ll be redirected to Enevive&apos;s M&amp;M Plumbing
                    partner page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterQualitySolutions;
