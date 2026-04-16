<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Exam extends Model
{
    public $timestamps = true;

    protected $fillable = [
      'type',
      'name',
      'score',
      'subject_id',
    ];

    public function subject(): BelongsTo
    {
        return $this->belongsTo(Subject::class);
    }
}
