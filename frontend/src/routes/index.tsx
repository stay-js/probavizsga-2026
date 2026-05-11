import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

import { SubjectCard } from '@/components/subject-card';
import { getSubjects } from '@/lib/subjects';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: subjects } = useSuspenseQuery(getSubjects());

  return (
    <main className="py-8">
      <h1 className="mb-4 text-center text-2xl font-bold text-slate-800">Tárgyak</h1>

      <div className="grid grid-cols-1 gap-5 p-8 md:grid-cols-2 lg:grid-cols-4">
        {subjects?.data.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </main>
  );
}
