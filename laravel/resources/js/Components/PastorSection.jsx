export default function PastorSection({ pastors = [] }) {
    const defaultPastors = [
        {
            name: "Pdt. Andreas Wahyudi",
            title: "Pendeta Jemaat",
            motto: "\"Karena bagi Allah tidak ada yang mustahil.\" — Lukas 1:37",
            image: null,
            initials: "AW",
            color: "from-amber-600 to-orange-700",
        },
    ];

    const items = pastors.length > 0 ? pastors : defaultPastors;

    return items;
}