<?php

use \Models\Event;

/**
 * Description of CalendarController
 *
 * @author marius
 */
class CalendarController extends BaseController {

    public function saveEvent() {

        $postData = Input::all();

        $newEvent = new EventModel();
        $newEvent->start = $postData['date'];
        $newEvent->title = $postData['text'];

        $newEvent->save();
    }

    public function getAllEvents() {
        return EventModel::all();
    }

    public function editEvent() {
        $postData = Input::all();
        $event = EventModel::find($postData['id']);

        $event->title = $postData['text'];
        $event->save();
    }

}
