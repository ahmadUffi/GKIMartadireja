<?php

use App\Http\Controllers\Landingpagecontroller;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// ─── Landing Page ────────────────────────────────────────────────────────────
// Redirect root to dashboard
Route::get('/', function () {
    return redirect('/dashboard');
});

// Public landing page (accessible without login)
Route::get('/dashboard', [Landingpagecontroller::class, 'index'])->name('home');

// Admin dashboard (requires authentication)
Route::get('/admin/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// ─── Profil ──────────────────────────────────────────────────────────────────
Route::prefix('profil')->name('profil.')->group(function () {
    Route::get('/visi',    fn () => inertia('Profile/Visi'))->name('visi');
    Route::get('/misi',    fn () => inertia('Profile/Misi'))->name('misi');
    Route::get('/sejarah', fn () => inertia('Profile/Sejarah'))->name('sejarah');
});
 
// ─── Organisasi ──────────────────────────────────────────────────────────────
Route::prefix('organisasi')->name('organisasi.')->group(function () {
    Route::get('/struktur', fn () => inertia('Organisasi/Struktur'))->name('struktur');
});
 
// ─── Warta ────────────────────────────────────────────────────────────────────
Route::prefix('warta')->name('warta.')->group(function () {
    Route::get('/download', fn () => inertia('Warta/Download'))->name('download');
});
 
// ─── Berita ──────────────────────────────────────────────────────────────────
Route::get('/berita',       fn () => inertia('Berita/Index'))->name('berita.index');
Route::get('/berita/{slug}', fn (string $slug) => inertia('Berita/Show', ['slug' => $slug]))->name('berita.show');
 
// ─── Agenda ──────────────────────────────────────────────────────────────────
Route::get('/agenda', fn () => inertia('Agenda/Index'))->name('agenda.index');

require __DIR__.'/auth.php';
