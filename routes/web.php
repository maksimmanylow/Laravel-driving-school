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

// Route::get('/', 'SiteController@index');
// Route::get('/sign-up', 'SiteController@sign-up');
// Route::get('/news', 'SiteController@news');
// Route::get('/login', 'SiteController@login');

// Route::middleware('auth')->group(function() {
//   Route::get('/', 'DashboardController@index');
//   Route::get('/user', 'DashboardController@user');
//   Route::get('/user/{id}', 'DashboardController@user');
// });

Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');
Route::get('/export', 'ExportController@index'); //->middleware('admin');

// Route::get('/site/groups', 'SiteController@groups');

// Route::prefix('dashboard')->group(function() {})
Route::view('/dashboard/{vue?}', 'dashboard')->where('vue', '[\/\w\.-]*');
Route::view('/{vue?}', 'index')->where('vue', '[\/\w\.-]*');
