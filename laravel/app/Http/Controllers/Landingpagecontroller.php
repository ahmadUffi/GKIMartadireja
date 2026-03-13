<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class Landingpagecontroller extends Controller
{
    /**
     * Display the landing page with dummy data
     * Database integration disabled for frontend development
     */
    public function index(): Response
    {
        // Using dummy data for frontend development
        // Database integration will be added in Phase 2
        $agendaItems = [
            [
                'date' => '30',
                'month' => 'Apr',
                'title' => 'Temu Raya Pelayan Anak',
                'location' => 'Bornesia Hotel, Yogyakarta',
                'isOnline' => false,
            ],
            [
                'date' => '24',
                'month' => 'Apr',
                'title' => 'Kursus Paraikeu Emeritus dan Pasangannya',
                'location' => 'Hotel Satya Graha, Kebumen',
                'isOnline' => false,
            ],
            [
                'date' => '20',
                'month' => 'Apr',
                'title' => 'Ibadah Pementasan Anak Diri Pdt. Stephanus Liem',
                'location' => 'GKI Karunia, Purwokerto',
                'isOnline' => false,
            ],
            [
                'date' => '12',
                'month' => 'Apr',
                'title' => 'Sharing Informasi Pengelolaan Keuangan Gereja GKI Lingkup SW Jateng',
                'location' => '',
                'isOnline' => true,
            ],
        ];

        $pastors = [
            [
                'name' => 'Pdt. Andreas Wahyudi',
                'title' => 'Pendeta Jemaat',
                'motto' => '"Karena bagi Allah tidak ada yang mustahil." — Lukas 1:37',
                'image' => null,
                'initials' => 'AW',
                'color' => 'from-green-600 to-emerald-700',
            ],
        ];

        $beritaItems = [
            [
                'title' => 'Perayaan Paskah 2025: Kebangkitan yang Membawa Harapan Baru',
                'excerpt' => 'Ribuan jemaat berkumpul dalam sukacita merayakan Kebangkitan Kristus.',
                'category' => 'Perayaan',
                'date' => '20 Apr 2025',
                'image' => null,
                'slug' => 'perayaan-paskah-2025',
            ],
        ];

        return Inertia::render('LandingPage/Index', [
            'agendaItems' => $agendaItems,
            'pastors' => $pastors,
            'beritaItems' => $beritaItems,
        ]);
    }
}