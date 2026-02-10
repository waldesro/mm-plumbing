import React from "react";
import clsx from "clsx";

export const Button = ({ variant = "primary", className, ...props }) => {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition border " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[var(--elite-green)] text-white border-[var(--elite-blue)] " +
      "hover:opacity-95 focus:ring-[var(--elite-blue)]/40",

    outline:
      "bg-white text-[var(--elite-blue)] border-[var(--elite-blue)]/30 " +
      "hover:bg-[var(--elite-blue)]/10 focus:ring-[var(--elite-blue)]/30",

    soft:
      "bg-[var(--elite-blue)]/10 text-[var(--elite-blue)] border-[var(--elite-blue)]/20 " +
      "hover:bg-[var(--elite-blue)]/20 focus:ring-[var(--elite-blue)]/30",

    success:
      "bg-[var(--elite-green)] text-white border-[var(--elite-green)] " +
      "hover:opacity-95 focus:ring-[var(--elite-green)]/40",
  };

  return (
    <button
      className={clsx(base, variants[variant], className)}
      {...props}
    />
  );
};
