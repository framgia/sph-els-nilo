<?php

namespace App\Http\Controllers;

use App\Models\Log;
use Illuminate\Http\Request;

class LogController extends Controller
{
    public function index() {
        return Log::all();
    }

    public function store(Request $request) {
        $request->validate([
            'userId' => ['required'],
            'categoryId' => ['required'],
            'learned' => ['required'],
            'maxItems' => ['required']
        ]);
        $logs = Log::create([
            'userId' => $request['userId'],
            'categoryId' => $request['categoryId'],
            'learned' => json_encode($request['learned']),
            'maxItems' => $request['maxItems']
        ]);
        return $logs;
    }

    public function update(Request $request) {
        $request->validate([
            'userId' => ['required']
        ]);

        $result = Log::where('userId', $request['userId'])->get('learned');

        return $result;
    }
}
