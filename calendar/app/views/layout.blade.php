<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <title>Laravel Calendar</title>
        <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.1.1/fullcalendar.min.css"/> 
        
        <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
        <script src="https://code.jquery.com/ui/1.11.2/jquery-ui.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.8.3/moment.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.1.1/fullcalendar.min.js"></script>
        {{ HTML::script('js/calendar.js') }}
        {{ HTML::style('css/stylesheet.css') }}
    </head>
    <body>
        @yield('content')
    </body>
</html>
