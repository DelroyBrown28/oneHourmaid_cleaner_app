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
        let signInButton = document.getElementById('email_input').value;
        if (signInButton = "") {
            return false;
        }
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
        let PWInput = document.getElementById('password_input').value;
        if (PWInput == "") {
            return // stops toggle if input is empty
        }
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
                $('#save_info').fadeIn('slow');
            });
        })
    })

    // Saves name input
    $('#save_info').click(function () {
        document.getElementById('save_info').innerHTML = 'Saved!';
        $('#save_info').delay(500).fadeOut('fast', function () {
            $('#name_input').fadeOut('fast', function () {
                $('.register_tabs').animate({
                    opacity: '1'
                });
            });
        });
    })

    // Opens input field for "address" on register page
    $('.address_tab').click(function () {
        $('.register_tabs').animate({
            opacity: '0'
        }, function () {
            $('#address_input').fadeIn('fast', function () {
                $('#save_info_address').fadeIn('slow');
            });
        })
    })

    // Saves address input
    $('#save_info_address').click(function () {
        document.getElementById('save_info_address').innerHTML = 'Saved!';
        $('#save_info_address').delay(500).fadeOut('fast', function () {
            $('#address_input').fadeOut('fast', function () {
                $('.register_tabs').animate({
                    opacity: '1'
                });
            });
        });
    })



    //bounceJS for name input
    $('.name_tab').click(function () {

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

            .applyTo(document.querySelectorAll(".name_tab"));

    })
    
        //bounceJS for address input
        $('.address_tab').click(function () {

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
    
                .applyTo(document.querySelectorAll(".address_tab"));
    
        })
    

    




});