"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import FormField, { inputClasses } from "./FormField";
import Button from "@/components/ui/Button";
import { PRODUCTS, QUANTITY_TIERS } from "@/data/products";
import { isValidEmail, isValidIndianPhone, isValidGSTIN } from "@/lib/utils";

const MONTHLY_REQUIREMENTS = [
  "One-time bulk order",
  "Monthly requirement",
  "Quarterly requirement",
  "Not sure yet",
];

const initialState = {
  company: "",
  contactPerson: "",
  email: "",
  phone: "",
  gst: "",
  cityState: "",
  products: [],
  quantity: "",
  monthlyRequirement: "",
  message: "",
};

export default function BulkOrderForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const update = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const toggleProduct = (name) => {
    setForm((f) => ({
      ...f,
      products: f.products.includes(name)
        ? f.products.filter((p) => p !== name)
        : [...f.products, name],
    }));
    if (errors.products) setErrors((e) => ({ ...e, products: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.company.trim()) next.company = "Company name is required.";
    if (!form.contactPerson.trim()) next.contactPerson = "Contact person is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!isValidEmail(form.email)) next.email = "Enter a valid email address.";
    if (!form.phone.trim()) next.phone = "Phone number is required.";
    else if (!isValidIndianPhone(form.phone))
      next.phone = "Enter a valid 10-digit Indian mobile number.";
    if (form.gst.trim() && !isValidGSTIN(form.gst))
      next.gst = "Enter a valid 15-character GSTIN, or leave blank.";
    if (!form.cityState.trim()) next.cityState = "City/State is required.";
    if (form.products.length === 0) next.products = "Select at least one product.";
    if (!form.quantity.trim()) next.quantity = "Estimated quantity is required.";
    if (!form.monthlyRequirement) next.monthlyRequirement = "Please select an option.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      // NOTE: no order/lead backend has been wired up for this dedicated
      // form yet (only the existing quick product-quote modal has a live
      // endpoint). This simulates the request/response cycle so the UI
      // states are fully functional; hook up a real endpoint before launch.
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center">
        <CheckCircle2 size={48} className="mx-auto mb-4 text-emerald-500" />
        <h3 className="text-xl font-bold text-emerald-800">Enquiry Received!</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-emerald-700">
          Thank you for reaching out. Our team will review your requirement and
          get back to you shortly.
        </p>
        <Button variant="primary" className="mt-6" onClick={() => setStatus("idle")}>
          Submit Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Company Name" required error={errors.company}>
          <input
            className={inputClasses(errors.company)}
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            placeholder="e.g. Sharma Traders"
          />
        </FormField>

        <FormField label="Contact Person" required error={errors.contactPerson}>
          <input
            className={inputClasses(errors.contactPerson)}
            value={form.contactPerson}
            onChange={(e) => update("contactPerson", e.target.value)}
            placeholder="Full name"
          />
        </FormField>

        <FormField label="Email Address" required error={errors.email}>
          <input
            type="email"
            className={inputClasses(errors.email)}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@company.com"
          />
        </FormField>

        <FormField label="Phone Number" required error={errors.phone}>
          <input
            type="tel"
            maxLength={10}
            className={inputClasses(errors.phone)}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value.replace(/\D/g, ""))}
            placeholder="98XXXXXXXX"
          />
        </FormField>

        <FormField label="GST Number" error={errors.gst} hint="Optional, if registered">
          <input
            className={inputClasses(errors.gst)}
            value={form.gst}
            onChange={(e) => update("gst", e.target.value.toUpperCase())}
            placeholder="22AAAAA0000A1Z5"
            maxLength={15}
          />
        </FormField>

        <FormField label="City / State" required error={errors.cityState}>
          <input
            className={inputClasses(errors.cityState)}
            value={form.cityState}
            onChange={(e) => update("cityState", e.target.value)}
            placeholder="e.g. Surat, Gujarat"
          />
        </FormField>
      </div>

      <FormField label="Products Required" required error={errors.products}>
        <div className="grid grid-cols-1 gap-2.5 rounded-lg border border-slate-200 p-4 sm:grid-cols-2">
          {PRODUCTS.map((p) => (
            <label
              key={p.id}
              className="flex cursor-pointer items-center gap-2.5 rounded-md px-2 py-1.5 text-sm text-[var(--color-navy)] hover:bg-slate-50"
            >
              <input
                type="checkbox"
                checked={form.products.includes(p.name)}
                onChange={() => toggleProduct(p.name)}
                className="h-4 w-4 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
              />
              {p.name}
            </label>
          ))}
        </div>
      </FormField>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Estimated Quantity" required error={errors.quantity}>
          <select
            className={inputClasses(errors.quantity)}
            value={form.quantity}
            onChange={(e) => update("quantity", e.target.value)}
          >
            <option value="">Select quantity range</option>
            {QUANTITY_TIERS.map((tier) => (
              <option key={tier} value={tier}>
                {tier} units
              </option>
            ))}
            <option value="Custom">Custom / Above 500</option>
          </select>
        </FormField>

        <FormField
          label="Monthly Requirement"
          required
          error={errors.monthlyRequirement}
        >
          <select
            className={inputClasses(errors.monthlyRequirement)}
            value={form.monthlyRequirement}
            onChange={(e) => update("monthlyRequirement", e.target.value)}
          >
            <option value="">Select an option</option>
            {MONTHLY_REQUIREMENTS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <FormField label="Message" hint="Any specific requirements, delivery timelines, etc.">
        <textarea
          rows={4}
          className={inputClasses(false)}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us more about your requirement..."
        />
      </FormField>

      {status === "error" && (
        <p className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          <AlertCircle size={16} /> Something went wrong. Please try again or WhatsApp us directly.
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "submitting"}
        shine
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Submitting Enquiry...
          </>
        ) : (
          "Submit Bulk Order Enquiry"
        )}
      </Button>
    </form>
  );
}
