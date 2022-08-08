<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        return Category::all();
    }

    // Create a Category
    public function store(Request $request)
    {
        $request->validate([
            'title' => ['required', 'unique:categories', 'max:225'],
            'description' => ['required'],
        ]);
        Category::create([
            'title' => $request['title'],
            'description' => $request['description'],
        ]);

        return response()->json(['message' => 'Category Created!'], 201);
    }

    // Display Description
    public function show(Request $request)
    {
        $request->validate([
            'title' => ['required'],
        ]);

        return Category::where('title', $request->title)->first()->description;
    }

    // Edit the Category
    public function update(Request $request)
    {
        $request->validate([
            'title' => ['required'],
            'description' => ['required'],
        ]);
        Category::where('title', $request->title)->first()->update($request->all());

        return response()->json(['message' => 'Category Updated!'], 201);
    }

    // Deletion of Category
    public function destroy(Request $request)
    {
        Category::destroy(Category::where('title', $request->title)->first('id')->id);

        return response()->json(['message' => 'Category Deleted'], 201);
    }
}
