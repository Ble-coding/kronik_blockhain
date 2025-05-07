<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\HealthPackController;
use App\Http\Controllers\BlockchainController;
use App\Http\Controllers\HowItWorksController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\WalletController;
use App\Http\Controllers\SimulatorController;

// Route::get('/', function () {
//     return Inertia::render('welcome');
// })->name('home');

Route::get('/', [HomeController::class, 'index'])->name('home');


Route::resource('health-packs', HealthPackController::class);
Route::resource('blockchain', BlockchainController::class);
Route::resource('how-it-works', HowItWorksController::class);
Route::resource('contact', ContactController::class);
Route::resource('wallet', WalletController::class);
Route::resource('simulator', SimulatorController::class);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
