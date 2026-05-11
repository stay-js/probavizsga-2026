import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { FormInput, FormSelect } from '@/components/form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { type CreateExamData, type SubjectWithExams } from '@/lib/zod-schemas';

import { SelectGroup, SelectItem, SelectLabel } from './ui/select';

type ExamFormProps = {
  createExam: (data: CreateExamData) => void;
  subjects: SubjectWithExams[];
};

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { error: 'A név megadása kötelező!' })
    .max(100, { error: 'A név hossza maximum 100 karakter lehet!' }),
  score: z
    .string()
    .trim()
    .min(1, { error: 'A pontszám megadása kötelező!' })
    .refine(
      (val) => {
        const num = Number(val);

        if (isNaN(num)) return false;
        return num >= 0 && num <= 100;
      },
      {
        error: 'A pontszám csak 0 és 100 közötti szám lehet',
      },
    ),
  type: z.string().trim().min(1, { error: 'Válasszon típust!' }).max(50),

  subject_id: z
    .string()
    .min(1, { error: 'Válasszon tárgyat!' })
    .refine((val) => {
      const num = Number(val);

      return Number.isInteger(num) && num >= 1;
    }),
});

type FormSchema = z.infer<typeof formSchema>;

const defaultValues = {
  name: '',
  score: '',
  type: '',

  subject_id: '',
};

export function ExamForm({ createExam, subjects }: ExamFormProps) {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<FormSchema>({
    defaultValues,
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    createExam({
      ...data,
      score: Number(data.score),
      subject_id: Number(data.subject_id),
    });
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Vizsgaadatok rögzítése</CardTitle>
      </CardHeader>

      <CardContent>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <FormSelect
              control={control}
              label="Tárgy"
              name="subject_id"
              placeholder="Válasszon egy tárgyat..."
            >
              <SelectGroup>
                <SelectLabel>Tárgyak</SelectLabel>

                {subjects.map((subject) => (
                  <SelectItem value={subject.id.toString()}>
                    {subject.name} ({subject.type})
                  </SelectItem>
                ))}
              </SelectGroup>
            </FormSelect>

            <FormInput
              control={control}
              label="Vizsga neve"
              name="name"
              placeholder="Pl.: Zárthelyi dolgozat"
            />

            <FormSelect
              control={control}
              label="Vizsga típusa"
              name="type"
              placeholder="Válasszon egy típust..."
            >
              <SelectGroup>
                <SelectLabel>Típusok</SelectLabel>

                <SelectItem value="írásbeli">Írásbeli</SelectItem>
                <SelectItem value="szóbeli">Szóbeli</SelectItem>
              </SelectGroup>
            </FormSelect>

            <FormInput control={control} label="Elért pontszám" name="score" placeholder="0.0" />
          </div>

          <Button className="bg-red-800 hover:bg-red-900" disabled={isSubmitting} type="submit">
            Adatok mentése
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
