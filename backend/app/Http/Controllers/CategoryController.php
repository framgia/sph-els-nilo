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

    public function create(Request $request)
    {

        $fields = $request->validate([
            'title' => ['required', 'unique:categories', 'max:255'],
            'description' => ['required', 'max:255'],
        ]);

        $user = Category::create([
            'title' => $fields['title'],
            'description' => $fields['description'],
        ]);

        $response = [
            'user' => $user,
            'status' => 'Category Created!',
        ];

        return response()->json($response, 201);
    }

    public function update(Request $request, $id)
    {

        $request->validate([
            'title' => ['required', 'unique:categories', 'max:255'],
            'description' => ['required', 'max:255'],
        ]);

        $user = Category::findOrFail($id);
        $user->update($request->all());
        $response = [
            'user' => $user,
            'status' => 'Category Updated',
        ];

        return response()->json($response, 201);
    }

    public function destroy($id)
    {

        Category::destroy($id);
        $response = [
            'user' => 'Category Deleted',
        ];

        return response()->json($response, 201);
    }
}
