<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('hello');
});

Route::post('calendar', 'CalendarController@saveEvent');

Route::get('calendar', 'CalendarController@getAllEvents');

Route::post('calendar/edit', 'CalendarController@editEvent');

Route::post('calendar/drag', 'CalendarController@dragEvent');

Route::post('calendar/delete', 'CalendarController@deleteEvent');