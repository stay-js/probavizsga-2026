<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('subjects')->insert([
            [
                'id' => 1,
                'name' => 'Programozás alapjai',
                'credits' => 6,
                'type' => 'előadás',
                'created_at' => null,
                'updated_at' => null,
            ],
            [
                'id' => 3,
                'name' => 'Objektumorientált programozás',
                'credits' => 5,
                'type' => 'előadás',
                'created_at' => null,
                'updated_at' => null,
            ],
            [
                'id' => 4,
                'name' => 'Objektumorientált programozás',
                'credits' => 0,
                'type' => 'labor',
                'created_at' => null,
                'updated_at' => null,
            ],
            [
                'id' => 5,
                'name' => 'Adatszerkezetek és algoritmusok',
                'credits' => 6,
                'type' => 'előadás',
                'created_at' => null,
                'updated_at' => null,
            ],
            [
                'id' => 6,
                'name' => 'Adatbázisrendszerek',
                'credits' => 5,
                'type' => 'előadás',
                'created_at' => null,
                'updated_at' => null,
            ],
            [
                'id' => 7,
                'name' => 'Adatbázisrendszerek',
                'credits' => 0,
                'type' => 'labor',
                'created_at' => null,
                'updated_at' => null,
            ],
            [
                'id' => 8,
                'name' => 'Operációs rendszerek',
                'credits' => 5,
                'type' => 'előadás',
                'created_at' => null,
                'updated_at' => null,
            ],
            [
                'id' => 9,
                'name' => 'Számítógép-hálózatok',
                'credits' => 4,
                'type' => 'előadás',
                'created_at' => null,
                'updated_at' => null,
            ],
            [
                'id' => 10,
                'name' => 'Szoftverfejlesztési módszertanok',
                'credits' => 3,
                'type' => 'szeminárium',
                'created_at' => null,
                'updated_at' => null,
            ],
        ]);

        DB::table('subjects')->insert([
            [
                'id' => 2,
                'name' => 'Programozás alapjai',
                'type' => 'labor',
                'created_at' => null,
                'updated_at' => null,
            ],
        ]);
    }
}
