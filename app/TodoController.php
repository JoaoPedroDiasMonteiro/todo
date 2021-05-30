<?php

namespace App;

use App\Http\Controllers\Controller;
use App\Http\Requests\TodoCreateRequest;
use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Todo/Index', [
            'todos' => Todo::withRecentCompleted()->get()
        ]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TodoCreateRequest $request)
    {
        try {
            DB::beginTransaction();
            Todo::query()->create($request->validated());
            DB::commit();
            return redirect()->route('todo.index');
        } catch (\Throwable $th) {
            DB::rollBack();
            return redirect()->back()->withErrors(['message' => $th->getMessage()]);
        }
    }

    public function complete(Todo $todo) {
        $todo->update([
            'status' => 'completed',
            'completed_at' => date('Y-m-d H:i:s')
            ]);
        return redirect()->route('todo.index');
    }

    public function uncomplete(Todo $todo) {
        $todo->update([
            'status' => 'pending',
            'completed_at' => null
        ]);
        return redirect()->route('todo.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function show(Todo $todo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function edit(Todo $todo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Todo $todo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Todo $todo)
    {
        //
    }
}
