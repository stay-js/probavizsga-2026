<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreExamRequest;
use App\Http\Resources\ExamResource;
use App\Models\Exam;
use Illuminate\Http\Resources\Json\JsonResource;
use Symfony\Component\HttpFoundation\JsonResponse;

class ExamController extends Controller
{
    public function index(): JsonResource
    {
        $exams = Exam::all()->load('subject');

        return ExamResource::collection($exams);
    }

    public function store(StoreExamRequest $request): JsonResponse
    {
        $data = $request->validated();
        $exam = Exam::create($data);

        return response()->json([
            'data' => new ExamResource($exam->load('subject')),
        ], 201);
    }
}
