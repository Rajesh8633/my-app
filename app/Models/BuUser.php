<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BuUser extends Model
{
    use HasFactory;
    protected $table    = 'bs_users';
    protected $fillable = [
        'bu_name',
        'bu_passwd',
    ];
	
}
