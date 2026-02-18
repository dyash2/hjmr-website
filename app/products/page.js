import Link from 'next/link'; 
import { Package } from 'lucide-react';

const products = [
  { id: 1, name: "Classic Spin Mop", category: "Buckets", price: "Bulk Only" },
  { id: 2, name: "Deluxe 360 Mop Set", category: "Buckets", price: "Bulk Only" },
  { id: 3, name: "Premium Wheel Bucket", category: "Buckets", price: "Bulk Only" },
  { id: 4, name: "Microfiber Refill", category: "Accessories", price: "Bulk Only" },
  { id: 5, name: "Steel Mop Rod", category: "Accessories", price: "Bulk Only" },
  { id: 6, name: "Cleaning Solution", category: "Other", price: "Bulk Only" },
];

export default function ProductsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Our Product Range</h2>
          <p className="text-slate-600 mt-2">Quality manufacturing for wholesale and distribution.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition duration-300">
              {/* Image Placeholder */}
              <div className="h-48 bg-slate-100 flex items-center justify-center">
                <Package className="h-12 w-12 text-slate-300" />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{product.category}</span>
                <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2">{product.name}</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-slate-500 text-sm">MOQ: 100 Units</span>
                  
                  {/* --- THE FIX IS BELOW --- */}
                  <Link 
                    href="/product-details" 
                    className="text-blue-600 text-sm font-semibold hover:underline"
                  >
                    View Details
                  </Link>
                  {/* ------------------------ */}
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}