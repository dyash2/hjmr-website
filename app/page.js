import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col selection:bg-blue-200">
      
      {/* HERO SECTION */}
      <section className="relative bg-linear-to-b from-slate-50 to-white py-24 lg:py-32 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Est. 2022 • Vasai, Maharashtra
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
              Premium Cleaning Solutions & <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600">Mop Manufacturers.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Direct from our Vasai factory to distributors worldwide. Home of the <strong className="text-slate-900 font-semibold">AT ONE™</strong> brand, specializing in high-durability spin buckets and mop accessories.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/products" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200 hover:-translate-y-0.5">
                View Wholesale Catalog <ArrowRight size={18} />
              </Link>
              <Link href="/about" className="bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center">
                Company Profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES STRIP (Upgraded to Cards) */}
      <section className="py-16 bg-white z-20 relative -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Factory Direct Pricing", desc: "No middlemen, maximum margin." },
              { title: "Bulk Manufacturing", desc: "Capacity for large volume orders." },
              { title: "GST Compliant", desc: "100% genuine billing and invoices." },
              { title: "Pan-India Delivery", desc: "Fast shipping to any distributor." }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow duration-300">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-slate-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- AT ONE BRAND SHOWCASE (Polished Layout) --- */}
      <section className="py-24 bg-slate-900 mt-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Side: Product Image Showcase */}
            <div className="w-full lg:w-1/2 relative">
              {/* Decorative background blob for the dark section */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
              
              <div className="relative bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-white/5 to-transparent pointer-events-none"></div>
                
                {/* Make sure at-one-brand.jpg is in your public folder! */}
                <img 
                  src="/atone.webp" 
                  alt="AT ONE Premium Quality Mop Packaging" 
                  className="w-full h-auto object-contain rounded-xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Side: Brand Details */}
            <div className="w-full lg:w-1/2 text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-wide mb-6">
                <Sparkles size={16} />
                Flagship Retail Brand
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-3 text-white">
                AT ONE <span className="text-blue-500 text-3xl align-top">®</span>
              </h2>
              <p className="text-2xl text-slate-400 italic mb-10 font-light">"Sparkles your home..!"</p>

              <div className="space-y-8">
                <div className="flex gap-5 items-start">
                  <div className="shrink-0 p-3 bg-slate-800 rounded-xl border border-slate-700">
                    <RefreshCw className="text-blue-400 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">360° Rotation Technology</h3>
                    <p className="text-slate-400 leading-relaxed">Engineered with a premium disk for effortless spinning, deep cleaning, and maximum reach under furniture.</p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="shrink-0 p-3 bg-slate-800 rounded-xl border border-slate-700">
                    <ShieldCheck className="text-blue-400 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Washable Microfiber Refills</h3>
                    <p className="text-slate-400 leading-relaxed">High-absorption R-1 refills that trap dirt effectively. Reusable and easily washable design ensures long-lasting utility.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-800">
                <Link href="/products" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20">
                  Request 'AT ONE' Wholesale Rates <ArrowRight size={18} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}