import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, useRouter } from '@tanstack/react-router';
import { toast } from 'sonner';

import { ExamForm } from '@/components/exam-form';
import { createExam } from '@/lib/exams';
import { getSubjects } from '@/lib/subjects';

export const Route = createFileRoute('/exams/create')({
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouter();

  const { data: subjects } = useSuspenseQuery(getSubjects());

  const { mutate } = useMutation({
    ...createExam(),
    onError: () => toast.error('Váratlan hiba történt a vizsga létrehozása közben! Próbálja újra!'),
    onSuccess: (_, input) => {
      router.navigate({
        params: {
          id: input.subject_id.toString(),
        },
        to: '/subjects/$id',
      });
    },
  });

  return (
    <main className="flex flex-col items-center gap-8 py-8">
      <h1 className="text-center text-2xl font-bold text-slate-800">Új vizsga hozzáadása</h1>

      <ExamForm createExam={mutate} subjects={subjects?.data ?? []} />
    </main>
  );
}
