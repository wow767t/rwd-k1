$(document).ready(function (){
    $('.header__menu--btn').on('click', function (e) {
        e.preventDefault;
        $('.header').toggleClass('header__menu--toggle');

    });



});