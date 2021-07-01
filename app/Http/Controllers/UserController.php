<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Validation\Rules;

class UserController extends Controller
{
    public function show()
    {
        return Inertia::render('User/Profile', [
            'user' => Auth::user()
        ]);
    }

    public function update(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'password' => ['nullable', 'confirmed', Rules\Password::defaults()],
        ]);

        try {
            $user->fill($request->except('password'));
            if ($request->password) {
                $user->password = Hash::make($request->password);
            }
            $user->saveOrFail();
            return redirect()->route('todo.index')->with(['success', 'Profile Updated!']);
        } catch (\Throwable $th) {
            return redirect()->back()->withErrors(['error' => 'Oops!']);
        }

    }
}
