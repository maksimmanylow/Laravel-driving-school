<?php

namespace App\Http\Controllers\API;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;

class UserController extends Controller
{
  const PAGE_SIZE = 6;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
      $query = $request->query('q');

      return UserResource::collection(User::where('name', 'like', "%$query%")
      ->orWhere('surname', 'like', "%$query%")
      ->orWhere('phone', 'like', "%$query%")
      ->orderBy('created_at', 'desc')
      ->paginate(self::PAGE_SIZE));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $User = User::create($request->all());

      return new UserResource($User);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $User)
    {
        return new UserResource($User);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $User)
    {
      $User->update($request->all());

      return new UserResource($User);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $User)
    {
      $User->delete();

      return response()->json(null, 204);
    }
}
