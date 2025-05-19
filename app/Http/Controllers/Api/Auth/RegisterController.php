<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BuUser;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        // ✅ Validate input
        $request->validate([
            'name'     => 'required|string|max:255',
            'password' => 'required|string|min:6',
        ]);

        // ✅ Insert into bu_user table
        $user = BuUser::create([
            'bu_name'   => $request->name,
            'bu_passwd' => Hash::make($request->password),
        ]);

        // ✅ Return success response
        return response([
            'message' => 'User registered successfully',
            'user'    => $user,
        ], 201);
    }
}
