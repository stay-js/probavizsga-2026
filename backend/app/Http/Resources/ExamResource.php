<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ExamResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
          'id' => $this->id,
          'type' => $this->type,
          'name' => $this->name,
          'score' => $this->score,
          'subject' => new SubjectResource($this->whenLoaded('subject')),
        ];
    }
}
