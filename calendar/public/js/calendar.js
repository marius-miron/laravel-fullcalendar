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
                    select: function(start, end) {
				var title = prompt('Event Title:');
				var eventData;
				if (title) {
					eventData = {
						title: title,
						start: start,
						end: end
					};
					$('#calendar').fullCalendar('renderEvent', eventData, true);
                                        $.post('asdads', eventData.title);
				}
				$('#calendar').fullCalendar('unselect');
			},
                    selectable: true,
                    editable: true,
                    defaultView: 'month',
                    events: [
                        {
                            title: 'All Day Event',
                            start: '2014-06-01'
                        },
                        {
                            title: 'Long Event',
                            start: '2014-06-07',
                            end: '2014-06-10'
                        },
                        {
                            id: 999,
                            title: 'Repeating Event',
                            start: '2014-06-09T16:00:00'
                        },
                        {
                            id: 999,
                            title: 'Repeating Event',
                            start: '2014-06-16T16:00:00'
                        },
                        {
                            title: 'Meeting',
                            start: '2014-06-12T10:30:00',
                            end: '2014-06-12T12:30:00'
                        },
                        {
                            title: 'Lunch',
                            start: '2014-06-12T12:00:00'
                        },
                        {
                            title: 'Birthday Party',
                            start: '2014-06-13T07:00:00'
                        },
                        {
                            title: 'Click for Google',
                            url: 'http://google.com/',
                            start: '2014-06-28'
                        }
                    ]
                });
            });
