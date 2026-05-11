import { Link } from '@tanstack/react-router';

import { type Subject } from '@/lib/zod-schemas';

export function SubjectCard({ subject }: { subject: Subject }) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="h-1.5 w-full bg-slate-800" />

      <div className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-xl leading-snug font-bold tracking-tight text-slate-900">
              {subject.name}
            </h3>

            <div className="mt-2">
              <span className="inline-flex items-center rounded-md border border-indigo-100 bg-indigo-50 px-2.5 py-0.5 text-[10px] font-bold tracking-widest text-indigo-700 uppercase">
                {subject.type}
              </span>
            </div>
          </div>

          <div className="flex min-w-12.5 flex-col items-center justify-center rounded-lg border border-slate-200 bg-slate-50 p-2">
            <span className="mb-1 text-[10px] leading-none font-black text-slate-400 uppercase">
              Kredit
            </span>

            <span className="text-lg leading-none font-bold text-slate-800">{subject.credits}</span>
          </div>
        </div>

        <div className="mt-auto">
          <Link
            className="block w-full rounded-xl bg-slate-900 px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-indigo-600"
            params={{ id: subject.id.toString() }}
            to="/subjects/$id"
          >
            Tárgy részletei
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-2 -bottom-4 opacity-[0.03] select-none">
        <span className="text-8xl font-black italic" />
      </div>
    </div>
  );
}
