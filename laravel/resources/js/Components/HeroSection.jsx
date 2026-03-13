import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

export default function HeroSection({ darkMode }) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300 ${
            darkMode 
                ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
                : 'bg-gradient-to-br from-amber-900 via-orange-800 to-amber-900'
        }`}>
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl ${
                    darkMode ? 'bg-amber-600/10' : 'bg-amber-600/20'
                }`} />
                <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl ${
                    darkMode ? 'bg-orange-400/5' : 'bg-orange-400/10'
                }`} />
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl ${
                    darkMode ? 'bg-amber-700/5' : 'bg-amber-700/10'
                }`} />
                {/* Cross pattern overlay */}
                <div className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.3) 60px, rgba(255,255,255,0.3) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.3) 60px, rgba(255,255,255,0.3) 61px)`
                    }}
                />
            </div>

            {/* Cross icon top center */}
            <div className="absolute top-24 left-1/2 -translate-x-1/2 opacity-10">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <rect x="32" y="5" width="16" height="70" rx="4" fill="white"/>
                    <rect x="5" y="28" width="70" height="16" rx="4" fill="white"/>
                </svg>
            </div>

            <div
                className={`relative z-10 text-center max-w-4xl mx-auto px-6 transition-all duration-1000 ${
                    loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
                {/* Tagline badge */}
                <div
                    className={`inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 transition-all duration-700 delay-200 ${
                        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                    <span className={`w-2 h-2 rounded-full animate-pulse ${
                        darkMode ? 'bg-amber-400' : 'bg-orange-400'
                    }`} />
                    <span className="text-white/90 text-xs font-medium tracking-wider uppercase">
                        Selamat Datang di GKI Martadireja
                    </span>
                </div>

                <h1
                    className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-700 delay-300 ${
                        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ fontFamily: "'Georgia', serif" }}
                >
                    Gereja Kristen Indonesia
                    <span className={`block mt-1 ${darkMode ? 'text-amber-300' : 'text-orange-300'}`}>Martadireja</span>
                </h1>

                <p
                    className={`text-lg max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-400 ${
                        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    } ${darkMode ? 'text-gray-300' : 'text-amber-100/80'}`}
                >
                    Bersama bertumbuh dalam iman, kasih, dan pengharapan. 
                    Melayani dengan sepenuh hati untuk kemuliaan Tuhan.
                </p>

                <div
                    className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-500 ${
                        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                    <Link
                        href="/profil/sejarah"
                        className={`px-8 py-3.5 font-bold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 ${
                            darkMode 
                                ? 'bg-amber-500 text-gray-900 hover:bg-amber-400' 
                                : 'bg-white text-amber-800 hover:bg-amber-50'
                        }`}
                    >
                        Kenali Kami
                    </Link>
                    <Link
                        href="/warta/download"
                        className="px-8 py-3.5 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
                    >
                        Download Warta
                    </Link>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-1.5">
                    <div className="w-1.5 h-2 bg-white/50 rounded-full animate-scrollDot" />
                </div>
            </div>
        </section>
    );
}