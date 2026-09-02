"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import FormField, { inputClasses } from "./FormField";
import Button from "@/components/ui/Button";
import { isValidEmail, isValidIndianPhone, isValidGSTIN } from "@/lib/utils";

const BUSINESS_TYPES = [
  "Distributor / Wholesaler",
  "Retail Store",
  "Supermarket / Hypermarket",
  "Online Marketplace Seller",
  "Institutional Buyer",
  "Other",
];

const initialState = {
  company: "",
  contactPerson: "",
  email: "",
  phone: "",
  gst: "",
  cityState: "",
  businessType: "",
  preferredTerritory: "",
  message: "",
};

export default function DistributorForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const update = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.company.trim()) next.company = "Business/company name is required.";
    if (!form.contactPerson.trim()) next.contactPerson = "Contact person is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!isValidEmail(form.email)) next.email = "Enter a valid email address.";
    if (!form.phone.trim()) next.phone = "Phone number is required.";
    else if (!isValidIndianPhone(form.phone))
      next.phone = "Enter a valid 10-digit Indian mobile number.";
    if (form.gst.trim() && !isValidGSTIN(form.gst))
      next.gst = "Enter a valid 15-character GSTIN, or leave blank.";
    if (!form.cityState.trim()) next.cityState = "City/State is required.";
    if (!form.businessType) next.businessType = "Please select your business type.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      // Same note as the bulk-order form: this is a functional client-side
      // flow (validation + loading/success/error states) awaiting a real
      // backend/CRM endpoint to be connected before go-live.
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
        <h3 className="text-xl font-bold text-emerald-800">Application Received!</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-emerald-700">
          Thank you for your interest in partnering with AT-ONE. Our team will
          review your application and reach out directly.
        </p>
        <Button variant="primary" className="mt-6" onClick={() => setStatus("idle")}>
          Submit Another Application
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Company / Business Name" required error={errors.company}>
          <input
            className={inputClasses(errors.company)}
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            placeholder="e.g. Patel Distribution Co."
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
            placeholder="e.g. Indore, Madhya Pradesh"
          />
        </FormField>
      </div>

      <FormField label="Business Type" required error={errors.businessType}>
        <select
          className={inputClasses(errors.businessType)}
          value={form.businessType}
          onChange={(e) => update("businessType", e.target.value)}
        >
          <option value="">Select your business type</option>
          {BUSINESS_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </FormField>

      <FormField
        label="Preferred Territory / City"
        hint="Let us know the region you'd like to operate in — we'll discuss availability with you directly."
      >
        <input
          className={inputClasses(false)}
          value={form.preferredTerritory}
          onChange={(e) => update("preferredTerritory", e.target.value)}
          placeholder="e.g. Nagpur & surrounding districts"
        />
      </FormField>

      <FormField label="Message" hint="Tell us about your existing business, reach, or anything else relevant.">
        <textarea
          rows={4}
          className={inputClasses(false)}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="A little about your business..."
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
            <Loader2 size={18} className="animate-spin" /> Submitting Application...
          </>
        ) : (
          "Submit Distributor Application"
        )}
      </Button>
    </form>
  );
}
