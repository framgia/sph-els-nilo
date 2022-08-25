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

    // Addition of Character
    public function store(Request $request)
    {
        $request->validate([
            'categoryId' => ['required'],
            'character' => ['required', 'unique:lessons'],
        ]);
        $character = Lesson::create([
            'categoryId' => $request['categoryId'],
            'character' => $request['character'],
        ]);

        return response()->json([
            'character' => $character,
            'message' => 'Lesson Created',
        ]);
    }

    // Fetch a Character
    public function show($id)
    {
        $choice =[];
        $character = Lesson::where('categoryId', $id)->get();

        foreach ($character as $choices) {
            array_push($choice, $choices->word);
        }

        return response()->json([
            'character' => $character,
            'choices' => $choice,
            'message' => 'Character Fetched',
        ]);
    }

    // Delete a Character
    public function destroy($id)
    {
        Lesson::destroy($id);

        return response()->json([
            'message' => 'Lesson Deleted',
        ]);
    }
}
