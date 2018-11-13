<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
      return [
        'id' => $this->id,
        'name' => $this->name,
        'surname' => $this->surname,
        'phone' => $this->phone,
        'email' => $this->email,
        'group_id' => $this->group_id,
        // 'created_at' => $this->created_at,
      ];
    }
}
