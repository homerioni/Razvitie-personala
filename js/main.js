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

    // custom checkbox
    $('.label--checkbox').click(function () {
        if ($(this).find('input').prop('checked')) {
            $(this).addClass('check');
        } else {
            $(this).removeClass('check');
        }
    });

    // Маска для тедефона
    $('.input-phone').mask('+7 (999) 999-99-99');

    // reviews rating block
    let rating = Number($('.average-rating').attr('rating')).toFixed(1); //Беру значение и округляю до 1 знака после запятой
    $('.rating-number').text(rating.slice(0, 1) + ',' + rating.slice(-1)); //Вставляю в текст оценку
    $('.rating-icons-full').css('width', Math.trunc(rating) * 20 + 4 + Number(rating.slice(-1)) / 10 * 12 + '%'); //Высчитываю ширину для коректного отображения звезд

    // calculate cтилизация input-range
    let input_range = $('.calculate__input--range');
    $('.calculate__input-range-value').text(input_range.val());
    input_range.css({
        '--value': input_range.val(),
        '--min': input_range.attr('min'),
        '--max': input_range.attr('max'),
    });
    $(document).on('input change', '.calculate__input--range', function() {
        $(this).css({
            '--value': $(this).val(),
            '--min': $(this).attr('min'),
            '--max': $(this).attr('max'),
        });
        $('.calculate__input-range-value').text($(this).val());
    });
});