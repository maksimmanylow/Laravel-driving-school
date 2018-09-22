<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    const CATEGORY_B = 0;
    const CATEGORY_BC = 1;
    public static $weekdays = [
        ['name' => 'Пн'],
        ['name' => 'Вт'],
        ['name' => 'Ср'],
        ['name' => 'Чт'],
        ['name' => 'Пт'],
        ['name' => 'Сб'],
        ['name' => 'Вс'],
    ];
    public static $categories = [
        0 => 'B',
        1 => 'BC',
    ];
    const STATUS_OPENED = 1;
    const STATUS_CLOSED = 2;
    const STATUS_ON_THE_GO = 3;
    const STATUS_FULL = 4;
    const STATUS_FINISHING = 5;
    const TRANSMISSION_MT = 1;
    const TRANSMISSION_AT = 2;
    public static $transmissions = [
        self::TRANSMISSION_MT => 'Механика',
        self::TRANSMISSION_AT => 'Автомат',
    ];
    public static $statuses = [
        self::STATUS_OPENED    => 'Открыт набор',
        self::STATUS_CLOSED    => 'Обучение завершено',
        self::STATUS_ON_THE_GO => 'Идет обучение',
        self::STATUS_FULL      => 'Набор завершен',
        self::STATUS_FINISHING => 'Обучение завершено. Пересдача экзаменов',
    ];
    //
}
