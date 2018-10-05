<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class Role
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $roles = [])
    {
        if (!Auth::check()) {
            return redirect('/login');
        }

        $User = Auth::user();

        if ($User->isAdmin()) {
            return $next($request);
        }

        foreach ($role as $roles) {
            if ($User->hasRole($role)) {
                return $next($request);
            }
        }

        return redirect('/login');
    }
}
