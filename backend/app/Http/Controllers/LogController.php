<?php

namespace App\Http\Controllers;

use App\Models\Log;
use Illuminate\Http\Request;

class LogController extends Controller
{
    public function index()
    {
        return Log::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'userId' => ['required'],
            'word' => ['required'],
            'answer' => ['required'],
        ]);
        $logs = Log::create([
            'userId' => $request['userId'],
            'word' => $request['word'],
            'answer' => $request['answer'],
        ]);
        return $logs;

    }
}
