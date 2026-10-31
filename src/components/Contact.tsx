"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { sendEmail } from "../actions/sendEmail";

export default function Contact() {
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);
    setStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);

    if (result?.error) {
      setStatus({ type: "error", message: result.error });
    } else {
      setStatus({ type: "success", message: "Message sent. I\u2019ll reply soon." });
      (e.target as HTMLFormElement).reset();
    }

    setIsPending(false);
  }

  return (
    <section
      className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="font-headline-md text-headline-md text-text-primary mb-4">
          Get in touch
        </h2>
        <p className="font-body-md text-on-surface-variant mb-10">
          Open to new opportunities. Send a question or just say hi, and
          I&apos;ll get back to you as soon as I can.
        </p>
        <form className="space-y-4 text-left" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                className="font-label-caps text-label-caps text-on-surface-variant mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                name="name"
                className="bg-surface-container-low border border-surface-stroke rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors duration-150"
                id="name"
                placeholder="Your name"
                type="text"
                required
                disabled={isPending}
              />
            </div>
            <div className="flex flex-col">
              <label
                className="font-label-caps text-label-caps text-on-surface-variant mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                name="email"
                className="bg-surface-container-low border border-surface-stroke rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors duration-150"
                id="email"
                placeholder="you@example.com"
                type="email"
                required
                disabled={isPending}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              className="font-label-caps text-label-caps text-on-surface-variant mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              className="bg-surface-container-low border border-surface-stroke rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors duration-150 resize-none"
              id="message"
              placeholder="What are you working on?"
              rows={4}
              required
              disabled={isPending}
            ></textarea>
          </div>

          {status.message && (
            <div role="status"
              className={`p-4 rounded-xl border font-body-md text-sm ${status.type === "success" ? "border-surface-stroke bg-surface-container-low text-text-primary" : "border-error/30 bg-error/10 text-error"}`}
            >
              {status.message}
            </div>
          )}

          <button
            disabled={isPending}
            className="w-full inline-flex items-center justify-center h-12 px-5 rounded-xl bg-primary-container text-surface-container-low font-body-md font-medium hover:opacity-90 active:scale-[0.99] transition-[opacity,transform] duration-150 mt-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
          >
            {isPending ? "Sending…" : "Send message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
