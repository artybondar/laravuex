<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Faq extends Model
{
    protected $fillable = [
        'name', 'answer', 'category_id', 'slug',
    ];
}
