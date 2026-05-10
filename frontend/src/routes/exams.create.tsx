import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

import { getSubjects } from '@/lib/subjects';

export const Route = createFileRoute('/exams/create')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: subjects } = useSuspenseQuery(getSubjects());

  return <div>Hello "/exams/crate"!</div>;
}
