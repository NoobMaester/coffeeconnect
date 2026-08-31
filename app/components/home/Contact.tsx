"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
        "idle"
    );

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setStatus("sending");

        // API connection will be added later.
        await new Promise((resolve) => setTimeout(resolve, 800));

        setStatus("success");
    }

    return (
        <section
            id="contact"
            className="bg-[#315B3A] px-6 py-24 text-white lg:px-8 lg:py-32"
        >
            <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.8fr_2.1fr] lg:gap-24">
                {/* Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="max-w-4xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d6ad72]">
                                Let&apos;s connect
                            </p>

                            <h2 className="mt-5 max-w-4xl text-[clamp(3rem,8vw,5rem)] font-semibold leading-[0.98] tracking-tight">
                                Coffee connects everything we do.
                            </h2>

                            <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                                Whether you want to buy Rwandan coffee, build practical skills,
                                support inclusive development or explore a partnership, we&apos;d love to hear from you. There is
                                a place for you in our ecosystem.
                            </p>

                        </div>
                    </div>
                </motion.div>

                {/* Form */}
                <div>
                    <p className="text-sm mb-5 font-semibold uppercase tracking-[0.25em] text-[#d6ad72]">
                        Get in touch
                    </p>

                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-8"
                    >
                        <div>
                            <label
                                htmlFor="name"
                                className="mt-5 mb-3 block text-sm font-medium text-white"
                            >
                                Full name
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                placeholder="Your full name"
                                className="w-full border-b border-white/30 bg-transparent px-0 py-4 text-base text-white outline-none transition placeholder:text-white/60 focus:border-[#d6ad72]"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="mb-3 block text-sm font-medium text-white"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="you@example.com"
                                className="w-full border-b border-white/30 bg-transparent px-0 py-4 text-base text-white outline-none transition placeholder:text-white/60 focus:border-[#d6ad72]"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="mb-3 block text-sm font-medium text-white"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                placeholder="Tell us a little about what you'd like to discuss..."
                                className="w-full resize-none border-b border-white/30 bg-transparent px-0 py-4 text-base text-white outline-none transition placeholder:text-white/60 focus:border-[#d6ad72]"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="inline-flex cursor-pointer rounded-full bg-[#315B3A] border border-2-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#25482d] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {status === "sending" ? "Sending..." : "Send message"}
                        </button>

                        {status === "success" && (
                            <p className="text-sm font-medium text-[#315B3A]">
                                Thanks! Your message has been received.
                            </p>
                        )}

                        {status === "error" && (
                            <p className="text-sm font-medium text-red-600">
                                Something went wrong. Please try again.
                            </p>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
}