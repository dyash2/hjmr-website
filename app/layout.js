import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Menu, Phone, Mail, MapPin } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'HJMR Industries | Premium Mop Manufacturers',
  description: 'Leading manufacturer of Spin Mops and Cleaning Solutions in Vasai, Maharashtra.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* TOP BAR - TRUST SIGNALS */}
        <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <span>GST: 27AAPFH4059M1ZQ</span>
            <span className="hidden sm:block">Vasai, Palghar, Maharashtra</span>
          </div>
        </div>

        {/* NAVBAR */}
        <nav className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-2xl font-bold text-blue-700 tracking-tight">
                  HJMR <span className="text-slate-700">Industries</span>
                </Link>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-slate-600 hover:text-blue-600 font-medium transition">Home</Link>
                <Link href="/products" className="text-slate-600 hover:text-blue-600 font-medium transition">Products</Link>
                <Link href="/about" className="text-slate-600 hover:text-blue-600 font-medium transition">About Us</Link>
              </div>

              {/* CTA Button */}
              <div className="hidden md:flex">
                <a href="tel:+919876543210" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium text-sm transition shadow-lg shadow-blue-200">
                  Contact Supplier
                </a>
              </div>
              
              {/* Mobile Menu Icon (Placeholder) */}
              <div className="md:hidden">
                <Menu className="h-6 w-6 text-slate-600" />
              </div>
            </div>
          </div>
        </nav>

        {children}

        {/* FOOTER */}
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">HJMR Industries</h3>
              <p className="text-sm leading-relaxed">Simplifying hygiene with durable, high-quality spin buckets and cleaning accessories.</p>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><MapPin size={16}/> Vasai, Palghar, Maharashtra</li>
                <li className="flex items-center gap-2"><Phone size={16}/> +91 XXXXX XXXXX</li>
                <li className="flex items-center gap-2"><Mail size={16}/> contact@hjmr.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Statutory</h3>
              <p className="text-xs">GST: 27AAPFH4059M1ZQ</p>
              <p className="text-xs">IEC: AAPFH4059M</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}