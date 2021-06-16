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
            'todos' => Todo::withRecentCompleted()->orderBy('status')->with('todos')->get()->append('subTodosDetails')->toArray()
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
            return redirect()->back();
        } catch (\Throwable $th) {
            DB::rollBack();
            return redirect()->back()->withErrors(['message' => $th->getMessage()]);
        }
    }

    public function complete(Todo $todo)
    {
        $todo->update([
            'status' => 'completed',
            'completed_at' => date('Y-m-d H:i:s')
        ]);
        return redirect()->back();
    }

    public function uncomplete(Todo $todo)
    {
        $todo->update([
            'status' => 'pending',
            'completed_at' => null
        ]);
        return redirect()->back();
    }

    public function createTodosForWindows()
    {
        try {
            DB::beginTransaction();
            $mainTodo = Todo::query()->create(['task' => 'Adicionar Nome Depois', 'todo_id', '1']);

            $instalations = Todo::query()->create(['task' => 'Instalações', 'todo_id' => $mainTodo->id]);
            $otimizations = Todo::query()->create(['task' => 'Otimizações', 'todo_id' => $mainTodo->id]);
            $neymar = Todo::query()->create(['task' => 'Neymar', 'todo_id' => $mainTodo->id]);
            $beautify = Todo::query()->create(['task' => 'Qualidade de Vida', 'todo_id' => $mainTodo->id]);
            $essentials = Todo::query()->create(['task' => 'Essenciais', 'todo_id' => $mainTodo->id]);

            $todos = [
                ['task' => 'Instalar Office', 'todo_id' => $instalations->id],
                ['task' => 'Instalar Google Chrome', 'todo_id' => $instalations->id],
                ['task' => 'Instalar WinRAR', 'todo_id' => $instalations->id],
                ['task' => 'Instalar Adobe PDF', 'todo_id' => $instalations->id],
                ['task' => 'Instalar Suporte Visual', 'todo_id' => $instalations->id],

                ['task' => 'Serviço: SYSMAIN', 'todo_id' => $otimizations->id],
                ['task' => 'Energia e Suspensão', 'todo_id' => $otimizations->id],
                ['task' => 'Segurança e Manutenção 1', 'todo_id' => $otimizations->id],
                ['task' => 'Segurança e Manutenção 2', 'todo_id' => $otimizations->id],
                ['task' => 'Gerenciador de Tarefas/Iniciar (OneDrive)', 'todo_id' => $otimizations->id],

                ['task' => 'Desativar Windows Defender', 'todo_id' => $neymar->id],
                ['task' => 'Crack Windows 10 e Office', 'todo_id' => $neymar->id],
                ['task' => 'Adicionar Exclusões', 'todo_id' => $neymar->id],
                ['task' => 'Desativar Atualizações do Windows (WUB)', 'todo_id' => $neymar->id],
                ['task' => 'Ativar Windows Defender', 'todo_id' => $neymar->id],
                ['task' => 'Desativar Atualizações do Office', 'todo_id' => $neymar->id],

                ['task' => 'Colocar Icones do Computador na Área de Trabalho', 'todo_id' => $beautify->id],
                ['task' => 'Definir Chrome como Default', 'todo_id' => $beautify->id],
                ['task' => 'Definir Adobe PDF com o Default', 'todo_id' => $beautify->id],
                ['task' => 'Arrastar Icones do Relógio', 'todo_id' => $beautify->id],
                ['task' => 'Arrumar as Notificações do Windows', 'todo_id' => $beautify->id],
                ['task' => 'Colocar Office na área de Trabalho', 'todo_id' => $beautify->id],
                ['task' => 'Organizar os Icones', 'todo_id' => $beautify->id],
                ['task' => 'Otimizar Windows Defender (tirar os amarelinhos)', 'todo_id' => $beautify->id],
                ['task' => 'Alterar o Nome dos Discos (C: Sistema, D: Dados)', 'todo_id' => $beautify->id],

                ['task' => 'Checar Drivers do Sistema', 'todo_id' => $essentials->id],
                ['task' => 'Restaurar Backup e Redirecinar Usuário', 'todo_id' => $essentials->id],
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
        return Inertia::render('Todo/Show', [
            'todo' => $todo,
            'todos' => $todo->todos()->get()->append('subTodosDetails')->toArray(),
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
        $todo->delete();

        return redirect()->back();
    }
}
