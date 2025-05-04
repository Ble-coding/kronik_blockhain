<?php

namespace App\Http\Controllers;

use App\Models\Blockchain;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlockchainController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('blockchains');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Blockchain $blockchain)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blockchain $blockchain)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Blockchain $blockchain)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blockchain $blockchain)
    {
        //
    }
}
