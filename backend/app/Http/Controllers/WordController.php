<?php

namespace App\Http\Controllers;

use App\Models\Word;
use Illuminate\Http\Request;

class WordController extends Controller
{
    public function index()
    {
        return Word::all();
    }

    public function create(Request $request)
    {

        $fields = $request->validate([
            'lesson_id' => ['required', 'max:255'],
            'choices' => ['required', 'max:255'],
            'is_correct' => ['required', 'max:255'],
        ]);

        $user = Word::create([
            'title' => $fields['title'],
            'description' => $fields['description'],
        ]);

        $response = [
            'status' => 'Word Created!',
            'user' => $user,
        ];

        return response()->json($response, 201);
    }

    public function update(Request $request, $id)
    {

        $request->validate([
            'lesson_id' => ['required', 'max:255'],
            'choices' => ['required', 'max:255'],
            'is_correct' => ['required', 'max:255'],
        ]);

        $user = Word::findOrFail($id);
        $user->update($request->all());
        $response = [
            'status' => 'Word Updated!',
            'user' => $user,
        ];

        return response()->json($response, 201);
    }

    public function destroy($id)
    {

        Word::destroy($id);
        $response = [
            'status' => 'Word Deleted',
        ];

        return response()->json($response, 201);
    }
}
