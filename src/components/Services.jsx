import { useMemo } from "react";
import {
  Sparkles,
  Building2,
  Home,
  ClipboardCheck,
  Leaf,
  Scissors,
  Shovel,
  Trees,
} from "lucide-react";

export default function Services() {
  const services = useMemo(
    () => [
      // CLEANING
      {
        category: "Cleaning",
        title: "Office Cleaning",
        icon: Building2,
        accent: "blue",
        items: [
          "Restrooms, breakrooms, and common areas",
          "Trash & recycling + high-touch disinfection",
          "Flexible scheduling (weekly / nightly)",
        ],
      },
      {
        category: "Cleaning",
        title: "House Cleaning",
        icon: Home,
        accent: "blue",
        items: [
          "Kitchens, bathrooms, bedrooms, living areas",
          "Dusting, vacuuming, mopping, and detailing",
          "Recurring plans available",
        ],
      },
      {
        category: "Cleaning",
        title: "Deep Cleaning",
        icon: Sparkles,
        accent: "blue",
        items: [
          "Detail-focused top-to-bottom cleaning",
          "Baseboards, corners, and buildup areas",
          "Great for seasonal resets",
        ],
      },
      {
        category: "Cleaning",
        title: "Move In / Move Out",
        icon: ClipboardCheck,
        accent: "blue",
        items: [
          "Rental turnovers and listing prep",
          "Cabinets, appliances exterior, bathrooms detailed",
          "Final clean that feels “new”",
        ],
      },

      // LANDSCAPING
      {
        category: "Landscaping",
        title: "Lawn Mowing & Edging",
        icon: Leaf,
        accent: "green",
        items: [
          "Clean cuts + crisp edges",
          "Driveways/sidewalks blown off",
          "Scheduled weekly or biweekly",
        ],
      },
      {
        category: "Landscaping",
        title: "Trimming & Pruning",
        icon: Scissors,
        accent: "green",
        items: [
          "Shrubs, hedges, and light tree trimming",
          "Shape and tidy overgrowth",
          "Debris cleanup included",
        ],
      },
      {
        category: "Landscaping",
        title: "Mulch & Bed Refresh",
        icon: Shovel,
        accent: "green",
        items: [
          "Bed edging and refresh for curb appeal",
          "Mulch install and light weed pulling",
          "Clean finish around plants and borders",
        ],
      },
      {
        category: "Landscaping",
        title: "Seasonal Cleanup",
        icon: Trees,
        accent: "green",
        items: [
          "Leaf/branch pickup and haul-away options",
          "Spring or fall cleanups",
          "Final blow-down for a polished look",
        ],
      },
    ],
    []
  );

  return (
    <section id="services" className="py-8 px-4 bg-green-50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="max-w-3xl text-center mx-auto">
          <p className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold text-(--elite-green)">
            Services
          </p>
        </div>
        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            const isGreen = service.accent === "green";

            const accent = isGreen
              ? "text-[color:var(--elite-green)]"
              : "text-[color:var(--elite-blue)]";

            const chip = isGreen
              ? "bg-[color:var(--elite-green)]/10 text-[color:var(--elite-green)]"
              : "bg-[color:var(--elite-blue)]/10 text-[color:var(--elite-blue)]";

            const dot = isGreen
              ? "bg-[color:var(--elite-green)]"
              : "bg-[color:var(--elite-blue)]";

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
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${chip}`}>
                    {service.category}
                  </span>

                  <Icon className={`${accent}`} size={28} />
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
