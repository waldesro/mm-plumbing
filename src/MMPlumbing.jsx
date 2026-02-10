import { useState } from "react";

import logo from "@/assets/transparent-logo.png";

import GalleryCarousel from "@/components/GalleryCarousel";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

/** Edit these later */
const BRAND = {
    name: "M&M Plumbing",
    tagline: "Plumbing Services",
    phoneDisplay: "(314) 276-8617",
    phoneTel: "++31412768617",
    email: "company@companymail.com",
    serviceAreas: ["St. Louis","Saint Peters", "O'Fallon", "St. Charles", "Wentzville", "Lake St. Louis"],
};

export default function MMPlumbing() {
    const [contactOpen, setContactOpen] = useState(false);

    return (
        <div className="min-h-screen w-full bg-slate-50 text-slate-900">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-slate-200">
                <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
                    {/* Logo */}
                    <img
                        src={logo}
                        alt={`${BRAND.name} logo`}
                        className="h-14 sm:h-16 md:h-18 w-auto object-contain"
                    />


                    <div className="flex items-center gap-2">
                        <Button
                            variant="primary"
                            className="rounded-full px-5 py-2 shadow-sm hover:shadow-md"
                            onClick={() => setContactOpen(true)}
                        >
                            Contact
                        </Button>

                        <a
                            href={`tel:${BRAND.phoneTel}`}
                            className="
                hidden sm:flex items-center
                rounded-full px-4 py-2 text-sm font-semibold
                border border-slate-200 bg-white
                text-(--elite-blue)
                hover:bg-(--elite-blue)/10
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
                                style={{ color: ELITE.blue }}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.51l.27 1.1a2 2 0 01-.45 1.84L7.21 9.79a16.06 16.06 0 007 7l2.34-2.34a2 2 0 011.84-.45l1.1.27A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.06 21 3 14.94 3 7V5z"
                                />
                            </svg>
                            {BRAND.phoneDisplay}
                        </a>

                        {/* Mobile: short call button */}
                        <a
                            href={`tel:${BRAND.phoneTel}`}
                            className="
                sm:hidden inline-flex items-center
                rounded-full px-4 py-2 text-sm font-semibold
                border border-slate-200 bg-white
                text-(--elite-blue)
                hover:bg-(--elite-blue)/10
                transition shadow-sm
              "
                        >
                            Call
                        </a>
                    </div>
                </div>
            </header>

            {/* HERO */}
            <section className="relative min-h-[70vh] flex items-center">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-[url('/images/background.png')] bg-cover bg-center"
                    aria-hidden="true"
                />

                {/* Dark/soft overlay (VERY important for readability) */}
                <div
                    className="absolute inset-0 bg-white/70"
                    aria-hidden="true"
                />

                {/* Content */}
                <div className="relative w-full px-4">
                    <div className="mx-auto max-w-6xl">
                        <div className="mx-auto max-w-3xl text-center">
                            <div className="inline-block relative">
                                {/* Ribbon background */}

                                <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold text-(--plumbing-red)">
                                    Cleaning & Landscaping{" "}
                                </h1>

                            </div>
                            <p className="mt-6 text-lg text-slate-600">
                                Professional cleaning for offices and homes, plus reliable landscaping
                                to keep your property sharp year-round.
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                                <Button
                                    variant="primary"
                                    className="px-6 py-3"
                                    onClick={() => setContactOpen(true)}
                                >
                                    Get a Free Estimate
                                </Button>

                                <Button
                                    variant="outline"
                                    className="px-6 py-3"
                                    onClick={() =>
                                        document
                                            .getElementById("services")
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                >
                                    View Services
                                </Button>
                            </div>

                            <div className="mt-6 text-sm text-slate-500">
                                Free estimates • Reliable scheduling • Fully focused on quality &amp; care
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
                            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold text-(--elite-green)">
                                Locally owned and service-driven
                            </h2>

                            <div className="mt-4 text-lg text-slate-600">
                                Consistent quality, clear communication, and respectful workmanship.
                            </div>
                        </div>

                        <div className="mt-8 space-y-4 text-slate-700 leading-relaxed">
                            <p>
                                At {BRAND.name}, we treat every property with care and precision. Our cleaning and landscaping services
                                are built on detailed checklists, dependable scheduling, and a commitment to leaving every space looking
                                its best—every time.
                            </p>

                            <p>
                                Whether it’s ongoing maintenance or a one-time refresh, you’ll see the difference in our consistency and results.
                            </p>

                            <p className="italic text-slate-600">
                                Our mission is excellence from beginning to end—accurate estimates, reliable scheduling, and a property that looks its best.
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
