<?php

namespace App\Http\Controllers;

use App\Models\HowItWorks;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HowItWorksController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('how_it_works');
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
    public function show(HowItWorks $howItWorks)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(HowItWorks $howItWorks)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, HowItWorks $howItWorks)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(HowItWorks $howItWorks)
    {
        //
    }
}
