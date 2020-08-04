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



    // FORM VALIDATION

    const username = document.getElementById('username_input')
    const password = document.getElementById('password_input')
    const form = document.getElementById('signin_form')
    const errorElement = document.getElementById('error')

    form.addEventListener('submit', (e) => {
        let messages = []
        if (name.value == '' || name.value == null) {
            messages.push('Name is required')
        }

        if (messages.length > 0) {
            e.preventDefault
        }
        e.preventDefault()
    })

    // MOP & BUCKET CHECK BUTTON...REGISTER PAGE

    



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



    // Saves "name" input value to localStorage
    document.getElementById('save_info_name').addEventListener('click', function () {

        let nameInput = document.getElementById('name_input').value;
        if (nameInput == "") {
            $('#save_info_alert').fadeIn('fast', function () {
                $('#save_info_alert').delay(5000).fadeOut();
            });
        } else {
            localStorage.setItem('nameKey', nameInput);
            document.getElementById('save_info_name').innerHTML = 'Saved!';
            $('#save_info_name').delay(500).fadeOut('fast', function () {
                $('#name_input, .close_register').fadeOut('fast', function () {
                    $('.register_tabs').animate({
                        opacity: '1'
                    });
                });
            });
        }
    })

    // Opens input field for "address" on register page
    $('.address_tab').click(function () {
        $('.register_tabs').animate({
            opacity: '0'
        }, function () {
            $('#address_input').fadeIn('fast', function () {
                $('#save_info_address').fadeIn('slow', function () {
                    $('.close_register').fadeIn();
                });
            });
        })
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


    // Saves "address" input value to localStorage
    document.getElementById('save_info_address').addEventListener('click', function () {

        let addressInput = document.getElementById('address_input').value;
        if (addressInput == "") {
            $('#save_info_alert').fadeIn('fast', function () {
                $('#save_info_alert').delay(5000).fadeOut();
            });
        } else {
            localStorage.setItem('addressKey', addressInput);
            document.getElementById('save_info_address').innerHTML = 'Saved!';
            $('#save_info_address').delay(500).fadeOut('fast', function () {
                $('#address_input, .close_register').fadeOut('fast', function () {
                    $('.register_tabs').animate({
                        opacity: '1'
                    });
                });
            });
        }
    })

    // closes "address" input field
    $('.close_register').click(function () {
        $('#save_info_address').fadeOut('fast', function () {
            $('#address_input, .close_register').fadeOut('fast', function () {
                $('.register_tabs').animate({
                    opacity: '1'
                });
            });
        });
    })


    // Opens input field for "password" on register page
    $('.password_tab').click(function () {
        $('.register_tabs').animate({
            opacity: '0'
        }, function () {
            $('#password_input_register').fadeIn('fast', function () {
                $('#save_info_password').fadeIn('slow', function () {
                    $('.close_register').fadeIn();
                });
            });
        })
    })

    // closes "password" input field
    $('.close_register').click(function () {
        $('#save_info_password').fadeOut('fast', function () {
            $('#password_input_register, .close_register').fadeOut('fast', function () {
                $('.register_tabs').animate({
                    opacity: '1'
                });
            });
        });
    })


    // Saves "password" input value to localStorage
    document.getElementById('save_info_password').addEventListener('click', function () {

        let passwordInput = document.getElementById('password_input_register').value;
        if (passwordInput == "") {
            $('#save_info_alert').fadeIn('fast', function () {
                $('#save_info_alert').delay(5000).fadeOut();
            });
        } else {
            localStorage.setItem('passwordKey', passwordInput);
            document.getElementById('save_info_password').innerHTML = 'Saved!';
            $('#save_info_password').delay(500).fadeOut('fast', function () {
                $('#password_input_register').fadeOut('fast', function () {
                    $('.register_tabs').animate({
                        opacity: '1'
                    });
                });
            });
        }
    })

    // Opens input field for "tools" on register page
    $('.tools_tab').click(function () {
        $('.register_tabs').animate({
            opacity: '0'
        }, function () {
            $('.tools_list_wrap').addClass('flex_box');
            $('#mop_tools_check').animate({
                opacity: '1'
            }, 100, function () {
                $('#sponge_tools_check').animate({
                    opacity: '1'
                }, 100, function () {
                    $('#vacuum_tools_check').animate({
                        opacity: '1'
                    }, 100, function () {
                        $('#steamer_tools_check').animate({
                            opacity: '1'
                        }, 100, function () {
                            $('#iron_tools_check').animate({
                                opacity: '1'
                            }, 100, function () {
                                $('.form_close_btn').addClass('close_button_animate');
                                document.getElementById('main_title_swap').innerHTML = "What tools do you own?";
                            })
                        })
                    })
                })
            })
        })
    })

    // Picked "Mop & Bucket" in tools list
    $('.mop_tools').click(function () {
        $('.mop_check').toggleClass('check_height');
        $('.mop_icon, #mop_title').toggleClass('check_opacity');
        $('.mop_tick_icon').fadeIn();
        $('.mop_tools').toggleClass('remove_shadow');
        var mopBucket = $(this).attr('data-value');
        localStorage.setItem('mopBucketKey', mopBucket);
    })


    // Picked "Sponges, sprays & cloths" in tools list

    $('.sponges_tools').click(function () {
        $('.sponges_check').toggleClass('check_height');
        $('.sponges_icon, #sponges_title').toggleClass('check_opacity');
        $('.sponges_tick_icon').fadeIn();
        $('.sponges_tools').addClass('remove_shadow');
        var sponges = $(this).attr('data-value');
        localStorage.setItem('spongesKey', sponges);
    })

    // Picked "Vacuum" in tools list

    $('.vacuum_tools').click(function () {
        $('.vacuum_check').toggleClass('check_height');
        $('.vacuum_icon, #vacuum_title').toggleClass('check_opacity');
        $('.vacuum_tick_icon').fadeIn();
        $('.vacuum_tools').addClass('remove_shadow');
        var vacuum = $(this).attr('data-value');
        localStorage.setItem('vacuumKey', vacuum);
    })

    // Picked "Carpet Steamer" in tools list

    $('.steamer_tools').click(function () {
        $('.steamer_check').toggleClass('check_height');
        $('.steamer_icon, #steamer_title').toggleClass('check_opacity');
        $('.steamer_tick_icon').fadeIn();
        $('.steamer_tools').toggleClass('remove_shadow');
        var steamer = $(this).attr('data-value');
        localStorage.setItem('steamerKey', steamer);
    })

    // Picked "Iron" in tools list

    $('.iron_tools').click(function () {
        $('.iron_check').toggleClass('check_height');
        $('.iron_icon, #iron_title').toggleClass('check_opacity');
        $('.iron_tick_icon').fadeIn();
        $('.iron_tools').removeClass('remove_shadow');
        var iron = $(this).attr('data-value');
        localStorage.setItem('ironKey', iron);
    })






    // Displays cleaners name on account page

    let setName = localStorage.getItem('nameKey');
    document.getElementById('cleaners_name').innerHTML = `${setName}`;



    //bounceJS for name tab
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

    //bounceJS for address tab
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

    //bounceJS for password tab
    $('.password_tab').click(function () {

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

            .applyTo(document.querySelectorAll(".password_tab"));

    })


});