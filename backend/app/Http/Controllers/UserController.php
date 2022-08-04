<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
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
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'password' => bcrypt($fields['password']),
            'email' => $fields['email'],
        ]);

        $token = $user->createToken('myapptoken')->plainTextToken;
        $response = [
            'user' => $user,
            'token' => $token,
        ];

        return response()->json($response, 201);
    }

    public function show(Request $request)
    {
        $field = $request->validate([
            'email' => ['required'],
            'password' => ['required'],
        ]);

        $res = User::where('email', $request->email)->first();
        if (!$res || !Hash::check($field['password'], $res->password)) {
            return response([
                'message' => 'Bad Creds',
            ], 401);
        }

        $token = $res->createToken('myapptoken')->plainTextToken;
        $response = [
            'user' => $res,
            'token' => $token,
        ];
        return response()->json($response, 201);
    }
}
