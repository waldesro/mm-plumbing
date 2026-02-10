import { useMemo } from "react";
import {
  Wrench,
  Droplets,
  ShowerHead,
  Flame,
  Toilet,
  Trash2,
  Gauge,
  Home,
} from "lucide-react";

export default function Services() {
  const services = useMemo(
    () => [
      // PLUMBING
      {
        category: "Plumbing",
        title: "General Repairs",
        icon: Wrench,
        accent: "red",
        items: [
          "Leaky faucets, valves, and supply lines",
          "Toilet repairs and running water fixes",
          "Troubleshooting + reliable repairs",
        ],
      },
      {
        category: "Plumbing",
        title: "Fixture Installation",
        icon: ShowerHead,
        accent: "red",
        items: [
          "Faucets, sinks, toilets, and showers",
          "Replace worn or outdated fixtures",
          "Clean install + tested before we leave",
        ],
      },
      {
        category: "Plumbing",
        title: "Water Heaters",
        icon: Flame,
        accent: "red",
        items: [
          "Repair or replace standard water heaters",
          "Hot water issues + safety checks",
          "Sizing guidance for your home",
        ],
      },
      {
        category: "Plumbing",
        title: "Leak Detection",
        icon: Gauge,
        accent: "red",
        items: [
          "Find hidden leaks and water loss fast",
          "Pinpoint likely failure points",
          "Recommendations + next-step options",
        ],
      },

      // DRAIN & SEWER
      {
        category: "Drain & Sewer",
        title: "Drain Cleaning",
        icon: Droplets,
        accent: "blue",
        items: [
          "Kitchen, bathroom, and floor drains",
          "Clear clogs + improve flow",
          "Maintenance options available",
        ],
      },
      {
        category: "Drain & Sewer",
        title: "Toilet & Main Line Clogs",
        icon: Toilet,
        accent: "blue",
        items: [
          "Stoppages, backups, and slow drains",
          "Root / buildup troubleshooting",
          "Get your system flowing again",
        ],
      },
      {
        category: "Drain & Sewer",
        title: "Garbage Disposal",
        icon: Trash2,
        accent: "blue",
        items: [
          "Repair, replace, and new installs",
          "Jam removal and performance checks",
          "Proper operation + leak inspection",
        ],
      },
      {
        category: "Drain & Sewer",
        title: "Residential & Commercial",
        icon: Home,
        accent: "blue",
        items: [
          "Homes, offices, rentals, and small businesses",
          "One-time service or ongoing maintenance",
          "Fast scheduling + dependable work",
        ],
      },
    ],
    []
  );

  return (
    <section id="services" className="py-8 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="max-w-3xl text-center mx-auto">
          <p className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-(--plumbing-red)">
            Services
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            const isRed = service.accent === "red";

            // If you don't have --plumbing-blue, change it to slate:
            // "text-slate-700" / "bg-slate-100" etc.
            const accent = isRed
              ? "text-(--plumbing-red)"
              : "text-[color:var(--plumbing-blue)]";

            const chip = isRed
              ? "bg-[color:var(--plumbing-red)]/10 text-(--plumbing-red)"
              : "bg-[color:var(--plumbing-blue)]/10 text-[color:var(--plumbing-blue)]";

            const dot = isRed
              ? "bg-(--plumbing-red)"
              : "bg-[color:var(--plumbing-blue)]";

            return (
              <div
                key={service.title}
                className="
                  rounded-2xl bg-white border border-slate-200
                  p-6
                  shadow-none
                  hover:border-slate-300 hover:bg-slate-50/40
                  transition
                "
              >
                {/* Top row */}
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${chip}`}
                  >
                    {service.category}
                  </span>

                  <Icon className={accent} size={28} />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>

                <ul className="text-justify mt-4 space-y-2 text-[13px] sm:text-sm text-slate-600">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className={`mt-2 h-1.5 w-1.5 rounded-full flex-none ${dot}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
