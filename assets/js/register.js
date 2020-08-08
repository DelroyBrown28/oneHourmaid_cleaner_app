$(document).ready(function() {

    // VALIDATION FOR REGISTER FORM

    var passwordInput = document.getElementById('password_reg');
    var usernameInput = document.getElementById('username_reg');
    var number = document.getElementById('number');
    var lowercase = document.getElementById('lowercase');
    var uppercase = document.getElementById('uppercase');
    var length = document.getElementById('length');
    var uppercaseUser = document.getElementById('uppercase_user');
    var charNumber = document.getElementById('numbers_char');

    usernameInput.onkeyup = function () {

        // Validate uppercase letters for username
        var user_uppercase = /[A-Z]/g;
        if (usernameInput.value.match(user_uppercase)) {
            uppercaseUser.classList.remove('invalid');
            uppercaseUser.classList.add('valid');
        } else {
            uppercaseUser.classList.remove('valid');
            uppercaseUser.classList.add('invalid');
        }

        // Validate length
        if (usernameInput.value.length >= 7) {
            charNumber.classList.remove("invalid");
            charNumber.classList.add("valid");
        } else {
            charNumber.classList.remove("valid");
            charNumber.classList.add("invalid");
        }

    }

    // Validate lowercase letters
    passwordInput.onkeyup = function () {
        var lowerCaseLetters = /[a-z]/g;
        if (passwordInput.value.match(lowerCaseLetters)) {
            lowercase.classList.remove('invalid');
            lowercase.classList.add('valid');
        } else {
            lowercase.classList.remove('valid');
            lowercase.classList.add('invalid');
        }

        // Validate capital letters

        var capitalLetters = /[A-Z]/g;
        if (passwordInput.value.match(capitalLetters)) {
            uppercase.classList.remove('invalid');
            uppercase.classList.add('valid');
        } else {
            uppercase.classList.remove('valid');
            uppercase.classList.add('invalid');
        }

        // Validate numbers
        var numbers = /[0-9]/g;
        if (passwordInput.value.match(numbers)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
        } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
        }

        // Validate length
        if (passwordInput.value.length >= 8) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
        }

    }







})