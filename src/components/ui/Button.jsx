import React from "react";
import clsx from "clsx";

export const Button = ({ variant = "primary", className, ...props }) => {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition border " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[var(--plumbing-red)] text-white border-[var(--plumbing-blue)] " +
      "hover:opacity-95 focus:ring-[var(--plumbing-blue)]/40",

    outline:
      "bg-white text-[var(--plumbing-blue)] border-[var(--plumbing-blue)]/30 " +
      "hover:bg-[var(--plumbing-blue)]/10 focus:ring-[var(--plumbing-blue)]/30",

    soft:
      "bg-[var(--plumbing-blue)]/10 text-[var(--plumbing-blue)] border-[var(--plumbing-blue)]/20 " +
      "hover:bg-[var(--plumbing-blue)]/20 focus:ring-[var(--plumbing-blue)]/30",

    success:
      "bg-[var(--plumbing-red)] text-white border-[var(--plumbing-red)] " +
      "hover:opacity-95 focus:ring-[var(--plumbing-red)]/40",
  };

  return (
    <button
      className={clsx(base, variants[variant], className)}
      {...props}
    />
  );
};
