import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, Link } from '@tanstack/react-router';
import { AlertTriangle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';
import { getSubject } from '@/lib/subjects';

export const Route = createFileRoute('/subjects/$id')({
  component: RouteComponent,
  errorComponent: () => (
    <div className="grid h-full min-h-screen place-content-center">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <AlertTriangle />
          </EmptyMedia>
          <EmptyTitle>Nem található</EmptyTitle>
          <EmptyDescription>A keresett tantárgy nem található!</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button asChild>
            <Link to="/">Vissza a főoldalra</Link>
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  ),
});

function RouteComponent() {
  const { id } = Route.useParams();

  const { data: subject } = useSuspenseQuery(getSubject(id));

  if (!subject) throw new Error('No subject');

  return <div>{subject.data.name}</div>;
}
