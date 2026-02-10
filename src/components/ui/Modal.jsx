import { useEffect } from "react";

export const Modal = ({ open, title, onClose, children }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-[1px]"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative z-10 w-[95vw] max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Accent top bar */}
        <div className="h-1.5 w-full bg-[#14608D]" />

        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-lg font-semibold text-slate-900">{title}</div>
              <div className="mt-1 text-sm text-slate-600">
                {/* Optional subtle subtitle line; remove if you don’t want it */}
              </div>
            </div>

            <button
              className="rounded-xl border border-slate-200 px-3 py-1.5 text-sm font-semibold text-[#14608D]
                         hover:bg-[#14608D]/10 focus:outline-none focus:ring-2 focus:ring-[#14608D]/30 focus:ring-offset-2"
              onClick={onClose}
              type="button"
            >
              Close
            </button>
          </div>

          {/* Body */}
          <div className="mt-4 text-slate-700">{children}</div>
        </div>
      </div>
    </div>
  );
};
