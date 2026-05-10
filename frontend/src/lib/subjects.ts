import { queryOptions } from '@tanstack/react-query';
import { z } from 'zod';

import { createApiResponseSchema, GET } from '@/lib/api';
import { subjectWithExamsSchema } from '@/lib/zod-schemas';

const subjectResponse = createApiResponseSchema(subjectWithExamsSchema);
const subjectsResponse = createApiResponseSchema(z.array(subjectWithExamsSchema));

export function getSubject(id: string) {
  return queryOptions({
    queryFn: () => GET(`/api/subjects/${id}`, subjectResponse),
    queryKey: ['subjects', 'show', { id }],
  });
}

export function getSubjects() {
  return queryOptions({
    queryFn: () => GET('/api/subjects', subjectsResponse),
    queryKey: ['subjects', 'index'],
  });
}
