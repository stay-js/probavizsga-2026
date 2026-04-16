<?php

use App\Http\Controllers\ExamController;
use App\Http\Controllers\SubjectController;
use Illuminate\Support\Facades\Route;

Route::apiResource('subjects', SubjectController::class)
    ->only(['index', 'show']);

Route::apiResource('exams', ExamController::class)
    ->only(['index', 'store']);
