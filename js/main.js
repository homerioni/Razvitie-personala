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
        $('.header__services-menu-name').removeClass('open')
            .parent().find('.header__services-list').slideUp();
        $(this).parent().toggleClass('open')
            .parent().find('.header__about-list').slideToggle();
    });

    // main-intro анимация картинок
    $('.main-intro__slider-btn').click(function () {
        $('.main-intro__box').each(function (index) {
            let box = $(this);
            switch (index) {
                case 0:
                    $(this).animate({
                        left: '33.333%'
                    }, 300, 'linear', function () {
                        $(this).animate({
                            top: '25%'
                        }, 300, 'linear')
                            .css('background-color', '#BAC9D9');
                    });
                    break;
                case 1:
                    $(this).animate({
                        left: '66.666%'
                    }, 300, 'linear', function () {
                        $(this).animate({
                            top: '75%',
                        }, 900, 'linear')
                            .css('background-color', '#CD010C')
                            .css('border-radius', '10rem 0 0 0');
                    });
                    break;
                case 2:
                    $(this).animate({
                        top: '25%'
                    }, 300, 'linear');
                    break;
                case 3:
                    $(this).animate({
                        top: '75%'
                    }, 600, 'linear');
                    break;
                case 4:
                    $(this).animate({
                        top: '50%'
                    }, 300, 'linear', function () {
                        $(this).animate({
                            left: '33.333%'
                        }, 300, 'linear');
                    });
                    break;
                case 5:
                    $(this).animate({
                    }, 0, 'linear')
                        .css('border-radius', '0 10rem 0 0');
                    break;
                case 6:
                    $(this).animate({
                        left: 0
                    }, 300, 'linear', function () {
                        $(this).animate({
                            top: 0,
                        }, 600, 'linear');
                    });
                    break;
                case 7:
                    $(this).animate({
                        top: 0
                    }, 600, 'linear')
                        .css('border-radius', '0 0 10rem 0');
                    break;
                case 8:
                    $(this).animate({
                        left: '33.333%'
                    }, 300, 'linear', function () {
                        $(this).animate({
                            top: '25%',
                        }, 600, 'linear', function () {
                            $(this).animate({
                                left: 0,
                            }, 300, 'linear');
                        });
                    });
                    break;
                case 9:
                    $(this).animate({
                        left: 0
                    }, 300, 'linear', function () {
                        $(this).animate({
                            top: 0,
                        }, 900, 'linear', function () {
                            $(this).animate({
                                left: '33.333%',
                            }, 300, 'linear');
                        });
                    });
                    break;
                case 10:
                    $(this).animate({
                        top: '50%'
                    }, 300, 'linear')
                        .css('border-radius', '10rem 0');
                    break;
            }
        });
    });
});