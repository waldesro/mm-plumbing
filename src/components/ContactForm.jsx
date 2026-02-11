import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { PLUMBING } from "@/lib/brand";

export default function ContactForm({ onSuccess }) {
  const formRef = useRef(null);
  const recaptchaRef = useRef(null);

  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [sending, setSending] = useState(false);

  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  // Brand colors (fallbacks included)
  const PRIMARY = PLUMBING?.colors?.primary || "var(--plumbing-red)";
  const SUCCESS = PLUMBING?.colors?.success || "rgb(34 197 94)"; // green-500
  const RING = "rgba(220, 38, 38, 0.22)"; // soft red focus ring fallback

  const inputClass =
    "w-full border border-slate-300 px-3 py-2.5 rounded-xl shadow-sm text-sm " +
    "focus:outline-none focus:ring-2 focus:ring-offset-0";

  const selectClass =
    "w-full border border-slate-300 px-3 py-2.5 rounded-xl shadow-sm bg-white text-sm " +
    "focus:outline-none focus:ring-2 focus:ring-offset-0";

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!captchaToken) {
      setError("Please verify you are not a robot.");
      return;
    }

    setSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSent(true);
        setSending(false);

        formRef.current?.reset();

        // Reset captcha state + widget
        setCaptchaToken(null);
        recaptchaRef.current?.reset?.();

        setTimeout(() => {
          setSent(false);
          onSuccess?.();
        }, 2000);
      })
      .catch((err) => {
        setSending(false);
        setError("Something went wrong. Please try again.");
        console.error(err);
      });
  };

  return (
    // Compact width + responsive padding
    <div className="w-full max-w-xl mx-auto px-2 sm:px-0">
      <form ref={formRef} onSubmit={handleSubmit} className="grid gap-3 mt-3">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className={inputClass}
          style={{ "--tw-ring-color": RING }}
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className={inputClass}
          style={{ "--tw-ring-color": RING }}
        />

        <input
          type="tel"
          name="user_phone"
          placeholder="Your Phone"
          required
          className={inputClass}
          style={{ "--tw-ring-color": RING }}
        />

        {/* Service Type */}
        <select
          name="service_type"
          required
          className={selectClass}
          style={{ "--tw-ring-color": RING }}
          defaultValue=""
        >
          <option value="" disabled>
            Service Needed
          </option>
          <option value="General Plumbing Repair">General Plumbing Repair</option>
          <option value="Drain Cleaning / Clog">Drain Cleaning / Clog</option>
          <option value="Leak Detection / Leak Repair">Leak Detection / Leak Repair</option>
          <option value="Toilet Repair / Replacement">Toilet Repair / Replacement</option>
          <option value="Faucet / Fixture Install">Faucet / Fixture Install</option>
          <option value="Water Heater Repair / Replace">Water Heater Repair / Replace</option>
          <option value="Garbage Disposal">Garbage Disposal</option>
          <option value="Other">Other</option>
        </select>

        {/* Property Type */}
        <select
          name="property_type"
          required
          className={selectClass}
          style={{ "--tw-ring-color": RING }}
          defaultValue=""
        >
          <option value="" disabled>
            Property Type
          </option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Rental / Property Management">Rental / Property Management</option>
          <option value="Other">Other</option>
        </select>

        {/* Urgency */}
        <select
          name="urgency"
          required
          className={selectClass}
          style={{ "--tw-ring-color": RING }}
          defaultValue=""
        >
          <option value="" disabled>
            How urgent is this?
          </option>
          <option value="Emergency (Active leak / backup)">Emergency (Active leak / backup)</option>
          <option value="Today">Today</option>
          <option value="This week">This week</option>
          <option value="Not urgent / quote">Not urgent / quote</option>
        </select>

        {/* Optional: ZIP */}
        <input
          type="text"
          name="service_zip"
          placeholder="ZIP code (optional)"
          className={inputClass}
          style={{ "--tw-ring-color": RING }}
        />

        <textarea
          name="message"
          placeholder="Describe the issue (where it’s happening, when it started, access notes, etc.)"
          required
          rows={3}
          className={inputClass}
          style={{ "--tw-ring-color": RING }}
        />

        {!RECAPTCHA_SITE_KEY ? (
          <p className="text-sm text-red-600">
            Missing <strong>VITE_RECAPTCHA_SITE_KEY</strong> in your environment.
          </p>
        ) : (
          // Slightly smaller captcha + tighter spacing
          <div className="mx-auto scale-[0.92] origin-top">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={(token) => setCaptchaToken(token)}
            />
          </div>
        )}

        <button
          type="submit"
          disabled={sending}
          className="w-full text-white px-5 py-2 rounded-xl text-sm font-semibold transition disabled:opacity-60"
          style={{ backgroundColor: PRIMARY }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = "0.92")}
          onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
        >
          {sending ? "Sending..." : "Request Service"}
        </button>

        {sent && (
          <p className="mt-1 text-sm font-medium text-center" style={{ color: SUCCESS }}>
            Message sent successfully!
          </p>
        )}

        {error && <p className="text-red-600 mt-1 text-sm text-center">{error}</p>}
      </form>
    </div>
  );
}
