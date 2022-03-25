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

    // reviews rating block
    let rating = Number($('.reviews__average-rating').attr('rating')).toFixed(1); //Беру значение и округляю до 1 знака после запятой
    $('.reviews__rating-number').text(rating.slice(0, 1) + ',' + rating.slice(-1)); //Вставляю в текст оценку
    $('.reviews__rating-icons-full').css('width', Math.trunc(rating) * 20 + 4 + Number(rating.slice(-1)) / 10 * 12 + '%'); //Высчитываю ширину для коректного отображения звезд
});