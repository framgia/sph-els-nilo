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
        Lesson::create([
            'categoryId' => $request['categoryId'],
            'character' => $request['character'],
        ]);

        return response()->json(['message' => 'Lesson Created'], 201);
    }

    // Fetch a Character
    public function show(Request $request)
    {
        $request->validate([
            'categoryId' => ['required'],
        ]);

        return response()->json(Lesson::where('categoryId', $request->categoryId)->get('character'), 201);
    }

    // Delete a Character
    public function destroy($id)
    {
        Lesson::destroy($id);

        return response()->json(['message' => 'Lesson Deleted'], 201);
    }
}
