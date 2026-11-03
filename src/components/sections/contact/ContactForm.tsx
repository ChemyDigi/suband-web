"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const FIELD =
  "peer w-full border-b border-line-strong bg-transparent pb-3 pt-6 text-base text-ivory outline-none transition-colors duration-500 focus:border-gold";
const LABEL =
  "pointer-events-none absolute left-0 top-6 text-sm text-muted transition-all duration-300 peer-focus:top-0 peer-focus:text-[0.65rem] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-gold peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.65rem] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.2em]";

/** Demo form — no backend wired. Submitting shows a confirmation state. */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-line p-10 text-center"
          >
            <p className="font-display text-4xl text-gold">Thank you.</p>
            <p className="mt-4 text-sm text-ivory-2">
              Your enquiry has been noted. The workshop will reply within one working day.
            </p>
            <button onClick={() => setSent(false)} className="link-sweep mt-8 text-xs uppercase tracking-[0.2em] text-gold">
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            exit={{ opacity: 0, y: -20 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="grid gap-10 md:grid-cols-2"
          >
            <Field id="name" label="Your name" />
            <Field id="org" label="Organisation (optional)" />
            <Field id="email" label="Email" type="email" />
            <Field id="phone" label="Phone" type="tel" />
            <div className="relative md:col-span-2">
              <select id="type" defaultValue="" className={`${FIELD} appearance-none`} required>
                <option value="" disabled hidden />
                <option value="trophies">Brass trophies</option>
                <option value="plaques">Presentation plaques</option>
                <option value="acrylic">Acrylic & crystal awards</option>
                <option value="medals">Medals & medallions</option>
                <option value="souvenirs">Souvenirs & mementos</option>
                <option value="labels">Anodised aluminium labels</option>
                <option value="restoration">Restoration</option>
                <option value="other">Something else</option>
              </select>
              <label htmlFor="type" className="pointer-events-none absolute left-0 top-0 text-[0.65rem] uppercase tracking-[0.2em] text-gold">
                What are you looking for?
              </label>
              <span className="pointer-events-none absolute right-0 top-8 h-2 w-2 rotate-45 border-b border-r border-gold" />
            </div>
            <div className="relative md:col-span-2">
              <textarea id="msg" rows={4} placeholder=" " className={`${FIELD} resize-none`} required />
              <label htmlFor="msg" className={LABEL}>
                Tell us about the occasion, quantity and date
              </label>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="group relative inline-flex items-center gap-4 overflow-hidden bg-gold px-10 py-5 text-[0.7rem] uppercase tracking-[0.26em] text-ink transition-colors duration-500 hover:text-ivory"
              >
                <span className="absolute inset-0 translate-y-full bg-ink-3 transition-transform duration-600 ease-[cubic-bezier(.76,0,.24,1)] group-hover:translate-y-0" />
                <span className="relative">Send enquiry</span>
              </button>
              <p className="mt-4 text-xs text-muted">Demo form for presentation — not yet connected to email.</p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ id, label, type = "text" }: { id: string; label: string; type?: string }) {
  return (
    <div className="relative">
      <input id={id} type={type} placeholder=" " className={FIELD} required={!label.includes("optional")} />
      <label htmlFor={id} className={LABEL}>
        {label}
      </label>
    </div>
  );
}
