/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

     $('#calendar').fullCalendar({
        
        selectable: true,
        editable: true,
        defaultView: 'month',
        eventLimit: true,
        firstDay: 1,
        events: {url: 'calendar'},
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
                
        eventClick: function (event) {
            var title = prompt('Edit:');
            event.title = title;
            if(title){
                $('#calendar').fullCalendar('updateEvent', event);
                $.post('calendar/edit', {'id' : event.id, 'text': title});
            }
        },

        eventDrop: function(event, revertFunc) {

            alert(event.title + " was moved on " + event.start.format());

            if (!confirm("Are you sure about that?")) {
                revertFunc();
            }
            
            $.post('calendar/drag', {'id' : event.id, 'date': event.start.format()});
        },
        
        eventDragStop: function(event,jsEvent) {

            if( (jsEvent.pageX <= 250)  & (jsEvent.pageY <= 250)){
                if (confirm('Delete '+ event.title + ' ?')) {
                    $('#calendar').fullCalendar('removeEvents', event.id);
                    $.post('calendar/delete', {'id' : event.id });
                }    
            }
        }
        
    });


    $('#mini_calendar').fullCalendar({
        header: {
            left: 'prev,next',
            center: 'title'
        },
        defaultView: 'month',
        eventLimit: true,
        firstDay: 1,
        events: {url: 'calendar'}
    });
});
