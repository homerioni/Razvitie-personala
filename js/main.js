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

    // Маски для input
    $('.input-phone').mask('+7 (999) 999-99-99');
    $('.mask-snils').mask('999-999-999 99');
    $('.mask-diplom').mask('999999 9999999');

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
                $('.services__filter-block').slideUp(100);
                $(this).parent().find('.services__services-list').slideUp(300);
                setTimeout(function () {
                    this_btn.removeClass('open');
                }, 250);
            } else {
                $(this).addClass('open')
                    .parent().find('.services__services-list').slideDown(300);
                setTimeout(function () {
                    $('.services__filter-block').slideDown(100);
                }, 250)
            }
        });
        $('.services__filter-name').click(function () {
            $(this).toggleClass('open');
            $('.services__label-range').slideToggle();
        });
    }

    // burger menu
    $('.header__burger-menu-btn').click(function () {
        if ($('.personal__menu--burger').is(':visible')) {
            $('.personal__menu--burger').slideUp();
            $('.header__mobile-personal').removeClass('open');
            $('.header__burger-menu').slideToggle();
            $(this).toggleClass('open');
        } else {
            $('body').toggleClass('lock');
            $('.header__burger-menu').slideToggle();
            $(this).toggleClass('open');
        }
    });
    $('.header__mobile-personal').click(function () {
        if ($('.header__burger-menu').is(':visible')) {
            $('.header__burger-menu').slideUp();
            $('.header__burger-menu-btn').removeClass('open');
            $('.personal__menu--burger').slideToggle();
            $(this).toggleClass('open');
        } else {
            $('body').toggleClass('lock');
            $('.personal__menu--burger').slideToggle();
            $(this).toggleClass('open');
        }
    });

    // Search mobile
    $('.search-mobile').click(function () {
        $('.header__block--mobile').addClass('active');
    });
    $('.header__search-bg').click(function () {
        $('.header__block--mobile').removeClass('active');
    });

    // order function
    $('.calculate__input--select').change(function () {
        if ($(this).val() === 'corporate') {
            $('.calculate').addClass('corporate');
        } else {
            $('.calculate').removeClass('corporate');
            $('.calculate__item--corporate').find('input').val('');
        }
    });

    // personal edit
    $('.personal__edit-btn').click(function () {
        $(this).parent().parent().find('.calculate__input').removeAttr('disabled');
        $(this).parent().find('.calculate__btn').css('display', 'flex');
    });
    $('.personal__buttons .calculate__btn').click(function () {
        $(this).parent().parent().find('.calculate__input').attr('disabled', 'disabled');
        $(this).parent().find('.calculate__btn').hide();
    });
    $('textarea.calculate__input').each(function () {
        $(this)[0].style.height = 'auto';
        $(this)[0].style.height = $(this)[0].scrollHeight + 2 + "px";
    });
    $('textarea.calculate__input').on('input', function () {
        $(this)[0].style.height = 'auto';
        $(this)[0].style.height = $(this)[0].scrollHeight + 2 + "px";
    });

    // Services sub list
    $('button.services__btn').click(function () {
        let _this = $(this);

        _this.parent().find('.services__card-sub-item').slideToggle(250);
        if (_this.parent().hasClass('open')) {
            $('.services__card-open-bg').hide();
            setTimeout(function () {
                _this.parent().toggleClass('open');
            }, 250);
        } else {
            _this.parent().toggleClass('open');
            $('.services__card-open-bg').show();
        }
    });
    $('.services__card-open-bg').click(function () {
        $(this).hide();
        $('.services__card-sub-item').slideUp(250);
        setTimeout(function () {
            $('.services__item.open').removeClass('open');
        }, 250);
    });

    // Main sub list
    $('.prog-study__item-btn').click(function () {
        let _this = $(this);

        _this.parent().find('.prog-study__card-sub-item').slideToggle(250);
        if (_this.parent().hasClass('open')) {
            $('.prog-study__card-open-bg').hide();
            setTimeout(function () {
                _this.parent().toggleClass('open');
            }, 250);
        } else {
            _this.parent().toggleClass('open');
            $('.prog-study__card-open-bg').show();
        }
    });
    $('.prog-study__card-open-bg').click(function () {
        $(this).hide();
        $('.prog-study__card-sub-item').slideUp(250);
        setTimeout(function () {
            $('.prog-study__item.open').removeClass('open');
        }, 250);
    });

    // Disable filter
    $('.filter-disable').click(function () {
        $('.services__label-range').addClass('disabled');
    });
    $('.services__label-range').focusin(function () {
        $(this).removeClass('disabled');
    });

});