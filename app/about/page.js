import { ShieldCheck, Users, Factory } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Company Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">About HJMR Industries</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Established in 2022, HJMR Industries has grown into a trusted name in household cleaning manufacturing. 
            Located in the industrial hub of Vasai, Palghar, we specialize in high-volume production of spin mops and cleaning accessories.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
            <ShieldCheck className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="font-bold text-slate-900 text-xl mb-2">Statutory Profile</h3>
            <p className="text-sm text-slate-600">GST: 27AAPFH4059M1ZQ</p>
            <p className="text-sm text-slate-600">IEC Code: AAPFH4059M</p>
          </div>
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
            <Factory className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="font-bold text-slate-900 text-xl mb-2">Infrastructure</h3>
            <p className="text-sm text-slate-600">State-of-the-art manufacturing unit in Vasai capable of high-volume export quality production.</p>
          </div>
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
            <Users className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="font-bold text-slate-900 text-xl mb-2">Leadership</h3>
            <p className="text-sm text-slate-600">Led by Mahavir Kothari, Ritesh Mehta, and partners, dedicated to manufacturing excellence.</p>
          </div>
        </div>

      </div>
    </div>
  );
}