<?php

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

Route::group([
  'middleware' => 'auth:api'
], function() {
  Route::get('/export', 'ExportController@index');
  Route::view('/dashboard/{vue?}', 'dashboard')->where('vue', '[\/\w\.-]*');
});

Route::view('/{vue?}', 'app')->where('vue', '[\/\w\.-]*');
