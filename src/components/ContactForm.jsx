import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import {ELITE} from "@/lib/brand";

export default function ContactForm({ onSuccess }) {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [sending, setSending] = useState(false);

  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  // Elite brand colors (logo-based)
  const ELITE_BLUE = "#14608D";
  const ELITE_GREEN = "#448A35";

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
        setCaptchaToken(null);

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

  const inputClass =
    "border border-slate-300 p-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-0";

  const selectClass =
    "border border-slate-300 p-3 rounded-xl shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-offset-0";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4 mt-4">
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className={inputClass}
        style={{ "--tw-ring-color": `${ELITE_BLUE}33` }}
      />

      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className={inputClass}
        style={{ "--tw-ring-color": `${ELITE_BLUE}33` }}
      />

      <input
        type="text"
        name="user_phone"
        placeholder="Your Phone (optional)"
        className={inputClass}
        style={{ "--tw-ring-color": `${ELITE_BLUE}33` }}
      />

      {/* NEW: Service Type */}
      <select
        name="service_type"
        required
        className={selectClass}
        style={{ "--tw-ring-color": `${ELITE_BLUE}33` }}
        defaultValue=""
      >
        <option value="" disabled>
          Service Type
        </option>
        <option value="Cleaning">Cleaning</option>
        <option value="Landscaping">Landscaping</option>
        <option value="Cleaning + Landscaping">Cleaning + Landscaping</option>
      </select>

      {/* NEW: Property Type */}
      <select
        name="property_type"
        required
        className={selectClass}
        style={{ "--tw-ring-color": `${ELITE_BLUE}33` }}
        defaultValue=""
      >
        <option value="" disabled>
          Property Type
        </option>
        <option value="Office / Commercial">Office / Commercial</option>
        <option value="House / Residential">House / Residential</option>
        <option value="Other">Other</option>
      </select>

      {/* NEW: Frequency */}
      <select
        name="frequency"
        required
        className={selectClass}
        style={{ "--tw-ring-color": `${ELITE_BLUE}33` }}
        defaultValue=""
      >
        <option value="" disabled>
          Frequency
        </option>
        <option value="One-time">One-time</option>
        <option value="Weekly">Weekly</option>
        <option value="Biweekly">Biweekly</option>
        <option value="Monthly">Monthly</option>
        <option value="Seasonal (landscaping)">Seasonal (landscaping)</option>
      </select>

      <textarea
        name="message"
        placeholder="Tell us what you need (sq ft, rooms, schedule, yard size, etc.)"
        required
        rows={5}
        className={inputClass}
        style={{ "--tw-ring-color": `${ELITE_BLUE}33` }}
      />

      {!RECAPTCHA_SITE_KEY ? (
        <p className="text-sm text-red-600">
          Missing <strong>VITE_RECAPTCHA_SITE_KEY</strong> in your environment.
        </p>
      ) : (
        <ReCAPTCHA
          sitekey={RECAPTCHA_SITE_KEY}
          onChange={(token) => setCaptchaToken(token)}
          className="mx-auto"
        />
      )}

      <button
        type="submit"
        disabled={sending}
        className="text-white px-6 py-2 rounded-xl transition disabled:opacity-60"
        style={{
          backgroundColor: ELITE_BLUE,
        }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = "0.92")}
        onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
      >
        {sending ? "Sending..." : "Send Message"}
      </button>

      {sent && (
        <p className="mt-2 font-medium" style={{ color: ELITE_GREEN }}>
          Message sent successfully!
        </p>
      )}

      {error && <p className="text-red-600 mt-2">{error}</p>}
    </form>
  );
}
