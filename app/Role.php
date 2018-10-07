<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
  const ROLE_ADMIN = 'admin';
  const roles = [self::ROLE_ADMIN];
    //
}
