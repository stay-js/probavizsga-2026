import { mutationOptions, queryOptions } from '@tanstack/react-query';
import { z } from 'zod';

import { createApiResponseSchema, GET, POST } from '@/lib/api';
import { type CreateExamData, examWithSubjectSchema } from '@/lib/zod-schemas';

const examsResponse = createApiResponseSchema(z.array(examWithSubjectSchema));
const examResponse = createApiResponseSchema(examWithSubjectSchema);

export function createExam() {
  return mutationOptions({
    mutationFn: (data: CreateExamData) => POST('/api/exams', data, examResponse),
  });
}

export function getExams() {
  return queryOptions({
    queryFn: () => GET('/api/exams', examsResponse),
    queryKey: ['exams', 'index'],
  });
}
