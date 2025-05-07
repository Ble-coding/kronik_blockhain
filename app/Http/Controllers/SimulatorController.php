<?php

namespace App\Http\Controllers;

use App\Models\Simulator;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SimulatorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

            return Inertia::render('simulators');

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
    public function show(Simulator $simulator)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Simulator $simulator)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Simulator $simulator)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Simulator $simulator)
    {
        //
    }
}
