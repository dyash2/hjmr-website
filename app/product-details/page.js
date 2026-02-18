'use client'; // Needed for interactive buttons like "Copy Number"

import { useState } from 'react';
import { Phone, MessageCircle, FileText, CheckCircle2, ChevronRight, Star } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetails() {
  // Simple state to handle the "active" image in the gallery
  const [activeImage, setActiveImage] = useState(0);

  // Placeholder images (You can replace these with real URLs later)
  const images = [
    "/product-mop-main.jpg", // Replace with your image path
    "/product-mop-angle1.jpg",
    "/product-mop-angle2.jpg",
    "/product-mop-detail.jpg"
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      
      {/* Breadcrumb Navigation (Good for SEO & UX) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight size={16} />
          <Link href="/products" className="hover:text-blue-600">Mop Buckets</Link>
          <ChevronRight size={16} />
          <span className="text-slate-900 font-medium">Premium 360° Spin Mop Set</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
            
            {/* LEFT: Image Gallery */}
            <div className="p-6 lg:p-10 bg-white">
              {/* Main Image */}
              <div className="aspect-square bg-slate-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden border border-slate-200">
                {/* TIP: Use a real <img> tag here for the demo */}
                <div className="text-slate-400 text-sm">Main Image Preview (Index: {activeImage})</div>
              </div>
              
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-4">
                {[0, 1, 2, 3].map((index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`aspect-square rounded-lg border-2 flex items-center justify-center bg-slate-50 transition ${
                      activeImage === index ? 'border-blue-600 ring-2 ring-blue-100' : 'border-transparent hover:border-slate-300'
                    }`}
                  >
                    <span className="text-xs text-slate-400">View {index + 1}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT: Product Info */}
            <div className="p-6 lg:p-10 lg:border-l border-slate-100 flex flex-col justify-center">
              
              {/* Badges */}
              <div className="flex gap-2 mb-4">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">In Stock</span>
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Wholesale Only</span>
              </div>

              <h1 className="text-3xl font-bold text-slate-900 mb-2">Premium 360° Spin Mop Bucket Set</h1>
              <p className="text-slate-500 mb-6 text-sm">Model: HJMR-DX-2024 | Manufactured in Vasai</p>

              {/* Price Block */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-8">
                <p className="text-sm text-slate-500 mb-1">Wholesale Price / Unit</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-blue-600">₹ Request Quote</span>
                  <span className="text-sm text-slate-400 line-through">MRP: ₹1,299</span>
                </div>
                <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                  <CheckCircle2 size={12} className="text-green-600"/> MOQ: 50 Pieces
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3.5 px-6 rounded-lg font-semibold transition shadow-lg shadow-green-100">
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </button>
                <button className="flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-700 py-3.5 px-6 rounded-lg font-semibold transition">
                  <Phone size={20} />
                  Call for Deal
                </button>
              </div>

              {/* Specifications Table (The "Technical" Look) */}
              <div className="border rounded-lg border-slate-200 overflow-hidden">
                <table className="w-full text-sm text-left">
                  <tbody className="divide-y divide-slate-100">
                    <tr className="bg-slate-50">
                      <td className="px-4 py-3 text-slate-500 font-medium">Material</td>
                      <td className="px-4 py-3 text-slate-900">Virgin Plastic (PP)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-slate-500 font-medium">Bucket Capacity</td>
                      <td className="px-4 py-3 text-slate-900">5.5 Liters</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-4 py-3 text-slate-500 font-medium">Rod Material</td>
                      <td className="px-4 py-3 text-slate-900">Stainless Steel</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-slate-500 font-medium">Included</td>
                      <td className="px-4 py-3 text-slate-900">1 Bucket, 1 Rod, 2 Refills</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Product Description</h3>
            <div className="prose text-slate-600 max-w-none">
              <p className="mb-4">
                Engineered for durability and efficiency, the HJMR Premium Spin Mop is designed for heavy-duty household and commercial cleaning. The 360-degree rotating mechanism allows for easy wringing without hand contact, ensuring hygiene and convenience.
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>High-grade virgin plastic body ensures long life and resistance to cracks.</li>
                <li>Microfiber refill heads absorb 10x more water than traditional cotton mops.</li>
                <li>Ergonomic stainless steel handle with adjustable height.</li>
                <li>Built-in drainage plug for easy water removal.</li>
              </ul>
            </div>
          </div>

          {/* Sidebar: Why Buy From Us? */}
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 h-fit">
            <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
              <Star size={18} className="fill-blue-600 text-blue-600"/> Why HJMR?
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-blue-800">
                <CheckCircle2 size={16} className="shrink-0 mt-0.5"/>
                Direct Factory Pricing (No Middlemen)
              </li>
              <li className="flex gap-3 text-sm text-blue-800">
                <CheckCircle2 size={16} className="shrink-0 mt-0.5"/>
                GST Compliant Bill Provided
              </li>
              <li className="flex gap-3 text-sm text-blue-800">
                <CheckCircle2 size={16} className="shrink-0 mt-0.5"/>
                Fast Delivery in Palghar & Mumbai
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}