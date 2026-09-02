import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely, allowing conditional classes via clsx.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Format a phone number for tel: / wa.me: links (strips non-digits).
 */
export function digitsOnly(value = "") {
  return value.replace(/\D/g, "");
}

/**
 * Basic Indian GSTIN format check: 15 chars, standard pattern.
 * Kept permissive — used for gentle validation, not legal verification.
 */
export function isValidGSTIN(value = "") {
  if (!value) return true; // optional field
  return /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/.test(
    value.trim().toUpperCase()
  );
}

export function isValidEmail(value = "") {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isValidIndianPhone(value = "") {
  const digits = digitsOnly(value);
  return digits.length === 10 && /^[6-9]/.test(digits);
}
