"use client";
import { useState } from "react";
import Field from "@/components/Field";
import BrowserFrame from "@/utilis/BrowserFrame";
import { sendEmail } from "@/actions/sendEmail";

const budgetOptions = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
];

const hearOptions = [
  "Google",
  "Twitter / X",
  "LinkedIn",
  "Referral",
  "GitHub",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    budget: "",
    hearAboutUs: "",
    projectDetails: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await sendEmail(form);
      console.log(res);
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({
        fullName: "",
        email: "",
        budget: "",
        hearAboutUs: "",
        projectDetails: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 py-40">
      <div className="w-full max-w-2xl">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-3">
            Let's work together
          </h1>
          <p className="text-white/45">
            Tell us about your project and we'll get back to you within 24
            hours.
          </p>
        </div>

        <BrowserFrame title="contact.exe" highlight>
          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-5">
            {/* Full Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field
                label="Full Name"
                name="fullName"
                type="text"
                placeholder="John Doe"
                value={form.fullName}
                onChange={handleChange}
              />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            {/* Budget */}
            <div className="flex flex-col gap-1.5">
              <label className="text-white/45 text-xs font-mono">
                Project Budget
              </label>
              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                required
                className="bg-[#0d0d0d] border border-white/10 text-white text-sm  px-4 py-3 outline-none focus:border-[#22c55e] transition-colors"
              >
                <option value="" disabled>
                  Select a budget range
                </option>
                {budgetOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            {/* How did you hear */}
            <div className="flex flex-col gap-1.5">
              <label className="text-white/45 text-xs font-mono">
                How did you hear about us?
              </label>
              <select
                name="hearAboutUs"
                value={form.hearAboutUs}
                onChange={handleChange}
                required
                className="bg-[#0d0d0d] border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-[#22c55e] transition-colors"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {hearOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            {/* Project Details */}
            <div className="flex flex-col gap-1.5">
              <label className="text-white/45 text-xs font-mono">
                Tell us about your project
              </label>
              <textarea
                name="projectDetails"
                value={form.projectDetails}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Describe your project, goals, timeline..."
                className="bg-[#0d0d0d] border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-[#22c55e] transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 bg-[#22c55e] text-black font-semibold text-sm hover:bg-[#16a34a] transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send Message →"}
            </button>

            {status === "success" && (
              <p className="text-[#22c55e] text-sm text-center">
                ✓ Message sent! We'll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </BrowserFrame>
      </div>
    </main>
  );
}
