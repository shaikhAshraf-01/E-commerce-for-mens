// components/AuthModal.jsx
import { useState, useContext } from 'react';
import { FiX } from 'react-icons/fi';
import { AuthContext } from '../context/AuthContext';

function AuthModal({ onClose }) {
    const [mode, setMode] = useState('login'); // 'login' or 'register'
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: replace with real API call
        login({ name: formData.name || 'User', email: formData.email });
        onClose();
    };

    return (
        // Backdrop — clicking it closes the modal
        <div 
            className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Modal box — stopPropagation so clicking inside doesn't close it */}
            <div 
                className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 relative animate-in fade-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-black transition"
                    aria-label="Close"
                >
                    <FiX size={20} />
                </button>

                <h2 className="text-xl font-bold text-black mb-1">
                    {mode === 'login' ? 'Welcome back' : 'Create account'}
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                    {mode === 'login' ? 'Log in to continue' : 'Sign up to get started'}
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {mode === 'register' && (
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full name"
                            required
                            className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-black transition"
                        />
                    )}
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-black transition"
                    />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                        className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-black transition"
                    />

                    <button 
                        type="submit"
                        className="bg-black text-white rounded-lg py-2.5 text-sm font-semibold hover:bg-gray-800 transition mt-2"
                    >
                        {mode === 'login' ? 'Log In' : 'Sign Up'}
                    </button>
                </form>

                <p className="text-sm text-gray-500 text-center mt-5">
                    {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
                    <button 
                        onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                        className="text-black font-semibold hover:underline"
                    >
                        {mode === 'login' ? 'Sign up' : 'Log in'}
                    </button>
                </p>
            </div>
        </div>
    );
}

export default AuthModal;