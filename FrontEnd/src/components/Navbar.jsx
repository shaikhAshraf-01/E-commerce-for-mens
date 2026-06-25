import { useState } from 'react';
import { FiSearch, FiUser, FiHeart, FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full fixed h-auto px-4 md:px-7 py-3 flex justify-between items-center  border-b border-gray-100 bg-yellow-200">
           
           {/* 1. BRAND LOGO */}
           <div className="z-50">
                <h1 className="font-black font-sans text-2xl tracking-wider leading-none">URBAN</h1>
                {/* Fixed static positioning instead of negative margin for cleaner code */}
                <h3 className="text-xs font-bold tracking-widest text-gray-500 mt-0.5 pl-9">MEN</h3>
           </div>

           {/* 2. MIDDLE LINKS (Hidden on mobile, flex on desktop) */}
           <div className="hidden md:block">
                <ul className="flex gap-6 font-medium text-sm text-gray-700">
                    <li className="hover:text-black cursor-pointer transition">Home</li>
                    <li className="hover:text-black cursor-pointer transition">Shop</li>
                    <li className="hover:text-black cursor-pointer transition">Categories</li>
                    <li className="hover:text-black cursor-pointer transition">New Arrivals</li>
                </ul>
           </div>

           {/* 3. UTILITY ICONS & MOBILE HAMBURGER BUTTON */}
           <div className="flex items-center gap-4 md:gap-6 z-50">
                 <ul className="flex gap-4 md:gap-6 text-gray-700">
                    <li className="hover:text-black cursor-pointer"><FiSearch size={20}/></li>
                    {/* Hidden profile/likes on tiny mobile screens to preserve icon room */}
                    <li className="hidden sm:block hover:text-black cursor-pointer"><FiUser size={20}/></li>
                    <li className="hidden sm:block hover:text-black cursor-pointer"><FiHeart size={20}/></li>
                    <li className="hover:text-black cursor-pointer relative"><FiShoppingBag size={20}/></li>
                </ul>

                {/* Mobile Menu Trigger Icon */}
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="block md:hidden text-gray-700 focus:outline-none"
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
           </div>

           {/* 4. MOBILE DRAWER OVERLAY (Slides down when isOpen is true) */}
           <div className={`
                absolute top-full left-0 w-full bg-white shadow-md z-40 transition-all duration-300 ease-in-out md:hidden
                ${isOpen ? 'opacity-100 visible py-6 px-6' : 'opacity-0 invisible h-0 overflow-hidden'}
           `}>
                <ul className="flex flex-col gap-4 font-semibold text-lg text-gray-800">
                    <li className="border-b border-gray-50 pb-2">Home</li>
                    <li className="border-b border-gray-50 pb-2">Shop</li>
                    <li className="border-b border-gray-50 pb-2">Categories</li>
                    <li className="border-b border-gray-50 pb-2">New Arrivals</li>
                    {/* Re-appending hidden profile features to the mobile list bottom */}
                    <li className="sm:hidden pt-2 flex gap-4 text-gray-600">
                        <span className="flex items-center gap-2 text-sm"><FiUser size={18}/> Profile</span>
                        <span className="flex items-center gap-2 text-sm"><FiHeart size={18}/> Wishlist</span>
                    </li>
                </ul>
           </div>

        </nav>
    );
}

export default Navbar;
