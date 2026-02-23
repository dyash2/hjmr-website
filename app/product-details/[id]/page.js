"use client";

import { useState } from "react";
import { useParams } from "next/navigation"; // <-- Import to read the dynamic URL
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  ChevronRight,
  Star,
  X,
  PackageOpen,
} from "lucide-react";
import Link from "next/link";

// add this import at the top
import Image from "next/image";

// --- OUR "DATABASE" OF PRODUCTS FOR THE DEMO ---
const productDatabase = [
  {
    id: 1,
    name: "Classic Spin Mop Bucket",
    model: "HJMR-CLS-101",
    material: "High-Grade PP Plastic",
    capacity: "5 Liters",
    rod: "Standard Steel",
    included: "1 Bucket, 1 Rod, 1 Refill",
    description:
      "Our best-selling classic model. Lightweight, durable, and perfect for daily household cleaning. Designed for bulk affordability.",
    images: ["/1/image1.png", "/1/image2.png", "/1/image3.png"],
  },
  {
    id: 2,
    name: "Deluxe 360° Mop Set",
    model: "HJMR-DLX-202",
    material: "Virgin Plastic (PP)",
    capacity: "6 Liters",
    rod: "Premium Stainless Steel",
    included: "1 Bucket, 1 Heavy Rod, 2 Refills",
    description:
      "Engineered for durability. Features a built-in liquid dispenser slot and reinforced spin gears for commercial or heavy home use.",
       images: ["/1/image1.png", "/1/image2.png", "/1/image3.png"],
  },
  {
    id: 3,
    name: "Premium Wheel Bucket",
    model: "HJMR-WHL-303",
    material: "Impact-Resistant Virgin PP",
    capacity: "7 Liters",
    rod: "Telescopic Stainless Steel",
    included: "1 Wheel Bucket, 1 Rod, 2 Refills",
    description:
      "Designed with heavy-duty wheels and a pull handle. Eliminates the need to lift heavy water buckets. Top choice for large homes and offices.",
       images: ["/1/image1.png", "/1/image2.png", "/1/image3.png"],
  },
  {
    id: 4,
    name: "Microfiber Refill (R-1)",
    model: "HJMR-REF-R1",
    material: "100% Microfiber",
    capacity: "N/A",
    rod: "N/A",
    included: "Bulk Packed Refills",
    description:
      "High-absorption R-1 refills that trap dirt effectively. Washable design ensures long-lasting utility. Universal fit for most spin mops.",
       images: ["/1/image1.png", "/1/image2.png", "/1/image3.png"],
  },
  {
    id: 5,
    name: "Steel Mop Rod",
    model: "HJMR-ROD-01",
    material: "Stainless Steel + Plastic Grips",
    capacity: "N/A",
    rod: "Adjustable Lock Mechanism",
    included: "1 Rod Assembly",
    description:
      "Replacement telescopic rods with a smooth spinning mechanism. Features a sturdy clip lock for adjusting height.",
    images: [
      "/cleaning-mop/image.png"
    ],
  },
  {
    id: 6,
    name: "Floor Cleaning Solution",
    model: "HJMR-LIQ-500",
    material: "Eco-Friendly Formula",
    capacity: "500ml / 5 Liters",
    rod: "N/A",
    included: "Bottled / Cans",
    description:
      "Factory-direct floor cleaner optimized for use with our microfiber mops. Leaves a streak-free shine and pleasant aroma.",
       images: ["/1/image4.png", "/1/image2.png", "/1/image3.png"],
  },
];

export default function ProductDetails() {
  const params = useParams(); // Reads the ID from the URL
  const [activeImage, setActiveImage] = useState(0);

  // Find the specific product based on the URL ID
  // params.id is a string, so we convert it to a Number
  const product = productDatabase.find((p) => p.id === Number(params.id));

  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    quantity: "",
  });

  const factoryPhone = "919764502585";

  // Handle if product doesn't exist
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <PackageOpen size={64} className="text-slate-300 mb-4" />
        <h1 className="text-2xl font-bold text-slate-800">Product Not Found</h1>
        <Link href="/products" className="text-blue-600 hover:underline mt-2">
          Return to Catalog
        </Link>
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    // Dynamically insert the selected product's name
    const message = `Hello HJMR Team, I am looking for a wholesale quote.\n\nProduct: ${product.name}\nTarget Quantity: 100+\n\nPlease share your best rate.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${factoryPhone}?text=${encodedMessage}`,
      "_blank",
    );
  };

  const handleSubmitLead = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formBody = new URLSearchParams();
    formBody.append("name", formData.name);
    formBody.append("phone", formData.phone);
    // Add the specific product name to the form data so it goes to Google Sheets!
    formBody.append("quantity", `${formData.quantity} of ${product.name}`);

    try {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbzgI_994UuggZq56wEnjGYp4EjH-RLOr9hNJNtBijNX_iS_enhHo3KsYIyYN68SBi6CAw/exec";
      await fetch(scriptURL, { method: "POST", body: formBody });

      setSubmitStatus("success");
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitStatus("");
        setFormData({ name: "", phone: "", quantity: "" });
      }, 3000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <ChevronRight size={16} />
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <ChevronRight size={16} />
          <span className="text-slate-900 font-medium">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
            <div className="p-6 lg:p-10 bg-white">
              {/* MAIN IMAGE */}
              <div className="relative aspect-square bg-slate-100 rounded-xl mb-4 overflow-hidden border border-slate-200">
                <Image
                  src={product.images[activeImage]}
                  alt={product.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* THUMBNAILS */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative aspect-square rounded-lg border-2 overflow-hidden bg-slate-50 transition ${
                      activeImage === index
                        ? "border-blue-600 ring-2 ring-blue-100"
                        : "border-transparent hover:border-slate-300"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 lg:p-10 lg:border-l border-slate-100 flex flex-col justify-center">
              <div className="flex gap-2 mb-4">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  In Stock
                </span>
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Wholesale Only
                </span>
              </div>

              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                {product.name}
              </h1>
              <p className="text-slate-500 mb-6 text-sm">
                Model: {product.model} | Manufactured in Vasai
              </p>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-8">
                <p className="text-sm text-slate-500 mb-1">
                  Wholesale Price / Unit
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-blue-600">
                    ₹ Request Quote
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                  <CheckCircle2 size={12} className="text-green-600" /> MOQ: 50
                  Pieces
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3.5 px-6 rounded-lg font-semibold transition shadow-lg shadow-green-100"
                >
                  <MessageCircle size={20} />
                  WhatsApp Us
                </button>
                <a
                  href="tel:+919764502585"
                  className="flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-700 py-3.5 px-6 rounded-lg font-semibold transition"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full mb-8 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-bold transition shadow-lg shadow-blue-200"
              >
                Request Bulk Quote Online
              </button>

              <div className="border rounded-lg border-slate-200 overflow-hidden">
                <table className="w-full text-sm text-left">
                  <tbody className="divide-y divide-slate-100">
                    <tr className="bg-slate-50">
                      <td className="px-4 py-3 text-slate-500 font-medium">
                        Material
                      </td>
                      <td className="px-4 py-3 text-slate-900">
                        {product.material}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-slate-500 font-medium">
                        Capacity / Size
                      </td>
                      <td className="px-4 py-3 text-slate-900">
                        {product.capacity}
                      </td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-4 py-3 text-slate-500 font-medium">
                        Rod Specs
                      </td>
                      <td className="px-4 py-3 text-slate-900">
                        {product.rod}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-slate-500 font-medium">
                        Included
                      </td>
                      <td className="px-4 py-3 text-slate-900">
                        {product.included}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Product Description
            </h3>
            <div className="prose text-slate-600 max-w-none">
              <p className="mb-4">{product.description}</p>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 h-fit">
            <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
              <Star size={18} className="fill-blue-600 text-blue-600" /> Why
              HJMR?
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-blue-800">
                <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                Direct Factory Pricing
              </li>
              <li className="flex gap-3 text-sm text-blue-800">
                <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                GST Compliant Bill Provided
              </li>
              <li className="flex gap-3 text-sm text-blue-800">
                <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                Fast Delivery in Palghar & Mumbai
              </li>
            </ul>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Get Wholesale Pricing
              </h2>
              <p className="text-sm text-slate-500 mb-6">
                Enter your details and our factory team will contact you
                directly.
              </p>

              {submitStatus === "success" ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <CheckCircle2
                    size={40}
                    className="text-green-500 mx-auto mb-3"
                  />
                  <h3 className="font-bold text-green-800">Quote Requested!</h3>
                  <p className="text-sm text-green-600 mt-1">
                    We will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitLead} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Business Name / Your Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                      placeholder="e.g. Rahul Enterprises"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      WhatsApp Number (10 Digits)
                    </label>
                    <input
                      required
                      type="tel"
                      maxLength={10}
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                      placeholder="98XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value.replace(/\D/g, ""),
                        })
                      }
                    />
                    <p className="text-[10px] text-slate-400 mt-1">
                      Do not include +91 or 0
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Estimated Quantity Required
                    </label>
                    <select
                      required
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none bg-white transition-all"
                      value={formData.quantity}
                      onChange={(e) =>
                        setFormData({ ...formData, quantity: e.target.value })
                      }
                    >
                      <option value="" disabled>
                        Select Quantity
                      </option>
                      <option value="50-100">50 - 100 Pieces</option>
                      <option value="100-500">100 - 500 Pieces</option>
                      <option value="500+">500+ Pieces</option>
                    </select>
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-lg mt-4 disabled:bg-slate-400 transition-all shadow-lg shadow-blue-100 active:scale-[0.98]"
                  >
                    {isSubmitting ? "Sending Request..." : "Submit Inquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
