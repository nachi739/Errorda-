<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Errors extends Model
{
    protected $table = 'errors';
    protected $fillable = [
        "id",
        "start_time",
        "end_time",
        "updated_at",
        "created_at",
    ];

    public function errors()
    {
        return $this->belongsTo(Errors::class);
    }

}

