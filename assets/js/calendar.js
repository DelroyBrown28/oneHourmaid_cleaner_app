    $(document).ready(function () {


        // CALENDAR FOR CLEANER ACCOUNT PAGE

        let myCalendar = new VanillaCalendar({
            selector: "#myCalendar"
        })

        $('.vanilla-calendar-date').click(function () {
            $(this).addClass('calnder_bg_color');
        })


        // SHOW CALENDAR BUTTON

        $('#open_calendar_btn').click(function () {
            $('.options_fade_wrap').fadeOut('fast', function () {
                $('.calendar_wrap').fadeIn('fast', function () {
                    $('.close_button_wrap').fadeIn();
                });
            });
        })

        $('.close_button_wrap').click(function () {
            $(this).fadeOut('fast', function () {
                $('.calendar_wrap').fadeOut('fast', function () {
                    $('.options_fade_wrap').fadeIn();
                })
            })
        })

    })