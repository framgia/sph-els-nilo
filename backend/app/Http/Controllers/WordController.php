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
        ]);

        $word = Word::create([
            'lessonId' => $fields['lessonId'],
            'choices' => json_encode($fields['choices']),
        ]);

        return response()->json([
            'word' => $word,
            'message' => 'Word Created!',
        ]);
    }

    // Fetch the Choices
    public function show(Request $request)
    {
        $request->validate([
            'lessonId' => ['required'],
        ]);
        $choices = Word::where('lessonId', $request->lessonId)->get('choices');

        return response()->json([
            'choices' => $choices,
            'message' => 'Choices Fetched',
        ]);
    }

    // Update Choices
    public function update(Request $request, $id)
    {
        $request->validate([
            'lessonId' => ['required'],
            'choices' => ['required'],
        ]);
        $choices = Word::findOrFail($id)->update($request->all());

        return response()->json([
            'choices' => $choices,
            'status' => 'Word Updated!',
        ]);
    }

    // Delete
    public function destroy($id)
    {
        Word::destroy($id);

        return response()->json([
            'status' => 'Word Deleted',
        ]);
    }
}
