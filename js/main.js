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
    $('.header__about-menu-btn > svg').click(function () {
        $(this).parent().toggleClass('open')
            .parent().find('.header__about-list').slideToggle();
    });

});