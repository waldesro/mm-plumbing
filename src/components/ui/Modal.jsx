import { useEffect } from "react";

export const Modal = ({ open, title, onClose, children }) => {
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);

    // Prevent background scroll while modal is open (mobile especially)
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-[1px]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog wrapper */}
      <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-6">
        {/* Panel */}
        <div
          role="dialog"
          aria-modal="true"
          className="
            relative z-10 w-[95vw] max-w-2xl
            rounded-2xl bg-white shadow-2xl
            max-h-[90vh] overflow-hidden
          "
        >
          {/* Accent top bar */}
          <div className="h-1.5 w-full bg-[#14608D]" />

          {/* Sticky header (always visible) */}
          <div className="sticky top-0 z-10 bg-white px-6 pt-5 pb-4 border-b border-slate-200">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-lg font-semibold text-slate-900">{title}</div>
                <div className="mt-1 text-sm text-slate-600">{/* optional subtitle */}</div>
              </div>

              <button
                className="
                  rounded-xl border border-slate-200 px-3 py-1.5 text-sm font-semibold text-[#14608D]
                  hover:bg-[#14608D]/10 focus:outline-none focus:ring-2 focus:ring-[#14608D]/30 focus:ring-offset-2
                "
                onClick={onClose}
                type="button"
              >
                Close
              </button>
            </div>
          </div>

          {/* Scrollable body */}
          <div className="px-6 py-4 overflow-y-auto max-h-[calc(90vh-72px)]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
