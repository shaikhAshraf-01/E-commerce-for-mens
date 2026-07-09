import { useContext, useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiX, FiPackage, FiLogOut, FiSettings } from 'react-icons/fi';
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import AuthModal from "../pages/AuthModal"; // adjust path if your file lives elsewhere

// Style Helpers
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
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const dropdownRef = useRef(null);

    const { cartItems } = useContext(CartContext);
    const { user, logout } = useContext(AuthContext);
    const cartCount = cartItems.length;
    const [isAnimate, setIsAnimate] = useState(false);

    // Trigger notification animation effect every single time item arrays change
    useEffect(() => {
        if (cartCount === 0) return;
        
        setIsAnimate(true);

        // Shrink the notification framework container back down after 300ms
        const timer = setTimeout(() => setIsAnimate(false), 300);
        return () => clearTimeout(timer);
    }, [cartCount]);

    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

    useEffect(() => {
        if (location.pathname === '/shop') {
            setSearchTerm(searchParams.get('search') || '');
        } else {
            setSearchTerm('');
        }
    }, [location.pathname, searchParams]);

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

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        document.body.style.overflow = (isMobileOpen || isAuthModalOpen) ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileOpen, isAuthModalOpen]);

    return (
        <nav className="w-full fixed top-0 left-0 h-16 px-4 md:px-7 flex justify-between items-center border-b border-gray-100 bg-white z-50 relative">
           
           {/* 1. BRAND LOGO */}
           <Link to="/" className="shrink-0 select-none mr-3">
                <h1 className="font-black font-sans text-lg md:text-2xl tracking-wider leading-none text-black">Fashion</h1>
                <h3 className="text-xs font-bold tracking-widest text-gray-500 mt-0.5 pl-6">Market</h3>
           </Link>

           {/* 1.5 MOBILE-ONLY CENTERED SEARCH BAR (sits in the top bar itself, not the drawer) */}
           <form 
                onSubmit={handleSearchSubmit} 
                className="absolute left-1/2 -translate-x-1/2 flex md:hidden items-center w-[42vw] max-w-56 bg-gray-50 border border-gray-200 rounded-full px-3 py-1.5"
           >
                <FiSearch className="text-gray-400 shrink-0 mr-1.5" size={14} />
                <input 
                    type="text" 
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search..." 
                    className="w-full bg-transparent text-xs text-gray-800 outline-none placeholder-gray-400"
                />
                {searchTerm && (
                    <button
                        type="button"
                        onClick={() => { setSearchTerm(''); navigate('/shop', { replace: true }); }}
                        className="text-gray-400 hover:text-gray-700 ml-1 shrink-0"
                        aria-label="Clear search"
                    >
                        <FiX size={12} />
                    </button>
                )}
           </form>

           {/* 2. MAIN CENTER NAVIGATION & SEARCH */}
           <div className="flex-1 hidden md:flex items-center justify-between max-w-4xl mx-4">
                <ul className="flex items-center gap-6 shrink-0">
                    <li><NavLink to="/" className={navLinkStyles}>Home</NavLink></li>
                    <li><NavLink to="/shop" className={navLinkStyles}>Shop</NavLink></li>
                </ul>

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
                <Link to="/cart" className="text-gray-700 hover:text-black cursor-pointer relative p-1 transition" aria-label="View Cart">
                    <FiShoppingBag size={21}/>
                    
                    {cartCount > 0 && (
                        <span 
                            className={`absolute -top-0.5 -right-0.5 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center transition-all duration-300 shadow-sm ${
                                isAnimate ? "scale-125 bg-green-500" : "scale-100 bg-red-500"
                            }`}
                        >
                            {cartCount}
                        </span>
                    )}
                </Link>

                <div className="hidden md:block relative" ref={dropdownRef}>
                    {user ? (
                        // LOGGED IN → user icon + dropdown
                        <>
                            <button 
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center text-gray-700 hover:text-black p-1 transition focus:outline-none"
                                aria-label="User Account Menu"
                            >
                                <FiUser size={21} />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                                    <div className="px-4 py-2 border-b border-gray-50">
                                        <p className="text-xs text-gray-400 font-medium">Signed in as</p>
                                        <p className="text-sm font-semibold text-gray-800 truncate">{user.name}</p>
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
                                        <button 
                                            onClick={() => { logout(); setIsDropdownOpen(false); navigate('/'); }} 
                                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition"
                                        >
                                            <FiLogOut size={16} className="text-red-400" />
                                            <span>Log Out</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        // LOGGED OUT → opens login/register modal (no page navigation)
                        <button 
                            onClick={() => setIsAuthModalOpen(true)}
                            className="px-4 py-2 text-sm font-semibold text-black bg-green-400 rounded-xl hover:bg-green-300 transition"
                        >
                            Login / Register
                        </button>
                    )}
                </div>

                {/* Mobile Menu Action Toggle Button */}
                <button 
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="block md:hidden text-gray-700 hover:text-black p-1 transition"
                    aria-label="Toggle Mobile Menu"
                >
                    {isMobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                </button>
           </div>

           {/* Mobile Fullscreen Menu Drawer overlay */}
           {isMobileOpen && (
                <div className="fixed inset-x-0 top-16 bg-white border-b border-gray-200 shadow-lg p-5 z-40 md:hidden flex flex-col gap-5 animate-in fade-in slide-in-from-top-5 duration-200">
                    <form onSubmit={handleSearchSubmit} className="w-full">
                        <div className="relative flex items-center w-full bg-gray-50 border border-gray-200 rounded-full px-4 py-2">
                            <FiSearch className="text-gray-400 mr-2" size={16} />
                            <input 
                                type="text" 
                                value={searchTerm}
                                onChange={handleSearchChange}
                                placeholder="Search products..."
                                className="w-full bg-transparent text-sm text-gray-800 outline-none"
                            />
                        </div>
                    </form>

                    <ul className="flex flex-col gap-5">
                        <li>
                            <NavLink to="/" onClick={() => setIsMobileOpen(false)} className={mobileNavLinkStyles}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop" onClick={() => setIsMobileOpen(false)} className={mobileNavLinkStyles}>
                                Shop
                            </NavLink>
                        </li>
                    </ul>

                    {/* Mobile login/logout section */}
                    {user ? (
                        <button 
                            onClick={() => { logout(); setIsMobileOpen(false); navigate('/'); }}
                            className="flex items-center gap-2 text-sm font-semibold text-red-600"
                        >
                            <FiLogOut size={16} />
                            Log Out
                        </button>
                    ) : (
                        <button 
                            onClick={() => { setIsAuthModalOpen(true); setIsMobileOpen(false); }}
                            className="px-4 py-2 text-sm font-semibold text-black bg-green-400 rounded-xl hover:bg-green-300 transition w-fit"
                        >
                            Login / Register
                        </button>
                    )}
                </div>
           )}

           {/* Login / Register Modal */}
           {isAuthModalOpen && (
                <AuthModal onClose={() => setIsAuthModalOpen(false)} />
           )}
        </nav>
    );
}

export default Navbar;