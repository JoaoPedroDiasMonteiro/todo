<?php

use App\Http\Controllers\HomeController;
use App\TodoController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', HomeController::class);

Route::get('/dashboard', function () {
    return redirect()->route('todo.index');
})->middleware(['auth', 'verified'])->name('dashboard');



Route::get('profile', 'App\Http\Controllers\UserController@show')->name('profile.show');
Route::match(['put', 'patch'], 'profile', 'App\Http\Controllers\UserController@update')->name('profile.update');


Route::resource('todo', TodoController::class)->middleware(['auth', 'verified']);

Route::post('todo/{todo}/complete', [TodoController::class, 'complete'])->name('todo.complete')->middleware(['auth', 'verified']);
Route::post('todo/{todo}/uncomplete', [TodoController::class, 'uncomplete'])->name('todo.uncomplete')->middleware(['auth', 'verified']);
Route::get('todo/create/for-windows', [TodoController::class, 'createTodosForWindows'])->name('todo.createTodosForWindows')->middleware(['auth', 'verified']);

require __DIR__ . '/auth.php';
