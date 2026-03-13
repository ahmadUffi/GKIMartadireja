import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import StatCard from "@/Components/StatCard";
import RecentMembersTable from "@/Components/RecentMembersTable";
import GenderChart from "@/Components/GenderChart";

export default function Dashboard() {
    // Hardcoded data untuk demo
    const stats = {
        totalMembers: 342,
        pendingAnestesi: 5,
        upcomingEvents: 8,
        publishedWarta: 12,
    };

    const recentMembers = [
        {
            id: "GKI-2024-001",
            name: "Budi Santoso",
            email: "budi.santoso@email.com",
            registeredDate: "12 Mar 2026",
            status: "Aktif",
        },
        {
            id: "GKI-2024-002",
            name: "Siti Rahayu",
            email: "siti.rahayu@email.com",
            registeredDate: "11 Mar 2026",
            status: "Aktif",
        },
        {
            id: "GKI-2024-003",
            name: "Ahmad Wijaya",
            email: "ahmad.wijaya@email.com",
            registeredDate: "10 Mar 2026",
            status: "Aktif",
        },
        {
            id: "GKI-2024-004",
            name: "Maria Magdalena",
            email: "maria.m@email.com",
            registeredDate: "09 Mar 2026",
            status: "Aktif",
        },
        {
            id: "GKI-2024-005",
            name: "Yohanes Paulus",
            email: "yohanes.p@email.com",
            registeredDate: "08 Mar 2026",
            status: "Aktif",
        },
    ];

    const genderData = {
        male: 178,
        female: 164,
    };

    const statCards = [
        {
            icon: {
                className: "ri-user-line",
                bgColor: "bg-primary-600",
            },
            title: "Jumlah Users",
            value: stats.totalMembers,
            description: "Total anggota jemaat terdaftar",
            badge: {
                className: "text-success-600",
                icon: "ri-arrow-up-line",
                text: "+12 bulan ini",
            },
            bgClass: "bg-gradient-start-1",
        },
        {
            icon: {
                className: "ri-file-list-line",
                bgColor: "bg-success-600",
            },
            title: "Pengajuan Anestesi",
            value: stats.pendingAnestesi,
            description: "Pengajuan perpindahan jemaat",
            badge: {
                className: "text-warning-600",
                icon: "ri-time-line",
                text: "Menunggu persetujuan",
            },
            bgClass: "bg-gradient-start-2",
        },
        {
            icon: {
                className: "ri-calendar-event-line",
                bgColor: "bg-info-600",
            },
            title: "Jumlah Event",
            value: stats.upcomingEvents,
            description: "Event gereja yang akan datang",
            badge: {
                className: "text-info-600",
                icon: "ri-calendar-check-line",
                text: "3 minggu ini",
            },
            bgClass: "bg-gradient-start-3",
        },
        {
            icon: {
                className: "ri-newspaper-line",
                bgColor: "bg-warning-600",
            },
            title: "Warta",
            value: stats.publishedWarta,
            description: "Warta gereja terpublikasi",
            badge: {
                className: "text-primary-600",
                icon: "ri-article-line",
                text: "Tahun ini",
            },
            bgClass: "bg-gradient-start-4",
        },
    ];

    return (
        <AdminLayout>
            <Head title="Dashboard" />

            <div className="row gy-4">
                {/* Stat Cards */}
                {statCards.map((card, index) => (
                    <div key={index} className="col-xxl-3 col-sm-6">
                        <StatCard {...card} />
                    </div>
                ))}

                {/* Recent Members Table */}
                <div className="col-xxl-8">
                    <RecentMembersTable members={recentMembers} />
                </div>

                {/* Gender Chart */}
                <div className="col-xxl-4">
                    <GenderChart
                        genderData={genderData}
                        totalMembers={stats.totalMembers}
                    />
                </div>
            </div>
        </AdminLayout>
    );
}
