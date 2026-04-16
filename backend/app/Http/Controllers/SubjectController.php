<?php

namespace App\Http\Controllers;

use App\Http\Resources\SubjectResource;
use App\Models\Subject;
use Illuminate\Http\Resources\Json\JsonResource;

class SubjectController extends Controller
{
    public function index(): JsonResource
    {
        $subjects = Subject::all()->load('exams');

        return SubjectResource::collection($subjects);
    }

    public function show(Subject $subject): JsonResource
    {
        return new SubjectResource($subject->load('exams'));
    }
}
