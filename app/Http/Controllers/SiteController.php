<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Group;

class SiteController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     * @return Response
     */
    public function index()
    {
      $Groups = Group::where('status', '=', Group::STATUS_OPENED)->get();

      return view('site.index', ['Groups' => $Groups]);
    }

    public function groups()
    {
      $Groups = Group::where('status', '=', Group::STATUS_OPENED)->get();

      return view('site.groups', ['Groups' => $Groups]);
    }
}
