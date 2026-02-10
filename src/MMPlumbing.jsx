import { useEffect, useRef, useState } from "react";

import logo from "@/assets/logo-flat-transparent.png";

import GalleryCarousel from "@/components/GalleryCarousel";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { PLUMBING } from "./lib/brand";

/** Edit these later */
const BRAND = {
  name: "M&M Plumbing",
  tagline: "Plumbing Services",
  phoneDisplay: "(314) 276-8617",
  phoneTel: "+13142768617",
  email: "company@companymail.com",
  serviceAreas: ["St. Charles", "St. Peters", "O'Fallon", "Wentzville", "St. Louis County"],
};

export default function MMPlumbing() {
  const [contactOpen, setContactOpen] = useState(false);

  // One-logo rule:
  // - at top: show hero logo, hide header logo
  // - after scroll: hide hero logo, show header logo
  const heroSentinelRef = useRef(null);
  const [scrolledPastHeroTop, setScrolledPastHeroTop] = useState(false);

  useEffect(() => {
    const el = heroSentinelRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => setScrolledPastHeroTop(!entry.isIntersecting),
      { threshold: 0.01 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900">
      {/* Header (logo left, buttons right; logo hidden until scroll) */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
          {/* Header Logo (LEFT) — hidden while hero logo is visible */}
          <img
            src={logo}
            alt={`${BRAND.name} logo`}
            className={[
              "h-16 sm:h-16 md:h-18 w-auto object-contain transition-all duration-300",
              scrolledPastHeroTop ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none",
            ].join(" ")}
          />

          {/* Buttons (RIGHT) */}
          <div className="flex items-center gap-2">
            <Button
              variant="primary"
              className="rounded-full px-5 py-2 shadow-sm hover:shadow-md"
              onClick={() => setContactOpen(true)}
            >
              Contact Us
            </Button>

            <a
              href={`tel:${BRAND.phoneTel}`}
              className="
                hidden sm:flex items-center
                rounded-full px-4 py-2 text-sm font-semibold
                border border-slate-200 bg-white
                text-(--plumbing-blue)
                hover:bg-(--plumbing-blue)/10
                transition shadow-sm
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                style={{ color: PLUMBING.blue }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.51l.27 1.1a2 2 0 01-.45 1.84L7.21 9.79a16.06 16.06 0 007 7l2.34-2.34a2 2 0 011.84-.45l1.1.27A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.06 21 3 14.94 3 7V5z"
                />
              </svg>
              {BRAND.phoneDisplay}
            </a>

            {/* Mobile short call button */}
            <a
              href={`tel:${BRAND.phoneTel}`}
              className="
                sm:hidden inline-flex items-center
                rounded-full px-4 py-2 text-sm font-semibold
                border border-slate-200 bg-white
                text-(--plumbing-blue)
                hover:bg-(--plumbing-blue)/10
                transition shadow-sm
              "
            >
              Call
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center pt-24">
        {/* Sentinel at top of hero */}
        <div ref={heroSentinelRef} className="absolute top-0 left-0 h-1 w-full" />

        {/* Background image */}
        <div
          className="absolute inset-0 bg-[url('/images/background.png')] bg-cover bg-center"
          aria-hidden="true"
        />

        {/* Soft overlay for readability */}
        <div className="absolute inset-0 bg-white/70" aria-hidden="true" />

        {/* BIG floating hero logo (RIGHT) — DESKTOP ONLY — hidden after scroll */}
        <div className="pointer-events-none hidden lg:block absolute right-10 xl:right-14 top-24 z-10">
          <img
            src={logo}
            alt={`${BRAND.name} logo`}
            className={[
              "w-auto object-contain drop-shadow-xl transition-all duration-300",
              "h-[170px] xl:h-[210px]",
              scrolledPastHeroTop ? "opacity-0 -translate-y-2 scale-95" : "opacity-100 translate-y-0 scale-100",
            ].join(" ")}
          />
        </div>

        {/* Content */}
        <div className="relative w-full px-4 py-18">
          <div className="mx-auto max-w-6xl py-8">
            <div className="mx-auto max-w-3xl text-center lg:text-left lg:max-w-2xl">
              {/* MOBILE hero logo (in flow, no overlap) — hidden after scroll */}
              <div className="lg:hidden flex justify-center mb-4">
                <img
                  src={logo}
                  alt={`${BRAND.name} logo`}
                  className={[
                    "h-24 sm:h-28 w-auto object-contain drop-shadow transition-all duration-300",
                    scrolledPastHeroTop ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100",
                  ].join(" ")}
                />
              </div>

              <div className="inline-block relative">
                <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-(--plumbing-red)">
                  Reliable Plumbing
                </h1>
                <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold text-(--plumbing-blue)">
                  Local Experts You Can Trust
                </h1>
              </div>

              <p className="mt-6 text-lg text-slate-600">
                At <span className="font-semibold">M&amp;M Plumbing</span>, we treat your home like our own.
                From urgent repairs to installations, we deliver honest pricing, quality workmanship, and
                service done right the first time.
              </p>

              {/* Trust badges */}
              <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm text-slate-600">
                <span className="rounded-full border border-slate-200 bg-(--plumbing-blue)/70 text-white px-3 py-1">
                  Licensed, Insured &amp; Bonded Since 2004
                </span>
                <span className="rounded-full border border-slate-200 bg-(--plumbing-blue)/70 text-white px-3 py-1">
                  Emergency Service Available
                </span>
                <span className="rounded-full border border-slate-200 bg-(--plumbing-blue)/70 text-white px-3 py-1">
                  Upfront, Honest Pricing
                </span>
                <span className="rounded-full border border-slate-200 bg-(--plumbing-blue)/70 text-white px-3 py-1">
                  Residential &amp; Commercial
                </span>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button
                  variant="outline"
                  className="px-6 py-3"
                  onClick={() =>
                    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Services
                </Button>
              </div>

              <div className="mt-6 text-sm text-slate-500">
                Free estimates • Reliable solutions • Quality &amp; care you can count on
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-(--plumbing-red)">
                Locally owned. Service driven.
              </h2>

              <div className="mt-4 text-lg text-slate-600">
                Honest plumbing, clear communication, and dependable results.
              </div>
            </div>

            <div className="mt-8 space-y-4 text-slate-700 leading-relaxed">
              <p>
                At {BRAND.name}, we believe great plumbing starts with doing things the right way.
                We approach every home and business with care, professionalism, and attention to detail—
                from the first call to the final walkthrough.
              </p>

              <p>
                Our services are built on accurate diagnostics, upfront recommendations, and quality
                workmanship you can trust. Whether it’s a small repair, routine maintenance, or a more
                complex plumbing issue, we focus on long-term solutions—not shortcuts.
              </p>

              <p className="italic text-slate-600">
                Our goal is simple: show up on time, communicate clearly, and leave your plumbing
                system working exactly as it should.
              </p>
            </div>

            {/* Service area chips */}
            <div className="mt-8 flex flex-wrap gap-2 justify-center">
              {BRAND.serviceAreas.map((a) => (
                <span
                  key={a}
                  className="rounded-full px-3 py-1 text-sm border border-slate-200 bg-white text-slate-700"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Services />

      {/* Gallery */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <GalleryCarousel title="Work Gallery" subtitle="Gallery" autoPlay autoPlayInterval={5000} />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-slate-400 bg-white">
        © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
      </footer>

      {/* Modals */}
      <Modal open={contactOpen} title="Contact Us" onClose={() => setContactOpen(false)}>
        <ContactForm onSuccess={() => setContactOpen(false)} />
      </Modal>
    </div>
  );
}
