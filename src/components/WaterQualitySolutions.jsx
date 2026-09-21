import { useState } from "react";

const WaterQualitySolutions = () => {
  const [open, setOpen] = useState(false);

  const ENEVIVE_URL = "https://www.enevive.com/msquaredllc";

  const handleEneviveClick = () => {
    if (
      typeof window !== "undefined" &&
      typeof window.gtag === "function"
    ) {
      window.gtag("event", "enevive_referral_click", {
        event_category: "Water Quality",
        event_label: "Enevive Free Water Analysis",
        link_url: ENEVIVE_URL,
      });
    }
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="
            fixed
            z-40

            right-4 bottom-6

            md:right-0
            md:bottom-auto
            md:top-1/2
            md:-translate-y-1/2

            flex items-center gap-2

            rounded-full
            md:rounded-l-full
            md:rounded-r-none

            bg-(--plumbing-blue)
            px-5 py-3

            text-sm font-semibold text-white

            shadow-lg
            transition

            hover:shadow-xl
            hover:opacity-95
          "
          aria-label="Learn about water quality solutions"
        >
          {/* Water drop icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3.5S6.5 9.3 6.5 14.2a5.5 5.5 0 0011 0C17.5 9.3 12 3.5 12 3.5z"
            />
          </svg>

          Water Quality
        </button>
      )}

      {/* Floating card */}
      {open && (
        <div
          className="
            fixed
            z-50

            right-4 bottom-4

            w-[calc(100%-2rem)]
            max-w-sm

            md:right-6
            md:bottom-auto
            md:top-1/2
            md:-translate-y-1/2

            overflow-hidden
            rounded-2xl

            border border-slate-200
            bg-white

            shadow-2xl
          "
        >
          {/* Image */}
          <div className="relative h-48 bg-slate-100">
            <img
              src="/images/enevive.jpeg"
              alt="Child holding a glass of clean drinking water"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Close button */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="
                absolute right-3 top-3

                flex h-9 w-9
                items-center justify-center

                rounded-full
                bg-white/95

                text-xl font-semibold
                text-slate-700

                shadow-sm

                hover:bg-white
              "
              aria-label="Close water quality information"
            >
              ×
            </button>

            {/* Recommendation badge */}
            <div className="absolute bottom-4 left-4">
              <span
                className="
                  rounded-full
                  bg-(--plumbing-blue)/95
                  px-3 py-1.5

                  text-xs font-semibold
                  text-white
                "
              >
                Recommended by M&amp;M Plumbing
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <p
              className="
                text-xs font-bold uppercase
                tracking-wider
                text-(--plumbing-red)
              "
            >
              Water Quality Solutions
            </p>

            <h2
              className="
                mt-2
                text-2xl font-bold
                text-(--plumbing-blue)
              "
            >
              Know What&apos;s in Your Water
            </h2>

            <p className="mt-3 leading-relaxed text-slate-600">
              M&amp;M Plumbing recommends Enevive for homeowners who want to
              better understand their home&apos;s water quality and explore
              available treatment options.
            </p>

            <div className="mt-5 space-y-2 text-sm text-slate-700">
              <div className="flex gap-2">
                <span className="font-bold text-(--plumbing-blue)">✓</span>
                Complimentary water analysis
              </div>

              <div className="flex gap-2">
                <span className="font-bold text-(--plumbing-blue)">✓</span>
                Learn about your home&apos;s water quality
              </div>

              <div className="flex gap-2">
                <span className="font-bold text-(--plumbing-blue)">✓</span>
                Review available treatment options
              </div>
            </div>

            {/* CTA */}
            <a
              href={ENEVIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleEneviveClick}
              className="
                mt-6

                inline-flex w-full
                items-center justify-center

                rounded-full

                bg-(--plumbing-blue)

                px-5 py-3

                font-semibold
                text-white

                shadow-sm
                transition

                hover:shadow-md
                hover:opacity-90
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

            <p className="mt-3 text-center text-xs text-slate-500">
              Opens Enevive&apos;s M&amp;M Plumbing partner page.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WaterQualitySolutions;