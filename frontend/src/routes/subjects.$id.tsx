import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/subjects/$id')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/subjects/$id"!</div>;
}
