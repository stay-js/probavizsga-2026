import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

import { getSubjects } from '@/lib/subjects';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: subjects } = useSuspenseQuery(getSubjects());

  return (
    <div>
      {subjects?.data.map((subject) => (
        <div key={subject.id}>{subject.name}</div>
      ))}
    </div>
  );
}
