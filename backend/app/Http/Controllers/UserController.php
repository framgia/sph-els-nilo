<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function store(Request $request)
    {
        $fields = $request->validate([
            'name' => ['required', 'unique:users', 'max:255'],
            'password' => ['required', 'confirmed'],
            'email' => ['required', 'unique:users'],
            'isAdmin' => [false]
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'password' => bcrypt($fields['password']),
            'email' => $fields['email']
        ]);

        $token = $user->createToken('UserSignUpToken')->plainTextToken;
        $response = [
            'user' => $user,
            'token' => $token,
        ];

        return response()->json($response);
    }

    public function update(Request $request)
    {
        $field = $request->validate([
            'name' => ['required'],
            'password' => ['required'],
        ]);
        $res = User::where('name', $request->name)->first();
        if (!$res || !Hash::check($field['password'], $res->password)) {
            return response([
                'message' => 'Mismatched Credentials',
            ], 401);
            }

        $token = $res->createToken('UserLogInToken')->plainTextToken;
        $response = [
            'user' => $res,
            'token' => $token,
            'message' => 'Logged In!',
        ];
        return response()->json($response);
    }

}
