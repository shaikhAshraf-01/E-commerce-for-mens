import { useState } from 'react';
import { FiSearch, FiUser, FiHeart, FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false); // New state to track search overlay

    return (
        <nav className="w-full fixed top-0 left-0 h-16 px-4 md:px-7 flex justify-between items-center border-b border-gray-100 bg-yellow-200 z-50">
           
           {/* 1. BRAND LOGO (Hidden on mobile if search is active to save room) */}
           <div className={`z-50 ${isSearchOpen ? 'hidden sm:block' : 'block'}`}>
                <h1 className="font-black font-sans text-2xl tracking-wider leading-none">URBAN</h1>
                <h3 className="text-xs font-bold tracking-widest text-gray-500 mt-0.5 pl-9">MEN</h3>
           </div>

           {/* 2. DYNAMIC CENTER: NAVIGATION LINKS OR SEARCH BAR */}
           <div className="flex-1 max-w-xl mx-4 sm:mx-8 md:mx-12">
                {/* Desktop Menu: Hidden when search is active */}
                {!isSearchOpen && (
                    <div className="hidden md:block text-center">
                        <ul className="flex justify-center gap-6 font-medium text-sm text-gray-700">
                            <li className="hover:text-black cursor-pointer transition">Home</li>
                            <li className="hover:text-black cursor-pointer transition">Shop</li>
                            <li className="hover:text-black cursor-pointer transition">Categories</li>
                            <li className="hover:text-black cursor-pointer transition">New Arrivals</li>
                        </ul>
                    </div>
                )}

                {/* Shared Search Input Field: Always visible on mobile, toggled on PC */}
                <div className={`w-full ${isSearchOpen ? 'block' : 'hidden md:hidden'}`}>
                    <div className="relative flex items-center w-full bg-white border border-gray-300 rounded-md px-3 py-1.5 shadow-sm">
                        <FiSearch className="text-gray-400 shrink-0 mr-2" size={18} />
                        <input 
                            type="text" 
                            placeholder="Search products..." 
                            className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder-gray-400"
                            autoFocus={isSearchOpen}
                        />
                        {/* Close button for search mode */}
                        <button 
                            onClick={() => setIsSearchOpen(false)}
                            className="text-gray-400 hover:text-black ml-2"
                        >
                            <FiX size={18} />
                        </button>
                    </div>
                </div>
           </div>

           {/* 3. UTILITY ICONS & HAMBURGER */}
           <div className="flex items-center gap-3 md:gap-6 z-50">
                 <ul className="flex items-center gap-3 md:gap-6 text-gray-700">
                    {/* Search Trigger Icon: Hidden if search is already active */}
                    {!isSearchOpen && (
                        <li 
                            onClick={() => setIsSearchOpen(true)} 
                            className="hover:text-black cursor-pointer flex items-center"
                        >
                            <FiSearch size={20}/>
                        </li>
                    )}
                    <li className="hidden sm:block hover:text-black cursor-pointer"><FiUser size={20}/></li>
                    <li className="hidden sm:block hover:text-black cursor-pointer"><FiHeart size={20}/></li>
                    <li className="hover:text-black cursor-pointer relative flex items-center"><FiShoppingBag size={20}/></li>
                </ul>

                {/* Mobile Menu Trigger (Hamburger) */}
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="block md:hidden text-gray-700 focus:outline-none"
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
           </div>

           {/* 4. MOBILE RIGHT-SIDE DRAWER OVERLAY */}
           <div className={`
                fixed top-0 right-0 h-screen w-64 bg-white shadow-xl z-40 transition-transform duration-300 ease-in-out md:hidden pt-20 px-6
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}
           `}>
                <ul className="flex flex-col gap-5 font-semibold text-lg text-gray-800">
                    <li className="border-b border-gray-100 pb-2">Home</li>
                    <li className="border-b border-gray-100 pb-2">Shop</li>
                    <li className="border-b border-gray-100 pb-2">Categories</li>
                    <li className="border-b border-gray-100 pb-2">New Arrivals</li>
                    <li className="sm:hidden pt-2 flex flex-col gap-3 text-gray-600 font-medium text-base">
                        <span className="flex items-center gap-2"><FiUser size={18}/> Profile</span>
                        <span className="flex items-center gap-2"><FiHeart size={18}/> Wishlist</span>
                    </li>
                </ul>
           </div>

           {/* Dark background overlay for mobile drawer */}
           {isOpen && (
               <div 
                   onClick={() => setIsOpen(false)} 
                   className="fixed inset-0 bg-black/30 md:hidden z-30"
               />
           )}

        </nav>
    );
}

export default Navbar;
