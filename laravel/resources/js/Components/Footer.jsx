import { Link } from "@inertiajs/react";

export default function Footer({ darkMode }) {
    const socialLinks = [
        {
            name: "YouTube",
            href: "https://youtube.com/@gkimartadireja",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
            ),
            color: "hover:text-red-400",
        },
        {
            name: "Instagram",
            href: "https://instagram.com/gkimartadireja",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            ),
            color: "hover:text-pink-400",
        },
        {
            name: "Facebook",
            href: "https://facebook.com/gkimartadireja",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
            ),
            color: "hover:text-blue-400",
        },
    ];

    return (
        <footer className={`transition-colors duration-300 ${
            darkMode ? 'bg-black text-gray-300' : 'bg-gray-900 text-gray-300'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <img 
                                src="/assets/images/logo.png" 
                                alt="GKI Logo" 
                                className="w-10 h-10 object-contain"
                            />
                            <div>
                                <p className="text-white font-bold text-sm">GKI Martadireja</p>
                                <p className="text-gray-500 text-xs">Purwokerto</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Bersama bertumbuh dalam iman, kasih, dan pengharapan untuk kemuliaan Tuhan.
                        </p>

                        {/* Social Media */}
                        <div className="flex items-center gap-3 mt-5">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.name}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.name}
                                    className={`w-9 h-9 rounded-full flex items-center justify-center text-gray-400 ${s.color} transition-all duration-200 ${
                                        darkMode ? 'bg-amber-500/10 hover:bg-amber-500/20' : 'bg-white/10 hover:bg-white/20'
                                    }`}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                            Tautan
                        </h4>
                        <ul className="space-y-2.5">
                            {[
                                { label: "Visi & Misi", href: "/profil/visi" },
                                { label: "Sejarah", href: "/profil/sejarah" },
                                { label: "Struktur Organisasi", href: "/organisasi/struktur" },
                                { label: "Download Warta", href: "/warta/download" },
                                { label: "Berita", href: "/berita" },
                                { label: "Agenda", href: "/agenda" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className={`text-sm text-gray-400 transition-colors duration-150 hover:underline ${
                                            darkMode ? 'hover:text-amber-400' : 'hover:text-green-400'
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Map */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                            Lokasi
                        </h4>
                        <div className="rounded-xl overflow-hidden border border-white/10 mb-3 shadow-lg">
                            <iframe
                                title="Lokasi GKI Martadireja"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.7!2d109.2456!3d-7.4216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zR0tJIE1hcnRhZGlyZWph!5e0!3m2!1sen!2sid!4v1"
                                width="100%"
                                height="160"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                        <address className="not-italic text-sm text-gray-400 leading-relaxed">
                            <p className="flex items-start gap-2">
                                <span className={darkMode ? 'text-amber-500 mt-0.5 flex-shrink-0' : 'text-green-500 mt-0.5 flex-shrink-0'}>📍</span>
                                Jl. Martadireja No. 1, Purwokerto, Jawa Tengah
                            </p>
                            <p className="flex items-center gap-2 mt-1.5">
                                <span className={darkMode ? 'text-amber-500' : 'text-green-500'}>📞</span>
                                (0281) 123-456
                            </p>
                            <p className="flex items-center gap-2 mt-1.5">
                                <span className={darkMode ? 'text-amber-500' : 'text-green-500'}>✉️</span>
                                info@gkimartadireja.org
                            </p>
                        </address>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} GKI Martadireja. All rights reserved.</p>
                    <p>Made with ❤️ for the glory of God</p>
                </div>
            </div>
        </footer>
    );
}