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

    // custom checkbox
    $('.label-checkbox').click(function () {
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

    // cтилизация input-range
    let input_range = $('.input-range');
    $('.range-min').text(input_range.attr('min'));
    $('.range-max').text(input_range.attr('max'));
    $('.input-range-value').text(input_range.val());
    input_range.css({
        '--value': input_range.val(),
        '--min': input_range.attr('min'),
        '--max': input_range.attr('max'),
    });
    $(document).on('input change', '.input-range', function() {
        $(this).css({
            '--value': $(this).val(),
            '--min': $(this).attr('min'),
            '--max': $(this).attr('max'),
        });
        $('.input-range-value').text($(this).val());
    });

    // about-content text limited
    $('.about-content__next').click(function () {
        $(this).css('display', 'none')
            .parent().find('article').css('display', 'block');
    });

    // services функционал левого меню
    $('.services__services-item-name').click(function () {
        $(this).toggleClass('open')
            .parent().find('.services__services-sub-list').slideToggle();
    });
    if ($(document).width() <= 768) {
        $('.services__services-menu-name').click(function () {
            let this_btn = $(this);
            if ($(this).hasClass('open')) {
                $(this).parent().find('.services__services-list').slideUp(300);
                setTimeout(function () {
                    this_btn.removeClass('open');
                }, 250);
            } else {
                $(this).addClass('open')
                    .parent().find('.services__services-list').slideDown(300);
            }
        });
    }
});