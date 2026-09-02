"use client";

import { useState } from "react";
import { X, CheckCircle2, AlertCircle } from "lucide-react";
import { QUANTITY_TIERS } from "@/data/products";

// Reused as-is from the pre-existing product-details lead capture flow.
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzgI_994UuggZq56wEnjGYp4EjH-RLOr9hNJNtBijNX_iS_enhHo3KsYIyYN68SBi6CAw/exec";

export default function QuoteModal({ open, onClose, productName }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", quantity: "" });

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    const formBody = new URLSearchParams();
    formBody.append("name", formData.name);
    formBody.append("phone", formData.phone);
    formBody.append(
      "quantity",
      `${formData.quantity} of ${productName ?? "AT-ONE product"}`
    );

    try {
      await fetch(SCRIPT_URL, { method: "POST", body: formBody });
      setSubmitStatus("success");
      setTimeout(() => {
        onClose();
        setSubmitStatus("");
        setFormData({ name: "", phone: "", quantity: "" });
      }, 2500);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-slate-400 transition-colors hover:text-slate-700"
        >
          <X size={22} />
        </button>

        <div className="p-8">
          <h2 className="mb-1 text-2xl font-bold text-[var(--color-navy)]">
            Get Wholesale Pricing
          </h2>
          <p className="mb-6 text-sm text-[var(--color-muted)]">
            Share your details and our factory team will get back to you directly
            {productName ? ` about ${productName}` : ""}.
          </p>

          {submitStatus === "success" ? (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center">
              <CheckCircle2 size={40} className="mx-auto mb-3 text-emerald-500" />
              <h3 className="font-bold text-emerald-800">Quote Requested!</h3>
              <p className="mt-1 text-sm text-emerald-600">We will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Business Name / Your Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-[var(--color-navy)] outline-none transition-all focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20"
                  placeholder="e.g. Rahul Enterprises"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  WhatsApp Number (10 Digits)
                </label>
                <input
                  required
                  type="tel"
                  maxLength={10}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-[var(--color-navy)] outline-none transition-all focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20"
                  placeholder="98XXXXXXXX"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })
                  }
                />
                <p className="mt-1 text-[10px] text-slate-400">Do not include +91 or 0</p>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Estimated Quantity Required
                </label>
                <select
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-[var(--color-navy)] outline-none transition-all focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                >
                  <option value="" disabled>
                    Select Quantity
                  </option>
                  {QUANTITY_TIERS.map((tier) => (
                    <option key={tier} value={tier}>
                      {tier} Pieces
                    </option>
                  ))}
                </select>
              </div>

              {submitStatus === "error" && (
                <p className="flex items-center gap-1.5 text-sm text-red-600">
                  <AlertCircle size={14} /> Something went wrong. Please try again or WhatsApp us.
                </p>
              )}

              <button
                disabled={isSubmitting}
                type="submit"
                className="mt-2 w-full rounded-lg bg-[var(--color-primary)] py-3.5 font-bold text-white shadow-soft transition-all active:scale-[0.98] disabled:bg-slate-400"
              >
                {isSubmitting ? "Sending Request..." : "Submit Inquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
