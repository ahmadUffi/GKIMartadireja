<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Admin/Dashboard');
});

Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->name('dashboard');

// Temporary: Routes without auth middleware for demo
// Members Management Routes
Route::prefix('members')->name('members.')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Admin/Members/Index');
    })->name('index');
    Route::get('/create', function () {
        return Inertia::render('Admin/Members/Create');
    })->name('create');
});

// Anestesi Routes
Route::prefix('anestesi')->name('anestesi.')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Admin/Anestesi/Index');
    })->name('index');
});

// Ibadah Routes
Route::prefix('ibadah')->name('ibadah.')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Admin/Ibadah/Index');
    })->name('index');
});

// Warta Routes
Route::prefix('warta')->name('warta.')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Admin/Warta/Index');
    })->name('index');
});

// Events Routes
Route::prefix('events')->name('events.')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Admin/Events/Index');
    })->name('index');
});

require __DIR__.'/auth.php';
