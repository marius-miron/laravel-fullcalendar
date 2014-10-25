/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        select: function (start, end) {
            var title = prompt('Event Title:');
            var eventData;
            if (title) {
                eventData = {
                    title: title,
                    start: start,
                    end: end
                };
                $('#calendar').fullCalendar('renderEvent', eventData, true);
                $.post('calendar', {'date': start.format(), 'text': title});
            }
            $('#calendar').fullCalendar('unselect');
        },
        selectable: true,
        editable: true,
        defaultView: 'month',
        eventLimit: true,
        events: {url: 'calendar'},
        eventClick: function (event) {
            var title = prompt('Edit:');
            event.title = title;
            $('#calendar').fullCalendar('updateEvent', event);
            $.post('calendar/edit', {'id' : event.id, 'text': title});
        }
    });


    $('#mini_calendar').fullCalendar({
        header: {
            left: 'prev,next',
            center: 'title'
        },
        select: function (start, end) {
            var title = prompt('Event Title:');
            var eventData;
            if (title) {
                eventData = {
                    title: title,
                    start: start,
                    end: end
                };
                $('#mini_calendar').fullCalendar('renderEvent', eventData, true);
                $.post('calendar', {'date': start.format(), 'text': title});
            }
            $('#mini_calendar').fullCalendar('unselect');
        },
        selectable: true,
        editable: true,
        defaultView: 'month',
        eventLimit: true,
        events: {url: 'calendar'}
    });
});
