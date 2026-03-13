import { Link } from "@inertiajs/react";

const AgendaItem = ({ date, month, year, title, location, isOnline }) => (
    <div className="flex items-start gap-4 p-4 hover:bg-amber-50/50 dark:hover:bg-gray-800/50 transition-colors duration-200 group cursor-pointer rounded-lg">
        <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg flex flex-col items-center justify-center text-white">
                <span className="text-2xl font-bold leading-none">{date}</span>
                <span className="text-xs font-medium uppercase tracking-wide">{month}</span>
            </div>
        </div>
        <div className="flex-1 min-w-0 pt-1">
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug mb-1">
                {title}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                {isOnline ? (
                    <><span className="text-blue-500">🔗</span> {location || "Zoom Online"}</>
                ) : (
                    <><span className="text-amber-500">📍</span> {location}</>
                )}
            </p>
        </div>
    </div>
);

export default function AgendaSection({ agendaItems = [] }) {
    const defaultAgenda = [
        { date: "30", month: "Apr", year: "2026", title: "Temu Raya Pelayan Anak", location: "Emersia Hotel, Yogyakarta", isOnline: false },
        { date: "24", month: "Feb", year: "2026", title: "Konven Pendeta Emeritus dan Pasangannya", location: "Hotel Griya Persada Kaliurang, Yogyakarta", isOnline: false },
        { date: "20", month: "Feb", year: "2026", title: "Ibadah Emeritasi Atas Diri Pdt. Stephanus Liem", location: "GKI Martadireja, Purwokerto", isOnline: false },
        { date: "12", month: "Feb", year: "2026", title: "Sharing Informasi Pengelolaan Keuangan Gereja GKI Lingkup SW Jateng", location: "Zoom Online", isOnline: true },
    ];

    const items = agendaItems.length > 0 ? agendaItems : defaultAgenda;

    return items;
}