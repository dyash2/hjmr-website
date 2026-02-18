import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Est. 2022 • Vasai, Maharashtra
            </span>
            <h1 className="mt-6 text-5xl font-extrabold text-slate-900 tracking-tight sm:text-6xl mb-6">
              Premium Cleaning Solutions & <span className="text-blue-600">Mop Manufacturers.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Direct from our factory to distributors worldwide. We specialize in high-durability spin buckets and mop accessories designed for modern homes.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/products" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2">
                View Catalog <ArrowRight size={18} />
              </Link>
              <Link href="/about" className="bg-white text-slate-700 border border-slate-200 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition">
                Company Profile
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Decorative Blob (Optional Visual Flair) */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      </section>

      {/* FEATURES STRIP */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            "Factory Direct Pricing",
            "Bulk Manufacturing",
            "GST Compliant",
            "Pan-India Delivery"
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <CheckCircle2 className="text-green-500 h-6 w-6" />
              <span className="font-medium text-slate-700">{feature}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}