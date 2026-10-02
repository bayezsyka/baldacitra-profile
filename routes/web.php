<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'home')->name('home');
Route::inertia('/umrah', 'umrah')->name('umrah');
Route::inertia('/haji', 'haji')->name('haji');
Route::inertia('/galeri', 'galeri')->name('galeri');
Route::inertia('/profil', 'profil')->name('profil');

Route::get('/kontak', [ContactController::class, 'index'])->name('kontak');
Route::post('/kontak', [ContactController::class, 'store'])->name('kontak.store');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard', [
            'messages' => \App\Models\ContactMessage::latest()->take(10)->get(),
            'messagesCount' => \App\Models\ContactMessage::count(),
            'usersCount' => \App\Models\User::count(),
        ]);
    })->name('dashboard');
});

require __DIR__.'/settings.php';
