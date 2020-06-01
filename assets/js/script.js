$(document).ready(function () {

    function fadeInOnLoad() {
        $('.account_signin_title').animate({
            opacity: '1',
        }, function () {
            $('#email_input').animate({
                opacity: '1'
            }, function () {
                $('#password_input').animate({
                    opacity: '1'
                }, function () {
                    $('#sign_up_button').animate({
                        width: '80%'
                    }, function () {
                        $('#sign_up_button').animate({
                            height: '30px'
                        })
                    })
                })
            })
        })
    }
    window.onload = fadeInOnLoad;

    function cleanerAppFadeIn() {
        $('#cleaners_avatar').animate({
            opacity: '1'
        }, function () {
            $('.avatar_border').animate({
                width: '60px'
            }, function () {
                $('#cleaners_name').animate({
                    bottom: '0'
                })
            })
        })
    }
    window.onload = cleanerAppFadeIn

});