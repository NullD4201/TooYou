let idValue = $('#id-input').val();
let pwValue = $('#pw-input').val();
let pwCheckValue = $('#pw-check-input').val();
let nameValue = $('#name-input').val();
let emailValue = $('#email-input').val();

let idRegExp = /([A-Za-z0-9])\w+/;
let emailRegExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

let $registerButton = document.getElementById('register-button');

function checkValue() {
    if (
        idValue.length >= 4 &&
        idValue.length <= 12 &&
        idRegExp.test(idValue) &&
        pwValue.length >= 8 &&
        pwValue.length <= 20 &&
        pwValue == pwCheckValue &&
        nameValue.length >= 2 &&
        nameValue.length <= 12 &&
        emailRegExp.test(emailValue)
    ) {
        if (!$registerButton.classList.contains('clickable'))
            $registerButton.classList.add('clickable');
        $registerButton.disabled = false;
    } else {
        if ($registerButton.classList.contains('clickable'))
            $registerButton.classList.remove('clickable');
        $registerButton.disabled = true;
    }
}

$('#id-input').on('propertychange change keyup paste input', function () {
    idValue = $(this).val();
    checkValue();
});

$('#pw-input').on('propertychange change keyup paste input', function () {
    pwValue = $(this).val();
    checkValue();
});

$('#pw-check-input').on('propertychange change keyup paste input', function () {
    pwCheckValue = $(this).val();
    checkValue();
});

$('#name-input').on('propertychange change keyup paste input', function () {
    nameValue = $(this).val();
    checkValue();
});

$('#email-input').on('propertychange change keyup paste input', function () {
    emailValue = $(this).val();
    checkValue();
});

checkValue();
