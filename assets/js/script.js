$(document).ready(function () {



    function cleanerAppFadeIn() {
        $('#cleaners_avatar').animate({
            opacity: '1'
        }, function () {
            $('.avatar_border').animate({
                width: '60px'
            }, function () {
                $('#cleaners_name').animate({
                    bottom: '0'
                }, function () {
                    $('.avatar').addClass('transform_rotate');
                })
            })
        })
        setTimeout(function () {
            $('#myCalendar').addClass('neumorphize');
        }, 1800);
    }
    window.onload = cleanerAppFadeIn


    $('.open_sidemenu').click(function () {
        $(this).addClass('skippy');
        $('.side_menu_container').fadeIn("fast", function () {
            $('.side_menu_wrap').animate({
                right: '0%'
            }, function () {
                $('.open_sidemenu').fadeOut('slow');
            })
        })
    })

    $('.back_out_side_menu').click(function () {
        $('.open_sidemenu').removeClass('skippy');
        $('.open_sidemenu').fadeIn('slow');
        $('.side_menu_wrap').animate({
            right: '-150%'
        }, function () {
            $('.side_menu_container').fadeOut();
        })
    })


    // SIGN IN PAGE SIGN IN BUTTON

    $('.sign_in_button').click(function () {
        $('.buttonclickstyle').animate({
            width: '100%'
        }, 200, function () {
            location.href = "cleaner_account.html";
        })
    })

    // REGISTER PAGE REGISTER BUTTON

    $('#register_button').click(function () {
        $('.buttonclickstyle_two').animate({
            width: '100%'
        }, 200, function () {
            location.href = "#";
        })
    })



    // TOGGLES PASSWORD VIEW ON SIGN IN PAGE

    $('.show_password').click(function () {
        $(this).fadeOut('slow', function () {
            $('.hide_password').fadeIn();
        })
        $('#password_input').attr('type', 'text');
    })
    $('.hide_password').click(function () {
        $(this).fadeOut('slow', function () {
            $('.show_password').fadeIn();
        })
        $('#password_input').attr('type', 'password');

    })


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


});