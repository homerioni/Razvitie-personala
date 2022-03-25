'use strict'

$(document).ready(function () {

    // header функционал
    $('.header__services-menu-name').click(function () {
        $(this).toggleClass('open')
            .parent().find('.header__services-list').slideToggle();
    });
    $('.header__services-item-name').click(function () {
        $(this).toggleClass('open')
            .parent().find('.header__services-sub-list').slideToggle();
    });

    // main-intro анимация картинок

    // feedback custom checkbox
    $('.feedback__label--checkbox').click(function () {
        if ($(this).find('input').prop('checked')) {
            $(this).addClass('check');
        } else {
            $(this).removeClass('check');
        }
    });
});