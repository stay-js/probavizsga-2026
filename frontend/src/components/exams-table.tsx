import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { type Exam } from '@/lib/zod-schemas';

export function ExamsTable({ exams }: { exams: Exam[] }) {
  return (
    <div className="mx-auto my-10 w-full max-w-3xl overflow-hidden rounded-md shadow-sm">
      <Table className="w-full">
        <TableHeader className="bg-red-800">
          <TableRow>
            <TableHead className="p-4 text-left text-sm font-bold text-white uppercase">
              Vizsga
            </TableHead>
            <TableHead className="p-4 text-center text-sm font-bold text-white uppercase">
              Típus
            </TableHead>
            <TableHead className="p-4 text-right text-sm font-bold text-white uppercase">
              Pontszám
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {exams.map((exam, idx) => (
            <TableRow className={cn((idx + 1) % 2 === 0 && 'bg-slate-100')} key={exam.id}>
              <TableCell className="p-4 text-left font-bold text-slate-800">{exam.name}</TableCell>
              <TableCell
                className={cn(
                  'p-4 text-center font-bold',
                  exam.type === 'írásbeli' && 'text-red-800',
                  exam.type === 'szóbeli' && 'text-green-800',
                )}
              >
                {exam.type}
              </TableCell>
              <TableCell className="p-4 text-right text-slate-600">{exam.score} pont</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
