<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('kontak');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'telepon' => 'required|string|max:50',
            'email' => 'nullable|email|max:255',
            'paket' => 'nullable|string|max:255',
            'pesan' => 'nullable|string',
        ]);

        ContactMessage::create([
            'name' => $validated['nama'],
            'phone' => $validated['telepon'],
            'email' => $validated['email'] ?? null,
            'package' => $validated['paket'] ?? null,
            'message' => $validated['pesan'] ?? null,
        ]);

        return redirect()->back()->with('success', 'Pesan Anda berhasil dikirim! Tim Balda akan segera menghubungi Anda.');
    }
}
