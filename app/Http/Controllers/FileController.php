<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileController extends Controller {
	public function __construct()
	{
		$this->middleware('auth');
	}

	public function getFile($filename)
	{
		return response()->file(storage_path($filename));
  }

  public function getCSS($filename)
	{

		return response()->file(storage_path($filename))->header('Content-Type', 'text/css');
  }

  public function getJS($filename)
	{

		return response()->file(storage_path($filename))->header('Content-Type', 'application/javascript; charset=utf-8');
  }
}
