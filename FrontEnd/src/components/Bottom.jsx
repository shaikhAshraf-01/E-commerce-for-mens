import React from 'react';
import { BiCart, BiEnvelope, BiPhone, BiMap } from "react-icons/bi";

function Bottom() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 mt-12 border-t border-slate-800">
      
      {/* Upper Footer: Main Information Links */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Column 1: Company Profile */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 text-white font-bold text-lg mb-4">
            <BiCart className="text-2xl text-purple-400" />
            <span>Fashion Market</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Your destination for premium products. Delivering excellence and trust right to your doorstep.
          </p>
          <div className="flex flex-col gap-2 text-xs text-slate-400">
            <div className="flex items-center gap-2"><BiPhone /> +1 (555) 019-2834</div>
            <div className="flex items-center gap-2"><BiEnvelope /> support@shopvibe.com</div>
          </div>
        </div>

        {/* Column 2: Shop Categories */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">Shop</h4>
          <ul className="flex flex-col gap-2.5 text-xs text-slate-400">
            <li><a href="#" className="hover:text-purple-400 transition-colors">New Arrivals</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Best Sellers</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Special Offers</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Gift Cards</a></li>
          </ul>
        </div>

        {/* Column 3: Customer Service */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">Support</h4>
          <ul className="flex flex-col gap-2.5 text-xs text-slate-400">
            <li><a href="#" className="hover:text-purple-400 transition-colors">Order Tracking</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Shipping Rates</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter Box */}
        <div className="col-span-2 md:col-span-1">
          <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">Newsletter</h4>
          <p className="text-xs text-slate-400 mb-3">Subscribe to secure updates on deals.</p>
          <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full bg-slate-800 text-white text-xs px-3 py-2 rounded-l border border-slate-700 focus:outline-none focus:border-purple-400"
            />
            <button className="bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs px-4 py-2 rounded-r transition-colors">
              Join
            </button>
          </form>
        </div>

      </div>

      {/* Lower Footer: Copyright & Legal Bars */}
      <div className="w-full bg-slate-950 border-t border-slate-800/60 py-6 text-center text-[11px] text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} ShopVibe Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
            <a href="#" className="hover:text-slate-400">Sitemap</a>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Bottom;
