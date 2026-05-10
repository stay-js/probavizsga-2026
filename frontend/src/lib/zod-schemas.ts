import { z } from 'zod';

export const subjectSchema = z.object({
  id: z.number().int().positive(),

  credits: z.number().int().min(0),
  name: z.string().min(1).max(100),
  type: z.string().min(1).max(50),
});
export type Subject = z.infer<typeof subjectSchema>;

export const examSchema = z.object({
  id: z.number().int().positive(),

  name: z.string().min(1).max(150),
  score: z.number().min(0).max(100),
  type: z.string().min(1).max(50),
});
export type Exam = z.infer<typeof examSchema>;

export const examWithSubjectSchema = examSchema.extend({
  subject: subjectSchema,
});
export type ExamWithSucject = z.infer<typeof examWithSubjectSchema>;

export const subjectWithExamsSchema = subjectSchema.extend({
  exams: z.array(examSchema),
});
export type SubjectWithExams = z.infer<typeof subjectWithExamsSchema>;

export const createExamSchema = z.object({
  name: z.string().min(1).max(150),
  score: z.number().min(0).max(100),
  type: z.string().min(1).max(50),

  subject_id: z.number().int().positive(),
});
export type CreateExamData = z.infer<typeof createExamSchema>;
