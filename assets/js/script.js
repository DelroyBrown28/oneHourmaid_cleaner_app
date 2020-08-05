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
    $('#sign_in_button').click(function () {
        var signinInput = document.getElementById('email_input').value;
        var passwordInput = document.getElementById('password_input').value;
        if (signinInput == "" || passwordInput == "") {
            $('.sign_in_alert_box').fadeIn('fast', function () {
                $('.sign_in_alert_box').delay(5000).fadeOut();
            });
        } else {
            setTimeout(function () {
                location.href = "cleaner_account.html";
            }, 500)
        }
    })

    // TOGGLES PASSWORD VIEW ON SIGN IN PAGE

    $('.fa-eye').click(function () {
        let PWInput = document.getElementById('password_input').value;
        if (PWInput == "") {
            return // stops toggle if input is empty
        }
        $('.fa-eye').fadeOut('fast', function () {
            $('.fa-eye-slash').fadeIn();
        })
        $('#password_input').attr('type', 'text');
    })

    $('.fa-eye-slash').click(function () {
        $('.fa-eye-slash').fadeOut('fast', function () {
            $('.fa-eye').fadeIn();
        })
        $('#password_input').attr('type', 'password');

    })


    // FORM BUTTON CHECKED - REGISTER PAGE

    $('#mop_check_btn').click(function () {
        $('#mop_check_btn').addClass('button_checked')
        $('.mop_label').addClass('button_checked');
    })
    $('#sponges_check_btn').click(function () {
        $('#sponges_check_btn').addClass('button_checked')
        $('.sponges_label').addClass('button_checked');
    })
    $('#vacuum_check_btn').click(function () {
        $('#vacuum_check_btn').addClass('button_checked')
        $('.vacuum_label').addClass('button_checked');
    })
    $('#steamer_check_btn').click(function () {
        $('#steamer_check_btn').addClass('button_checked')
        $('.steamer_label').addClass('button_checked');
    })
    $('#iron_check_btn').click(function () {
        $('#iron_check_btn').addClass('button_checked')
        $('.iron_label').addClass('button_checked');
    })


    // SHOW PENDING JOBS

    $('#jobs_btn').click(function () {
        $('.options_fade_wrap').fadeOut('fast', function () {
            $('.pending_jobs_fadein_wrap').fadeIn();
        })
    })

    $('.close_button_pending_jobs').click(function () {
        $('.pending_jobs_fadein_wrap').fadeOut('fast', function () {
            $('.options_fade_wrap').fadeIn();
        });
    })


    //bounceJS for slide down menu items
    $('.contact').click(function () {

        var bounce = new Bounce();
        bounce
            .rotate({
                from: 0,
                to: 0,
                duration: 3000,
                stiffness: 1
            })
            .scale({
                from: {
                    x: 1,
                    y: 1
                },
                to: {
                    x: 0.5,
                    y: 0.5
                },
                easing: "sway",
                duration: 3000,
                stiffness: 1
            })
            .translate({
                from: {
                    x: 0,
                    y: 0
                },
                to: {
                    x: 0,
                    y: 0
                },
                easing: "bounce",
                duration: 3000,
            })

            .applyTo(document.querySelectorAll(".contact"));

    })

    $('.payments').click(function () {

        var bounce = new Bounce();
        bounce
            .rotate({
                from: 0,
                to: 0,
                duration: 3000,
                stiffness: 1
            })
            .scale({
                from: {
                    x: 1,
                    y: 1
                },
                to: {
                    x: 0.5,
                    y: 0.5
                },
                easing: "sway",
                duration: 3000,
                delay: 65,
                stiffness: 1
            })
            .translate({
                from: {
                    x: 0,
                    y: 0
                },
                to: {
                    x: 0,
                    y: 0
                },
                easing: "bounce",
                duration: 3000,
                delay: 30,
            })

            .applyTo(document.querySelectorAll(".payments"));

    })

    $('.issues').click(function () {

        var bounce = new Bounce();
        bounce
            .rotate({
                from: 0,
                to: 0,
                duration: 3000,
                stiffness: 1
            })
            .scale({
                from: {
                    x: 1,
                    y: 1
                },
                to: {
                    x: 0.5,
                    y: 0.5
                },
                easing: "sway",
                duration: 3000,
                delay: 65,
                stiffness: 1
            })
            .translate({
                from: {
                    x: 0,
                    y: 0
                },
                to: {
                    x: 0,
                    y: 0
                },
                easing: "bounce",
                duration: 3000,
                delay: 30,
            })

            .applyTo(document.querySelectorAll(".issues"));

    })

    //SLIDE DOWN MENU

    $('.show_menu').click(function () {
        $('.full_menu').css('backgroundColor', '#EBFCFF');
        $('.show_menu').fadeOut('fast', function () {
            $('.full_menu').animate({
                height: '100%',
                width: '100%'
            }, function () {
                $('.menu_list').show('fast', function () {
                    $('.cross_icon').fadeIn('slow');
                });
            })
        })
    })

    $('.cross_icon').click(function () {
        $(this).fadeOut('fast', function () {
            $('.menu_list').fadeOut('fast', function () {
                $('.full_menu').animate({
                    height: '20px'
                }, 200, function () {
                    $('.full_menu').css('backgroundColor', '#15222A');
                    $('.show_menu').fadeIn();
                })
            })
        })
    })

    // Opens input field for "Name" on register page
    $('.name_tab').click(function () {
        $('.register_tabs').animate({
            opacity: '0'
        }, function () {
            $('#name_input').fadeIn('fast', function () {
                $('#save_info_name').fadeIn('slow', function () {
                    $('.close_register').fadeIn();
                });
            });
        })
    })

    // closes "name" input field

    $('.close_register').click(function () {
        $('#save_info_name').fadeOut('fast', function () {
            $('#name_input, .close_register').fadeOut('fast', function () {
                $('.register_tabs').animate({
                    opacity: '1'
                });
            });
        });
    })


    // Expands "address" field
    $('#address_input').click(function () {
        $(this).animate({
            height: '150px'
        })
        $('#save_info_address').animate({
            top: '37%'
        })
        $('.close_register').animate({
            top: '44%'
        })
    })


    // FADE IN FOR REGISTER PAGE

    function registerPageFadeIn() {
        $('.main_title__reg').animate({
            opacity: '1'
        }, function () {
            $('.registered_blurb').animate({
                opacity: '1'
            })
        })
    }
    window.onload = registerPageFadeIn



});