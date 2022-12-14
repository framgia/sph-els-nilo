<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        return Category::paginate(5);
    }

    // Create a Category
    public function store(Request $request)
    {
        $request->validate([
            'title' => ['required', 'unique:categories', 'max:225'],
            'description' => ['required'],
        ]);
        $category = Category::create([
            'title' => $request['title'],
            'description' => $request['description'],
        ]);

        return response()->json([
            'category' => $category,
            'message' => 'Category Created!',
        ]);
    }

    // Display Description
    public function show($id)
    {
        $category = Category::findOrFail($id);

        return response()->json([
            'category' => $category,
            'message' => 'Category Shown',
        ]);
    }

    // Edit the Category
    public function update(Request $request)
    {
        $request->validate([
            'title' => ['required'],
            'description' => ['required'],
        ]);
        $category = Category::where('title', $request->title)->first();
        $category->update($request->all());

        return response()->json([
            'category' => $category,
            'message' => 'Category Updated!',
        ]);
    }

    // Deletion of Category
    public function destroy($id)
    {
        Category::destroy($id);

        return response()->json([
            'message' => 'Category Deleted'
        ]);
    }
}
