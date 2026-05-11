import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

import { SubjectCard } from '@/components/card';
import { getSubjects } from '@/lib/subjects';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: subjects } = useSuspenseQuery(getSubjects());

  return (
    <main className="flex flex-col gap-4 py-12">
      <h1 className="text-center text-3xl font-bold">Tárgyak</h1>

      <div className="grid grid-cols-1 gap-5 p-8 md:grid-cols-2 lg:grid-cols-4">
        {subjects?.data.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </main>
  );
}
