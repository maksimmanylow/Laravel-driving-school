<?php

use Illuminate\Http\Request;

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

Route::group([
  'prefix' => 'auth'
], function () {

  Route::post('login', 'Auth\AuthController@login');
  Route::post('signup', 'Auth\AuthController@signup');
  Route::get('signup/activate/{token}', 'Auth\AuthController@signupActivate');
  Route::get('recaptcha/{token}', 'Auth\AuthController@verifyRecaptcha');

  Route::group([
    'middleware' => 'auth:api'
  ], function() {
    Route::get('logout', 'Auth\AuthController@logout');
    Route::get('user', 'Auth\AuthController@user');
  });
});


Route::group([
  'namespace' => 'Auth',
  'prefix' => 'password'
], function () {
  Route::post('create', 'PasswordResetController@create');
  Route::get('find/{token}', 'PasswordResetController@find');
  Route::post('reset', 'PasswordResetController@reset');
});


Route::group([
  'middleware' => 'auth:api'
], function() {
  Route::apiResource('group', 'API\GroupController');
  Route::apiResource('user', 'API\UserController');
});

Route::get('public-group', 'API\PublicGroupController@index');
