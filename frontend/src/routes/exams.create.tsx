import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/exams/create')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/exams/crate"!</div>;
}
