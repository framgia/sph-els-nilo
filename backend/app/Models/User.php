<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class User extends Model
{
    use HasFactory, HasApiTokens;

<<<<<<< HEAD
    protected $guarded = [];
=======
    protected $fillable =
    [
        'name', 'password', 'email', 'isAdmin'
    ];
>>>>>>> a22c15613727bb7d56e3403da54672634d6f5e18

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime'
    ];
}
