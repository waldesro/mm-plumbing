import { useEffect, useState } from "react";

import logo from "@/assets/logo-cropped.png";

import WorkGallery from "@/components/WorkGallery";
import Services from "@/components/Services";
import ReviewSection from "@/components/GoogleReviews";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { PLUMBING } from "./lib/brand";

/** Edit these later */
const BRAND = {
    name: "M&M Plumbing LLC",
    tagline: "Plumbing Services",
    phoneDisplay: "(314) 276-8617",
    phoneTel: "+13142768617",
    email: "mcroy@msquaredllc.com",
    serviceAreas: ["St. Charles", "St. Peters", "O'Fallon", "Wentzville", "St. Louis County"],
};

export default function MMPlumbing() {
    const [contactOpen, setContactOpen] = useState(false);

    // Header shrink state
    const [scrolledPastHeroTop, setScrolledPastHeroTop] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            // tweak threshold if you want it to shrink later/sooner
            setScrolledPastHeroTop(window.scrollY > 40);
        };

        onScroll(); // initialize on mount
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="min-h-screen w-full bg-slate-50 text-slate-900">
            {/* Header */}
            <header
                className={[
                    "fixed top-0 left-0 w-full z-50 backdrop-blur border-b border-slate-200 transition-all duration-300",
                    scrolledPastHeroTop ? "bg-white/95" : "bg-white/80",
                ].join(" ")}
            >
                <div
                    className={[
                        "mx-auto max-w-6xl px-4 flex items-center justify-between gap-3 transition-all duration-300",
                        scrolledPastHeroTop ? "py-1.5" : "py-3",
                    ].join(" ")}
                >
                    {/* Logo (scales with header) */}
                    <img
                        src={logo}
                        alt={`${BRAND.name} logo`}
                        className={[
                            "w-auto object-contain transition-all duration-300",
                            scrolledPastHeroTop
                                ? "h-14 sm:h-16"
                                : "h-20 sm:h-24 md:h-28"
                            ,
                        ].join(" ")}
                    />

                    {/* Right-side actions */}
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

                        {/* Mobile call */}
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
            <section className="relative min-h-[70vh] flex items-center pt-28">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-[url('/images/background.png')] bg-cover bg-center"
                    aria-hidden="true"
                />

                {/* Soft overlay */}
                <div className="absolute inset-0 bg-white/70" aria-hidden="true" />

                {/* Content */}
                <div className="relative w-full px-4 py-18">
                    <div className="mx-auto max-w-6xl py-8">
                        <div className="mx-auto max-w-3xl text-center">
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
                            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-600">
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

                            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
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
                                Locally owned
                            </h2>
                            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold text-(--plumbing-blue)">
                                Service driven
                            </h2>
                            <div className="mt-4 text-lg text-slate-600">
                                Honest plumbing, clear communication, and dependable results.
                            </div>
                        </div>

                        <div className="mt-8 space-y-4 text-slate-700 leading-relaxed">
                            <p>
                                At {BRAND.name}, we believe great plumbing starts with doing things the right way. We
                                approach every home and business with care, professionalism, and attention to detail—
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
                    <WorkGallery
                        title="Work Gallery"
                        subtitle="A few examples of recent projects."
                        autoPlay
                        autoPlayInterval={5000}
                    />
                </div>
            </section>

            {/* Reviews Section */}
            <section className="py-8 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-(--plumbing-red)">
                                What our customers say
                            </h2>
                        </div>
                    <ReviewSection />
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
