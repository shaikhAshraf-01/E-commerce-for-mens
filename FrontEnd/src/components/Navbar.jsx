import { useState } from 'react';
import { NavLink } from 'react-router-dom'; // 1. Imported NavLink
import { FiSearch, FiUser, FiHeart, FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // 2. Active Style Helper Function
    const navLinkStyles = ({ isActive }) => 
        `cursor-pointer transition pb-1 font-medium text-sm ${
            isActive ? 'text-black border-b-2 border-black font-semibold' : 'text-gray-700 hover:text-black'
        }`;

    const mobileNavLinkStyles = ({ isActive }) => 
        `block border-b border-gray-100 pb-2 font-semibold text-lg ${
            isActive ? 'text-purple-600 border-purple-600' : 'text-gray-800'
        }`;

    return (
        <nav className="w-full fixed top-0 left-0 h-16 px-4 md:px-7 flex justify-between items-center border-b border-gray-100 bg-yellow-200 z-50">
           
           {/* 1. BRAND LOGO */}
           <div className={`z-50 ${isSearchOpen ? 'hidden sm:block' : 'block'}`}>
                <h1 className="font-black font-sans text-2xl tracking-wider leading-none">Fashion</h1>
                <h3 className="text-xs font-bold tracking-widest text-gray-500 mt-0.5 pl-9">Market</h3>
           </div>

           {/* 2. DYNAMIC CENTER */}
           <div className="flex-1 max-w-xl mx-4 sm:mx-8 md:mx-12">
                {/* Desktop Menu: Uses NavLink for automatic underlines */}
                {!isSearchOpen && (
                    <div className="hidden md:block text-center">
                        <ul className="flex justify-center gap-6">
                            <li><NavLink to="/" className={navLinkStyles}>Home</NavLink></li>
                            <li><NavLink to="/shop" className={navLinkStyles}>Shop</NavLink></li>
                            <li><NavLink to="/categories" className={navLinkStyles}>Categories</NavLink></li>
                            <li><NavLink to="/new-arrivals" className={navLinkStyles}>New Arrivals</NavLink></li>
                        </ul>
                    </div>
                )}

                {/* Shared Search Input Field */}
                <div className={`w-full ${isSearchOpen ? 'block' : 'hidden md:hidden'}`}>
                    <div className="relative flex items-center w-full bg-white border border-gray-300 rounded-md px-3 py-1.5 shadow-sm">
                        <FiSearch className="text-gray-400 shrink-0 mr-2" size={18} />
                        <input 
                            type="text" 
                            placeholder="Search products..." 
                            className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder-gray-400"
                            autoFocus={isSearchOpen}
                        />
                        <button onClick={() => setIsSearchOpen(false)} className="text-gray-400 hover:text-black ml-2">
                            <FiX size={18} />
                        </button>
                    </div>
                </div>
           </div>

           {/* 3. UTILITY ICONS & HAMBURGER */}
           <div className="flex items-center gap-3 md:gap-6 z-50">
                 <ul className="flex items-center gap-3 md:gap-6 text-gray-700">
                    {!isSearchOpen && (
                        <li onClick={() => setIsSearchOpen(true)} className="hover:text-black cursor-pointer flex items-center">
                            <FiSearch size={20}/>
                        </li>
                    )}
                    <li className="hidden sm:block hover:text-black cursor-pointer"><FiUser size={20}/></li>
                    <li className="hidden sm:block hover:text-black cursor-pointer"><FiHeart size={20}/></li>
                    <li className="hover:text-black cursor-pointer relative flex items-center"><FiShoppingBag size={20}/></li>
                </ul>

                <button onClick={() => setIsOpen(!isOpen)} className="block md:hidden text-gray-700 focus:outline-none">
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
           </div>

           {/* 4. MOBILE RIGHT-SIDE DRAWER OVERLAY */}
           <div className={`
                fixed top-0 right-0 h-screen w-64 bg-white shadow-xl z-40 transition-transform duration-300 ease-in-out md:hidden pt-20 px-6
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}
           `}>
                <ul className="flex flex-col gap-5">
                    <li><NavLink to="/" onClick={() => setIsOpen(false)} className={mobileNavLinkStyles}>Home</NavLink></li>
                    <li><NavLink to="/shop" onClick={() => setIsOpen(false)} className={mobileNavLinkStyles}>Shop</NavLink></li>
                    <li><NavLink to="/categories" onClick={() => setIsOpen(false)} className={mobileNavLinkStyles}>Categories</NavLink></li>
                    <li><NavLink to="/new-arrivals" onClick={() => setIsOpen(false)} className={mobileNavLinkStyles}>New Arrivals</NavLink></li>
                    <li className="sm:hidden pt-2 flex flex-col gap-3 text-gray-600 font-medium text-base">
                        <span className="flex items-center gap-2"><FiUser size={18}/> Profile</span>
                        <span className="flex items-center gap-2"><FiHeart size={18}/> Wishlist</span>
                    </li>
                </ul>
           </div>

           {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/30 md:hidden z-30" />}
        </nav>
    );
}

export default Navbar;
