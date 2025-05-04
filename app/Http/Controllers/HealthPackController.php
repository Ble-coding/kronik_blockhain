<?php

namespace App\Http\Controllers;

use App\Models\HealthPack;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HealthPackController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('health-packs');
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
    public function show(HealthPack $healthPack)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(HealthPack $healthPack)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, HealthPack $healthPack)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(HealthPack $healthPack)
    {
        //
    }
}
