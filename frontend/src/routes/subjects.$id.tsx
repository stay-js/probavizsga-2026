import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, Link } from '@tanstack/react-router';
import { AlertTriangle } from 'lucide-react';

import { ExamsTable } from '@/components/exams-table';
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

  return (
    <main className="p-8 text-center">
      <div className="mx-auto mb-4 flex w-fit items-center gap-4">
        <h1 className="text-2xl font-bold text-red-800">{subject.data.name}</h1>

        <Link
          className="my-2 rounded-lg bg-red-800 p-2 text-white transition-colors hover:bg-red-900 hover:text-white"
          to="/exams/create"
        >
          Új vizsga hozzáadása
        </Link>
      </div>

      <ExamsTable exams={subject.data.exams} />
    </main>
  );
}
