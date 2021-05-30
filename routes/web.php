<?php

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

Route::get('/', function () {
    return redirect()->route('todo.index');
});


Route::resource('todo', TodoController::class);

Route::post('todo/{todo}/complete', [TodoController::class, 'complete'])->name('todo.complete');
Route::post('todo/{todo}/uncomplete', [TodoController::class, 'uncomplete'])->name('todo.uncomplete');
Route::get('todo/create/for-windows', [TodoController::class, 'createTodosForWindows'])->name('todo.createTodosForWindows');