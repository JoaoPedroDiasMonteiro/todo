<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Todo extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'task',
        'todo_id',
        'status',
        'completed_at'
    ];

    public function todos()
    {
        return $this->hasMany(Todo::class);
    }

    public function todo()
    {
        return $this->belongsTo(Todo::class);
    }

    public function getSubTodosDetailsAttribute()
    {
        $completed = $this->todos()->get()->where('status', 'completed')->count();
        $total = $this->todos()->get()->count();
        return ['completed' => $completed, 'total' => $total];
    }

    public function getIsCheckedAttribute()
    {
        return ($this->attributes['status'] === 'completed' ? true : false);
    }

    public function scopeUncompleted($query)
    {
        return $query->where('status', 'pending');
    }

    public function scopeWithRecentCompleted($query)
    {
        return $query->where('todo_id', null)->where(function () use ($query) {
            $query->where('status', 'pending')
                ->orWhere('completed_at', '>=', date('Y-m-d H:i:s', strtotime("- 1 minutes")));
        });
    }
}
