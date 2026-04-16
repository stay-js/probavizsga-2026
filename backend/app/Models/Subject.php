<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Subject extends Model
{
    public $timestamps = true;

    protected $fillable = [
      'name',
      'credits',
      'type',
    ];

    public function exams(): HasMany
    {
        return $this->hasMany(Subject::class);
    }
}
