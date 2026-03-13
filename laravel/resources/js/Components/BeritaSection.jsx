import { Link } from "@inertiajs/react";

const BeritaCard = ({ title, excerpt, category, date, image, slug }) => (
    <Link
        href={`/berita/${slug}`}
        className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
        {/* Thumbnail */}
        <div className="relative h-48 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 overflow-hidden flex-shrink-0">
            {image ? (
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-amber-200 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                </div>
            )}
            {category && (
                <span className="absolute top-3 left-3 bg-amber-600 dark:bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {category}
                </span>
            )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 text-base leading-snug mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                {title}
            </h3>
            {excerpt && (
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 flex-1">{excerpt}</p>
            )}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                <span className="text-xs text-gray-400 dark:text-gray-500">{date}</span>
                <span className="text-sm font-semibold text-amber-600 dark:text-amber-400 group-hover:text-amber-700 dark:group-hover:text-amber-300 flex items-center gap-1">
                    Baca →
                </span>
            </div>
        </div>
    </Link>
);

export default function BeritaSection({ beritaItems = [] }) {
    const defaultBerita = [
        {
            title: "Perayaan Paskah 2025: Kebangkitan yang Membawa Harapan Baru",
            excerpt: "Ribuan jemaat berkumpul dalam sukacita merayakan Kebangkitan Kristus dalam ibadah Paskah yang penuh hikmat.",
            category: "Perayaan",
            date: "20 Apr 2025",
            slug: "perayaan-paskah-2025",
        },
        {
            title: "Program Pembinaan Anak Remaja: Membangun Generasi Penerus",
            excerpt: "GKI Martadireja membuka program pembinaan khusus untuk anak dan remaja sebagai investasi masa depan gereja.",
            category: "Pembinaan",
            date: "15 Apr 2025",
            slug: "program-pembinaan-anak",
        },
        {
            title: "Bakti Sosial: Melayani Sesama di Tengah Masyarakat",
            excerpt: "Aksi nyata kasih Kristus diwujudkan melalui kegiatan bakti sosial yang menjangkau warga membutuhkan.",
            category: "Sosial",
            date: "10 Apr 2025",
            slug: "bakti-sosial-april",
        },
        {
            title: "Ibadah Padang: Merayakan Ciptaan Tuhan di Alam Terbuka",
            excerpt: "Momen spesial bersama seluruh keluarga gereja dalam ibadah padang yang penuh kenangan indah.",
            category: "Ibadah",
            date: "5 Apr 2025",
            slug: "ibadah-padang-2025",
        },
        {
            title: "Seminar Keluarga: Keluarga Sebagai Gereja Kecil",
            excerpt: "Memperkuat fondasi keluarga Kristen melalui seminar interaktif bersama narasumber berpengalaman.",
            category: "Seminar",
            date: "1 Apr 2025",
            slug: "seminar-keluarga",
        },
        {
            title: "Pembekalan Diaken dan Penatua Baru Periode 2025-2027",
            excerpt: "Gereja mempersiapkan para pelayan jemaat yang baru melalui pembekalan yang komprehensif dan mendalam.",
            category: "Organisasi",
            date: "28 Mar 2025",
            slug: "pembekalan-diaken-penatua",
        },
    ];

    const items = beritaItems.length > 0 ? beritaItems : defaultBerita;

    return items;
}