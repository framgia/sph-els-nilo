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

    // Create Choices
    public function store(Request $request)
    {
        $fields = $request->validate([
            'lessonId' => ['required'],
            'choices' => ['required'],
            'isCorrect' => ['required'],
        ]);
        Word::create([
            'lessonId' => $fields['lessonId'],
            'choices' => $fields['choices'],
            'isCorrect' => $fields['isCorrect'],
        ]);

        return response()->json(['message' => 'Word Created!'], 201);
    }

    // Fetch the Choices
    public function show(Request $request)
    {
        $request->validate([
            'lessonId' => ['required'],
        ]);

        return Word::where('lessonId', $request->lessonId)->get('choices')->toJson();
    }

    // Update Choices
    public function update(Request $request, $id)
    {
        $request->validate([
            'lessonId' => ['required', 'max:255'],
            'choices' => ['required', 'max:255'],
            'isCorrect' => ['required', 'max:255'],
        ]);
        Word::findOrFail($id)->update($request->all());

        return response()->json(['status' => 'Word Updated!'], 201);
    }

    // Delete
    public function destroy($id)
    {
        Word::destroy($id);

        return response()->json(['status' => 'Word Deleted'], 201);
    }
}
