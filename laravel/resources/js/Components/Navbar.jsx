import { useState, useRef, useEffect } from "react";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";

const DropdownMenu = ({ label, items, isOpen, onToggle, darkMode }) => {
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                onToggle(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={ref}>
            <button
                onClick={() => onToggle(!isOpen)}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    darkMode
                        ? 'text-gray-300 hover:text-amber-400 hover:bg-gray-800'
                        : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                }`}
            >
                {label}
                <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className={`absolute top-full left-0 mt-1 w-52 rounded-xl shadow-xl border py-2 z-50 animate-fadeIn ${
                    darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
                }`}>
                    {items.map((item, i) => (
                        <Link
                            key={i}
                            href={item.href}
                            className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors duration-150 ${
                                darkMode
                                    ? 'text-gray-300 hover:text-amber-400 hover:bg-gray-700'
                                    : 'text-gray-600 hover:text-amber-600 hover:bg-amber-50'
                            }`}
                        >
                            {item.icon && <span className={darkMode ? 'text-amber-400' : 'text-amber-500'}>{item.icon}</span>}
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default function Navbar({ darkMode, setDarkMode }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        {
            label: "Warta",
            items: [
                { label: "Download Warta", href: "/warta/download", icon: "↓" },
            ],
        },
        {
            label: "Organisasi",
            items: [
                { label: "Struktur Organisasi", href: "/organisasi/struktur", icon: "🏛" },
            ],
        },
        {
            label: "Profil",
            items: [
                { label: "Visi", href: "/profil/visi", icon: "👁" },
                { label: "Misi", href: "/profil/misi", icon: "🎯" },
                { label: "Sejarah", href: "/profil/sejarah", icon: "📜" },
            ],
        },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? darkMode ? "bg-gray-900/95 backdrop-blur-md shadow-md" : "bg-white/95 backdrop-blur-md shadow-md"
                    : darkMode ? "bg-gray-900/80 backdrop-blur-sm" : "bg-white/80 backdrop-blur-sm"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <img 
                            src="/assets/images/logo.png" 
                            alt="GKI Logo" 
                            className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
                        />
                        <div className="hidden sm:block">
                            <p className={`font-bold text-sm leading-tight ${darkMode ? 'text-amber-400' : 'text-amber-600'}`}>GKI Martadireja</p>
                            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Purwokerto</p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <DropdownMenu
                                key={item.label}
                                label={item.label}
                                items={item.items}
                                isOpen={openDropdown === item.label}
                                onToggle={(val) => setOpenDropdown(val ? item.label : null)}
                                darkMode={darkMode}
                            />
                        ))}
                    </div>

                    {/* Dark Mode Toggle & Login */}
                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-2 rounded-full transition-all duration-200 ${
                                darkMode 
                                    ? 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30' 
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                                </svg>
                            )}
                        </button>
                        <Link
                            href="/login"
                            className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 ${
                                darkMode
                                    ? 'bg-amber-500 text-gray-900 hover:bg-amber-400'
                                    : 'bg-amber-600 text-white hover:bg-amber-700'
                            }`}
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile Actions */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-2 rounded-lg transition-colors ${
                                darkMode ? 'text-amber-400 hover:bg-amber-500/20' : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                                </svg>
                            )}
                        </button>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className={`p-2 rounded-lg transition-colors ${
                                darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            aria-label="Toggle menu"
                        >
                            <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                            <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${mobileOpen ? "opacity-0" : ""}`} />
                            <div className={`w-5 h-0.5 bg-current transition-all ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className={`md:hidden border-t py-3 px-2 space-y-1 animate-slideDown ${
                        darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'
                    }`}>
                        {navItems.map((group) => (
                            <div key={group.label}>
                                <p className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                                    darkMode ? 'text-gray-500' : 'text-gray-400'
                                }`}>{group.label}</p>
                                {group.items.map((item, i) => (
                                    <Link
                                        key={i}
                                        href={item.href}
                                        className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                                            darkMode 
                                                ? 'text-gray-300 hover:text-amber-400 hover:bg-gray-800' 
                                                : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                                        }`}
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {item.icon && <span>{item.icon}</span>}
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        ))}
                        <div className={`pt-2 border-t ${darkMode ? 'border-gray-800' : 'border-gray-100'}`}>
                            <Link
                                href="/login"
                                className={`block w-full text-center px-4 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                                    darkMode
                                        ? 'bg-amber-500 text-gray-900 hover:bg-amber-400'
                                        : 'bg-amber-600 text-white hover:bg-amber-700'
                                }`}
                                onClick={() => setMobileOpen(false)}
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}