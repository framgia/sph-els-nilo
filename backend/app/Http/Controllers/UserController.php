<?php

namespace App\Http\Controllers;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index() {
        return User::all();
    }
    public function store(Request $request) {

        $fields = $request->validate(
            [
                'username' => 'required|string',
                'password' => 'required|string|confirmed',
                'email' => 'required|string|unique:users,email'
            ]
            );
        $user = User::create([
            'username' => $fields['username'],
            'password' => $fields['password'],
            'email' => $fields['email']
        ]);

        $token = $user->createToken('myapptoken')->plainTextToken;
        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response()->json($response, 201);

    }

    public function show(Request $request){
        $request->validate(
            [
                'username' => 'required',
                'password' => 'required'
            ]
            );
        $res = User::where('username', $request->username);
        if (!($res->count() > 0)) {
            return 'Username Dont Exist';
        }
        if (strcmp($res->first()->password, $request->password)){
            return 'Password Dont match';
        };
        return "Welcome";
    }
}
