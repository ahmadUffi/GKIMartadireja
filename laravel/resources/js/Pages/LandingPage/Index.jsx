import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import Navbar from "@/Components/NavbarLanding";
import HeroSection from "@/Components/HeroSection";
import AgendaSection from "@/Components/AgendaSection";
import PastorSection from "@/Components/PastorSection";
import BeritaSection from "@/Components/BeritaSection";
import Footer from "@/Components/Footer";
import { Link } from "@inertiajs/react";

export default function LandingPage({ agendaItems, pastors, beritaItems }) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const agendaData = AgendaSection({ agendaItems });
    const pastorData = PastorSection({ pastors });
    const beritaData = BeritaSection({ beritaItems });

    return (
        <>
            <Head title="GKI Martadireja - Beranda"/>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-6px)}
                    to { opacity: 1; transform: translateY(0)}
                }
                @keyframes slideDown {
                    from { opacity: 0; max-height: 0; }
                    to { opacity: 1; max-height: 500px; }
                }
                @keyframes scrollDot {
                    0%, 100% { transform: translateY(0); opacity: 1; }
                    50% { transform: translateY(6px); opacity: 0.4; }
                }
                .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
                .animate-slideDown { animation: slideDown 0.3s ease-out; }
                .animate-scrollDot { animation: scrollDot 1.5s ease-in-out infinite; }
                .border-l-3 { border-left-width: 3px; }
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>

            <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <main>
                    <HeroSection darkMode={darkMode} />
                    
                    {/* Agenda & Pastor Section - Side by Side */}
                    <section className={`py-16 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Agenda - Vertical List */}
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <h2 className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`} style={{ fontFamily: "'Georgia', serif" }}>
                                                Agenda 📅
                                            </h2>
                                            <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Kegiatan mendatang gereja</p>
                                        </div>
                                    </div>
                                    <div className={`rounded-2xl shadow-lg overflow-hidden border ${
                                        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                                    }`}>
                                        <div className="divide-y divide-gray-100 dark:divide-gray-700">
                                            {agendaData.map((item, i) => (
                                                <div key={i} className="flex items-start gap-4 p-5 hover:bg-amber-50/50 dark:hover:bg-gray-700/50 transition-colors duration-200 group cursor-pointer">
                                                    <div className="flex-shrink-0">
                                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg flex flex-col items-center justify-center text-white">
                                                            <span className="text-2xl font-bold leading-none">{item.date}</span>
                                                            <span className="text-xs font-medium uppercase tracking-wide">{item.month}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 min-w-0 pt-1">
                                                        <h4 className={`text-sm font-semibold group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug mb-1 ${
                                                            darkMode ? 'text-gray-200' : 'text-gray-800'
                                                        }`}>
                                                            {item.title}
                                                        </h4>
                                                        <p className={`text-xs flex items-center gap-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                                            {item.isOnline ? (
                                                                <><span className="text-blue-500">🔗</span> {item.location}</>
                                                            ) : (
                                                                <><span className="text-amber-500">📍</span> {item.location}</>
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className={`p-4 text-center border-t ${darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-100 bg-gray-50'}`}>
                                            <Link
                                                href="/agenda"
                                                className={`text-sm font-medium hover:underline ${
                                                    darkMode ? 'text-amber-400 hover:text-amber-300' : 'text-amber-600 hover:text-amber-700'
                                                }`}
                                            >
                                                Agenda selengkapnya →
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Pastor Profile - Horizontal Card */}
                                <div>
                                    <div className="mb-6">
                                        <h2 className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`} style={{ fontFamily: "'Georgia', serif" }}>
                                            Profil Pendeta 🙏
                                        </h2>
                                        <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Hamba Tuhan yang melayani</p>
                                    </div>
                                    {pastorData.map((pastor, i) => (
                                        <div
                                            key={i}
                                            className={`rounded-2xl shadow-lg overflow-hidden border transition-all duration-300 hover:shadow-xl ${
                                                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                                            }`}
                                        >
                                            <div className="flex flex-col sm:flex-row">
                                                {/* Text Content - Left */}
                                                <div className="flex-1 p-8 flex flex-col justify-center order-2 sm:order-1">
                                                    <h3 className={`font-bold text-2xl mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                                                        {pastor.name}
                                                    </h3>
                                                    <p className={`text-sm font-semibold uppercase tracking-wider mb-6 ${
                                                        darkMode ? 'text-amber-400' : 'text-amber-600'
                                                    }`}>
                                                        {pastor.title}
                                                    </p>

                                                    {/* Motto */}
                                                    <div className={`rounded-xl px-5 py-4 border-l-4 relative ${
                                                        darkMode 
                                                            ? 'bg-amber-500/10 border-amber-500' 
                                                            : 'bg-amber-50 border-amber-600'
                                                    }`}>
                                                        <div className={`absolute -top-3 left-4 text-4xl leading-none font-serif ${
                                                            darkMode ? 'text-amber-500/40' : 'text-amber-400'
                                                        }`}>"</div>
                                                        <p className={`text-base italic leading-relaxed pt-2 ${
                                                            darkMode ? 'text-gray-300' : 'text-gray-700'
                                                        }`}>
                                                            {pastor.motto}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Photo - Right */}
                                                <div className="w-full sm:w-64 flex-shrink-0 order-1 sm:order-2">
                                                    <div className={`relative h-64 sm:h-full bg-gradient-to-br ${pastor.color} flex items-center justify-center overflow-hidden`}>
                                                        {pastor.image ? (
                                                            <img
                                                                src={pastor.image}
                                                                alt={pastor.name}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        ) : (
                                                            <div className="w-32 h-32 rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center backdrop-blur-sm shadow-lg">
                                                                <span className="text-white font-bold text-4xl">{pastor.initials}</span>
                                                            </div>
                                                        )}
                                                        {/* Decorative cross */}
                                                        <div className="absolute top-4 right-4 opacity-20">
                                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                                                <rect x="10" y="2" width="4" height="20" rx="2" fill="white"/>
                                                                <rect x="2" y="8" width="20" height="4" rx="2" fill="white"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Berita Section - Full Width Below */}
                    <section className={`py-16 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-end justify-between mb-10">
                                <div>
                                    <h2
                                        className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}
                                        style={{ fontFamily: "'Georgia', serif" }}
                                    >
                                        Berita 📰
                                    </h2>
                                    <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Kabar terkini dari GKI Martadireja</p>
                                </div>
                                <Link
                                    href="/berita"
                                    className={`text-sm font-medium hover:underline ${
                                        darkMode ? 'text-amber-400 hover:text-amber-300' : 'text-amber-600 hover:text-amber-700'
                                    }`}
                                >
                                    Lihat semua berita →
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {beritaData.map((item, i) => (
                                    <Link
                                        key={i}
                                        href={`/berita/${item.slug}`}
                                        className={`group rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                                            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                                        }`}
                                    >
                                        {/* Thumbnail */}
                                        <div className={`relative h-48 overflow-hidden flex-shrink-0 ${
                                            darkMode ? 'bg-gradient-to-br from-gray-700 to-gray-600' : 'bg-gradient-to-br from-amber-50 to-orange-50'
                                        }`}>
                                            {item.image ? (
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <svg className={`w-16 h-16 ${darkMode ? 'text-gray-500' : 'text-amber-200'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                                    </svg>
                                                </div>
                                            )}
                                            {item.category && (
                                                <span className={`absolute top-3 left-3 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md ${
                                                    darkMode ? 'bg-amber-500' : 'bg-amber-600'
                                                }`}>
                                                    {item.category}
                                                </span>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="p-5 flex flex-col flex-1">
                                            <h3 className={`font-bold text-base leading-snug mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2 ${
                                                darkMode ? 'text-gray-100' : 'text-gray-900'
                                            }`}>
                                                {item.title}
                                            </h3>
                                            {item.excerpt && (
                                                <p className={`text-sm leading-relaxed line-clamp-3 flex-1 ${
                                                    darkMode ? 'text-gray-400' : 'text-gray-600'
                                                }`}>{item.excerpt}</p>
                                            )}
                                            <div className={`flex items-center justify-between mt-4 pt-3 border-t ${
                                                darkMode ? 'border-gray-700' : 'border-gray-100'
                                            }`}>
                                                <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{item.date}</span>
                                                <span className={`text-sm font-semibold flex items-center gap-1 ${
                                                    darkMode 
                                                        ? 'text-amber-400 group-hover:text-amber-300' 
                                                        : 'text-amber-600 group-hover:text-amber-700'
                                                }`}>
                                                    Baca →
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
                <Footer darkMode={darkMode} />
            </div>
        </>
    )
}