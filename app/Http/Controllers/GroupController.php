<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use app\Group;
use App\Http\Resources\GroupResource;

class GroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return GroupResource::collection(Group);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $group = Group::create([
        'name' => $request->name,
        'start_at' => $request->start_at,
        'timetable' => $request->timetable,
        'hours_start_at' => $request->hours_start_at,
        'hours_finish_at' => $request->hours_finish_at,
        'status' => $request->status,
        'category' => $request->category,
        'price' => $request->price,
        'price_for_students' => $request->price_for_students,
        'is_active' => $request->is_active,
      ]);

        return new GroupResource($group);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Group $Group)
    {
        return new GroupResource($Group);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Group $Group)
    {
        $Group->update($request->only([
        'name',
        'start_at',
        'timetable',
        'hours_start_at',
        'hours_finish_at',
        'status',
        'category',
        'price',
        'price_for_students',
        'is_active'
      ]));

        return new GroupResource($Group);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function destroy(Group $Group)
    {
      $Group->delete();

      return response()->json(null, 204);
    }
}
