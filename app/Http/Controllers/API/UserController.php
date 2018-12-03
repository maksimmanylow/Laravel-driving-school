<?php

namespace App\Http\Controllers\API;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    const PAGE_SIZE = 12;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $queryString = $request->query('q');
        $groupId = (int) $request->query('group_id');

        $Query = DB::table('users');

        if ($groupId) {
            $Query->where('group_id', $groupId);
        }

        if ($queryString) {
            $Query->where(function ($query) use ($queryString) {
                $query->orWhere('name', 'like', "%$queryString%")
                ->orWhere('surname', 'like', "%$queryString%")
                ->orWhere('phone', 'like', "%$queryString%")
                ->orWhere('email', 'like', "%$queryString%");
            });
        }

        return UserResource::collection($Query->orderBy('created_at', 'desc')->paginate(self::PAGE_SIZE));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $request->validate([
        'name' => 'required|string',
        'phone' => 'required|string',
        'email' => 'string|email|unique:users',
        'password' => 'required|string|confirmed'
      ]);
      $user = new User([
          'name' => $request->name,
          'email' => $request->email,
          'password' => bcrypt($request->password),
          'phone' => $request->phone
      ]);
      $user->save();
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
