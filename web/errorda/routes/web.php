<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Log;
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

// Route::get('/', function () {
//     return view('index');
// });

Route::get('/{api}', function () {
    return view('list');

})->where('api', '.*');

Route::post('/{api}', function () {
    return view('list');
})->where('api', '.*');

// Route::app_post('/{app]', function () {
//     return view('index');
// })->where('app', '.*');
