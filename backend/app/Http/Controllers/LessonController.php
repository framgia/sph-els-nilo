<?php

namespace App\Http\Controllers;

use App\Models\Lesson;
use Illuminate\Http\Request;

class LessonController extends Controller
{
    public function index()
    {
        return Lesson::all();
    }

    public function create(Request $request)
    {
        $fields = $request->validate([
            'category_id' => ['required'],
            'character' => ['required', 'unique:lessons'],
        ]);

        $user = Lesson::create([
            'category_id' => $fields['category_id'],
            'character' => $fields['character'],
        ]);

        $response = [
            'user' => $user,
            'status' => 'Lesson Created',
        ];

        return response()->json($response, 201);
    }

    public function update(Request $request, $id)
    {

        $request->validate([
            'category_id' => ['required', 'max:255'],
            'character' => ['required', 'max:255'],
        ]);

        $user = Lesson::findOrFail($id);
        $user->update($request->all());
        $response = [
            'user' => $user,
            'status' => 'Lesson Updated',
        ];

        return response()->json($response, 201);
    }

    public function destroy($id)
    {

        Lesson::destroy($id);
        $response = [
            'user' => 'Lesson Deleted',
        ];

        return response()->json($response, 201);
    }
}
