<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ExamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('exams')->insert([
            ['type' => 'írásbeli', 'name' => 'Alap szintaxis és kifejezések', 'score' => 67.2, 'subject_id' => 1],
            ['type' => 'írásbeli', 'name' => 'Ciklusok és elágazások', 'score' => 74.5, 'subject_id' => 1],
            ['type' => 'szóbeli', 'name' => 'Algoritmikus gondolkodás', 'score' => 81.1, 'subject_id' => 1],
            ['type' => 'írásbeli', 'name' => 'Tömbkezelés', 'score' => 59.8, 'subject_id' => 1],
            ['type' => 'szóbeli', 'name' => 'Függvényhívások', 'score' => 76.3, 'subject_id' => 1],
            ['type' => 'írásbeli', 'name' => 'Egyszerű programok írása', 'score' => 72.4, 'subject_id' => 2],
            ['type' => 'írásbeli', 'name' => 'Input-output kezelés', 'score' => 68.9, 'subject_id' => 2],
            ['type' => 'írásbeli', 'name' => 'Hibakeresés', 'score' => 61.5, 'subject_id' => 2],
            ['type' => 'írásbeli', 'name' => 'Ciklusok gyakorlása', 'score' => 77.7, 'subject_id' => 2],
            ['type' => 'írásbeli', 'name' => 'Alap algoritmusok implementálása', 'score' => 83.2, 'subject_id' => 2],
            ['type' => 'írásbeli', 'name' => 'Osztálydiagramok', 'score' => 64.1, 'subject_id' => 3],
            ['type' => 'szóbeli', 'name' => 'Öröklődés és kiterjesztés', 'score' => 79.6, 'subject_id' => 3],
            ['type' => 'írásbeli', 'name' => 'Konstruktorok és destruktorok', 'score' => 58.4, 'subject_id' => 3],
            ['type' => 'szóbeli', 'name' => 'Polimorfizmus alkalmazása', 'score' => 82.9, 'subject_id' => 3],
            ['type' => 'írásbeli', 'name' => 'Encapsulation elvei', 'score' => 71.3, 'subject_id' => 3],
            ['type' => 'írásbeli', 'name' => 'Osztályok implementálása', 'score' => 75.0, 'subject_id' => 4],
            ['type' => 'írásbeli', 'name' => 'Öröklődés gyakorlása', 'score' => 69.2, 'subject_id' => 4],
            ['type' => 'írásbeli', 'name' => 'Interfészek használata', 'score' => 62.8, 'subject_id' => 4],
            ['type' => 'írásbeli', 'name' => 'Kivételkezelés kódban', 'score' => 78.5, 'subject_id' => 4],
            ['type' => 'írásbeli', 'name' => 'Egységtesztelés alapjai', 'score' => 84.7, 'subject_id' => 4],
            ['type' => 'írásbeli', 'name' => 'Lista és verem', 'score' => 66.6, 'subject_id' => 5],
            ['type' => 'szóbeli', 'name' => 'Gráf reprezentációk', 'score' => 80.2, 'subject_id' => 5],
            ['type' => 'írásbeli', 'name' => 'Rendezések összehasonlítása', 'score' => 61.9, 'subject_id' => 5],
            ['type' => 'szóbeli', 'name' => 'Rekurzív algoritmusok', 'score' => 77.5, 'subject_id' => 5],
            ['type' => 'írásbeli', 'name' => 'Hash technikák', 'score' => 70.8, 'subject_id' => 5],
            ['type' => 'írásbeli', 'name' => 'ER modell', 'score' => 73.4, 'subject_id' => 6],
            ['type' => 'szóbeli', 'name' => 'Normalizálási formák', 'score' => 85.1, 'subject_id' => 6],
            ['type' => 'írásbeli', 'name' => 'Összetett lekérdezések', 'score' => 67.3, 'subject_id' => 6],
            ['type' => 'szóbeli', 'name' => 'Indexelési stratégiák', 'score' => 79.0, 'subject_id' => 6],
            ['type' => 'írásbeli', 'name' => 'Tranzakciók kezelése', 'score' => 71.6, 'subject_id' => 6],
            ['type' => 'írásbeli', 'name' => 'SELECT lekérdezések', 'score' => 76.2, 'subject_id' => 7],
            ['type' => 'írásbeli', 'name' => 'JOIN műveletek', 'score' => 69.9, 'subject_id' => 7],
            ['type' => 'írásbeli', 'name' => 'Adatmódosítás', 'score' => 64.4, 'subject_id' => 7],
            ['type' => 'írásbeli', 'name' => 'Táblák létrehozása', 'score' => 81.3, 'subject_id' => 7],
            ['type' => 'írásbeli', 'name' => 'Indexek használata', 'score' => 74.8, 'subject_id' => 7],
            ['type' => 'írásbeli', 'name' => 'Processzek állapotai', 'score' => 62.7, 'subject_id' => 8],
            ['type' => 'szóbeli', 'name' => 'Memóriakezelési modellek', 'score' => 78.9, 'subject_id' => 8],
            ['type' => 'írásbeli', 'name' => 'Lapozás és szegmentálás', 'score' => 69.5, 'subject_id' => 8],
            ['type' => 'szóbeli', 'name' => 'Holtpont kezelése', 'score' => 83.4, 'subject_id' => 8],
            ['type' => 'írásbeli', 'name' => 'Fájlrendszer struktúrák', 'score' => 71.2, 'subject_id' => 8],
            ['type' => 'írásbeli', 'name' => 'Hálózati rétegek', 'score' => 68.6, 'subject_id' => 9],
            ['type' => 'szóbeli', 'name' => 'Csomagkapcsolt hálózatok', 'score' => 82.1, 'subject_id' => 9],
            ['type' => 'írásbeli', 'name' => 'IP címzés', 'score' => 65.7, 'subject_id' => 9],
            ['type' => 'szóbeli', 'name' => 'Hálózati protokollok', 'score' => 79.8, 'subject_id' => 9],
            ['type' => 'írásbeli', 'name' => 'Hibajavító kódok', 'score' => 73.0, 'subject_id' => 9],
            ['type' => 'írásbeli', 'name' => 'Fejlesztési életciklus', 'score' => 70.4, 'subject_id' => 10],
            ['type' => 'szóbeli', 'name' => 'Agilis módszertanok', 'score' => 88.2, 'subject_id' => 10],
            ['type' => 'írásbeli', 'name' => 'Követelményanalízis', 'score' => 66.9, 'subject_id' => 10],
            ['type' => 'szóbeli', 'name' => 'Projektmenedzsment', 'score' => 84.5, 'subject_id' => 10],
            ['type' => 'írásbeli', 'name' => 'Verziókezelési stratégiák', 'score' => 72.1, 'subject_id' => 10],
        ]);
    }
}
