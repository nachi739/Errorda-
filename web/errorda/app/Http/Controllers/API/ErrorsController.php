<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Controllers\API\Carbon;
use Illuminate\Http\Request;
use App\Models\Errors;
use DateTimeZone;

class ErrorsController extends Controller
{
    public function api() {
        $time = now();
        return $time;
    }
    // public function getErrors(){
    //     $errors = Errors::all();
    //     return $errors;
    // }

    // public function addErrors(Request $request){
    //     $errors = new Errors;
    //     $errors->title = $request->title;
    //     $errors->save();
    //     $errors = Errors::all();
    //     return $errors;
    // }
}


