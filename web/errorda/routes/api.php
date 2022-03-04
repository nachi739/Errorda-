<?php

use App\Http\Controllers\API\ErrorsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/errors', [ErrorsController::class, 'index']);
// Route::app_post('errors', [ErrorsController::class, 'api']);
Route::post('/errors', [ErrorsController::class, 'api']);
