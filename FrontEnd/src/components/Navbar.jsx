import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiX, FiPackage, FiLogOut, FiSettings } from 'react-icons/fi';

// Style Helpers (Extracted to prevent re-allocation on render)
const navLinkStyles = ({ isActive }) => 
    `cursor-pointer transition pb-1 font-medium text-sm ${
        isActive ? 'text-black border-b-2 border-black font-semibold' : 'text-gray-700 hover:text-black'
    }`;

const mobileNavLinkStyles = ({ isActive }) => 
    `block border-b border-gray-100 pb-2 font-semibold text-lg transition-colors ${
        isActive ? 'text-black border-black font-bold' : 'text-gray-800 hover:text-black'
    }`;

function Navbar() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();

    // Local input state — kept separate from the URL so typing feels instant
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

    // Keep the input in sync if the URL's ?search= changes from elsewhere
    // (e.g. user clears filters on the Shop page, or hits back/forward)
    useEffect(() => {
        if (location.pathname === '/shop') {
            setSearchTerm(searchParams.get('search') || '');
        } else {
            setSearchTerm('');
        }
    }, [location.pathname, searchParams]);

    // Fires on every keystroke — pushes the query into the /shop URL.
    // `replace: true` avoids flooding browser history with every letter typed.
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.trim()) {
            navigate(`/shop?search=${encodeURIComponent(value)}`, { replace: true });
        } else if (location.pathname === '/shop') {
            navigate('/shop', { replace: true });
        }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/shop?search=${encodeURIComponent(searchTerm)}`);
            setIsMobileOpen(false);
        }
    };

    // Close user profile dropdown when clicking anywhere outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Prevent background scrolling when mobile menu drawer is open
    useEffect(() => {
        document.body.style.overflow = isMobileOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileOpen]);

    return (
        <nav className="w-full fixed top-0 left-0 h-16 px-4 md:px-7 flex justify-between items-center border-b border-gray-100 bg-white z-50">
           
           {/* 1. BRAND LOGO */}
           <Link to="/" className="shrink-0 select-none mr-6">
                <h1 className="font-black font-sans text-2xl tracking-wider leading-none text-black">Fashion</h1>
                <h3 className="text-xs font-bold tracking-widest text-gray-500 mt-0.5 pl-9">Market</h3>
           </Link>

           {/* 2. MAIN CENTER NAVIGATION & SEARCH */}
           <div className="flex-1 hidden md:flex items-center justify-between max-w-4xl mx-4">
                {/* Home & Shop Left-Aligned Links */}
                <ul className="flex items-center gap-6 shrink-0">
                    <li><NavLink to="/" className={navLinkStyles}>Home</NavLink></li>
                    <li><NavLink to="/shop" className={navLinkStyles}>Shop</NavLink></li>
                </ul>

                {/* Main Static Search Bar */}
                <form onSubmit={handleSearchSubmit} className="flex-1 max-w-md mx-8">
                    <div className="relative flex items-center w-full bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 transition-all focus-within:border-gray-400 focus-within:bg-white">
                        <FiSearch className="text-gray-400 shrink-0 mr-2" size={16} />
                        <input 
                            type="text" 
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder="Search products..." 
                            className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder-gray-400"
                        />
                        {searchTerm && (
                            <button
                                type="button"
                                onClick={() => { setSearchTerm(''); navigate('/shop', { replace: true }); }}
                                className="text-gray-400 hover:text-gray-700 ml-2"
                                aria-label="Clear search"
                            >
                                <FiX size={14} />
                            </button>
                        )}
                    </div>
                </form>
           </div>

           {/* 3. RIGHT UTILITIES (CART & ACCOUNT DROPDOWN) */}
           <div className="flex items-center gap-4 md:gap-6 shrink-0">
                {/* Cart Icon Link */}
                <Link to="/cart" className="text-gray-700 hover:text-black cursor-pointer relative p-1 transition" aria-label="View Cart">
                    <FiShoppingBag size={21}/>
                    <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center scale-90">0</span>
                </Link>

                {/* Desktop Account Menu Dropdown Container */}
                <div className="hidden md:block relative" ref={dropdownRef}>
                    <button 
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center text-gray-700 hover:text-black p-1 transition focus:outline-none"
                        aria-label="User Account Menu"
                    >
                        <FiUser size={21} />
                    </button>

                    {/* Account Dropdown Options Grid */}
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                            <div className="px-4 py-2 border-b border-gray-50">
                                <p className="text-xs text-gray-400 font-medium">Signed in as</p>
                                <p className="text-sm font-semibold text-gray-800 truncate">John Doe</p>
                            </div>
                            
                            <Link to="/account" onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition">
                                <FiSettings size={16} className="text-gray-400" />
                                <span>Account Details</span>
                            </Link>
                            
                            <Link to="/orders" onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition">
                                <FiPackage size={16} className="text-gray-400" />
                                <span>Order History</span>
                            </Link>
                            
                            <div className="border-t border-gray-50 mt-1.5 pt-1.5">
                                <button onClick={() => { setIsDropdownOpen(false); /* Add logout logic here */ }} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition font-medium">
                                    <FiLogOut size={16} />
                                    <span>Logout</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Mobile Drawer Trigger Hamburger Button */}
                <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="block md:hidden text-gray-700 focus:outline-none p-1 transition" aria-label="Toggle Menu">
                    {isMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
           </div>

           {/* 4. MOBILE SLIDE DRAWER OVERLAY */}
           <div className={`
                fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl z-40 transition-transform duration-300 ease-in-out md:hidden pt-24 px-6 flex flex-col justify-between pb-8
                ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}
           `}>
                <div className="flex flex-col gap-6">
                    {/* Mobile Search Element */}
                    <form onSubmit={handleSearchSubmit} className="relative flex items-center w-full bg-gray-50 border border-gray-200 rounded-full px-4 py-2 mb-2">
                        <FiSearch className="text-gray-400 shrink-0 mr-2" size={16} />
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder="Search..."
                            className="w-full bg-transparent text-sm text-gray-800 outline-none"
                        />
                    </form>

                    <ul className="flex flex-col gap-5">
                        <li><NavLink to="/" onClick={() => setIsMobileOpen(false)} className={mobileNavLinkStyles}>Home</NavLink></li>
                        <li><NavLink to="/shop" onClick={() => setIsMobileOpen(false)} className={mobileNavLinkStyles}>Shop</NavLink></li>
                    </ul>
                </div>

                {/* Mobile Identity and Action Section */}
                <div className="border-t border-gray-100 pt-6 flex flex-col gap-4 text-gray-700">
                    <div className="px-2 pb-2">
                        <p className="text-xs text-gray-400">Account Profile</p>
                        <p className="text-base font-bold text-gray-900">John Doe</p>
                    </div>
                    <Link to="/account" onClick={() => setIsMobileOpen(false)} className="flex items-center gap-3 py-1 font-medium hover:text-black">
                        <FiSettings size={18}/> Account Details
                    </Link>
                    <Link to="/orders" onClick={() => setIsMobileOpen(false)} className="flex items-center gap-3 py-1 font-medium hover:text-black">
                        <FiPackage size={18}/> Order History
                    </Link>
                    <button className="flex items-center gap-3 py-2 mt-4 text-red-600 font-semibold border-t border-gray-100 custom-logout-btn">
                        <FiLogOut size={18}/> Logout
                    </button>
                </div>
           </div>

           {/* Backing Shade Panel Block */}
           {isMobileOpen && <div onClick={() => setIsMobileOpen(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-30 transition-opacity" />}
        </nav>
    );
}

export default Navbar;