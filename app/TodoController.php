<?php

namespace App;

use App\Http\Controllers\Controller;
use App\Http\Requests\TodoCreateRequest;
use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        $todos = Todo::withRecentCompleted()
            ->where('user_id', Auth::user()->id)
            ->orderBy('status')
            ->with('todos')
            ->get()->append('subTodosDetails')->toArray();

        return Inertia::render('Todo/Index', [
            'todos' => $todos
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
            $todo = new Todo();
            $todo->fill($request->validated());
            $todo->user_id = Auth::user()->id;
            $todo->saveOrFail();
            DB::commit();
            return redirect()->back();
        } catch (\Throwable $th) {
            DB::rollBack();
            dd($th);
            return redirect()->back()->withErrors(['message' => $th->getMessage()]);
        }
    }

    public function complete(Todo $todo)
    {
        if (Auth::user()->id == $todo->user_id) {
            $todo->update([
                'status' => 'completed',
                'completed_at' => date('Y-m-d H:i:s')
            ]);
        }

        return redirect()->back();
    }

    public function uncomplete(Todo $todo)
    {
        if (Auth::user()->id == $todo->user_id) {
            $todo->update([
                'status' => 'pending',
                'completed_at' => null
            ]);
        }

        return redirect()->back();
    }

    public function createTodosForWindows()
    {
        try {
            DB::beginTransaction();
            $userId = Auth::user()->id;

            $mainTodo = Todo::query()->create(['task' => 'Adicionar Nome Depois', 'user_id' => $userId]);

            $instalations = Todo::query()->create(['task' => 'Instala????es', 'todo_id' => $mainTodo->id, 'user_id' => $userId]);
            $otimizations = Todo::query()->create(['task' => 'Otimiza????es', 'todo_id' => $mainTodo->id, 'user_id' => $userId]);
            $neymar = Todo::query()->create(['task' => 'Neymar', 'todo_id' => $mainTodo->id, 'user_id' => $userId]);
            $beautify = Todo::query()->create(['task' => 'Qualidade de Vida', 'todo_id' => $mainTodo->id, 'user_id' => $userId]);
            $essentials = Todo::query()->create(['task' => 'Essenciais', 'todo_id' => $mainTodo->id, 'user_id' => $userId]);

            $todos = [
                ['task' => 'Instalar Office', 'todo_id' => $instalations->id, 'user_id' => $userId],
                ['task' => 'Instalar Google Chrome', 'todo_id' => $instalations->id, 'user_id' => $userId],
                ['task' => 'Instalar WinRAR', 'todo_id' => $instalations->id, 'user_id' => $userId],
                ['task' => 'Instalar Adobe PDF', 'todo_id' => $instalations->id, 'user_id' => $userId],
                ['task' => 'Instalar Suporte Visual', 'todo_id' => $instalations->id, 'user_id' => $userId],

                ['task' => 'Servi??o: SYSMAIN', 'todo_id' => $otimizations->id, 'user_id' => $userId],
                ['task' => 'Energia e Suspens??o', 'todo_id' => $otimizations->id, 'user_id' => $userId],
                ['task' => 'Seguran??a e Manuten????o 1', 'todo_id' => $otimizations->id, 'user_id' => $userId],
                ['task' => 'Seguran??a e Manuten????o 2', 'todo_id' => $otimizations->id, 'user_id' => $userId],
                ['task' => 'Gerenciador de Tarefas/Iniciar (OneDrive)', 'todo_id' => $otimizations->id, 'user_id' => $userId],

                ['task' => 'Desativar Windows Defender', 'todo_id' => $neymar->id, 'user_id' => $userId],
                ['task' => 'Crack Windows 10 e Office', 'todo_id' => $neymar->id, 'user_id' => $userId],
                ['task' => 'Adicionar Exclus??es', 'todo_id' => $neymar->id, 'user_id' => $userId],
                ['task' => 'Desativar Atualiza????es do Windows (WUB)', 'todo_id' => $neymar->id, 'user_id' => $userId],
                ['task' => 'Ativar Windows Defender', 'todo_id' => $neymar->id, 'user_id' => $userId],
                ['task' => 'Desativar Atualiza????es do Office', 'todo_id' => $neymar->id, 'user_id' => $userId],

                ['task' => 'Colocar Icones do Computador na ??rea de Trabalho', 'todo_id' => $beautify->id, 'user_id' => $userId],
                ['task' => 'Definir Chrome como Default', 'todo_id' => $beautify->id, 'user_id' => $userId],
                ['task' => 'Definir Adobe PDF com o Default', 'todo_id' => $beautify->id, 'user_id' => $userId],
                ['task' => 'Arrastar Icones do Rel??gio', 'todo_id' => $beautify->id, 'user_id' => $userId],
                ['task' => 'Arrumar as Notifica????es do Windows', 'todo_id' => $beautify->id, 'user_id' => $userId],
                ['task' => 'Colocar Office na ??rea de Trabalho', 'todo_id' => $beautify->id, 'user_id' => $userId],
                ['task' => 'Organizar os Icones', 'todo_id' => $beautify->id, 'user_id' => $userId],
                ['task' => 'Otimizar Windows Defender (tirar os amarelinhos)', 'todo_id' => $beautify->id, 'user_id' => $userId],
                ['task' => 'Alterar o Nome dos Discos (C: Sistema, D: Dados)', 'todo_id' => $beautify->id, 'user_id' => $userId],

                ['task' => 'Checar Drivers do Sistema', 'todo_id' => $essentials->id, 'user_id' => $userId],
                ['task' => 'Restaurar Backup e Redirecinar Usu??rio', 'todo_id' => $essentials->id, 'user_id' => $userId],
            ];

            Todo::query()->insert($todos);
            DB::commit();
            return redirect()->route('todo.index');
        } catch (\Throwable $th) {
            DB::rollBack();
            dd($th);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function show(Todo $todo)
    {
        $todoChecked = Todo::query()->where('user_id', Auth::user()->id)->where('id', $todo->id)->with('todo:id,task')->firstOrFail();

        return Inertia::render('Todo/Index', [
            'modal' => true,
            'todo' => $todoChecked->toArray(),
            'subTodos' => $todoChecked->todos()->orderBy('status')->get()->append('subTodosDetails')->toArray(),
        ]);
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
        $request->validate([
            'task' => 'required|string|min:1|max:128',
        ]);

        try {
            $todo->fill($request->only('task'));
            $todo->saveOrFail();

            return redirect()->back();
        } catch (\Throwable $th) {
            return redirect()->back()->withErrors('error', 'Oops!');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Todo $todo)
    {
        if (Auth::user()->id == $todo->user_id) {
            $todo->delete();
        }

        return redirect()->back();
    }
}
