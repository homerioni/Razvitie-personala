/*
const reviews_slider = new Swiper('.reviews__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
        0: {},
    },
    pagination: {
        el: '',
        type: '',
    },
    navigation: {
        nextEl: '',
        prevEl: '',
    },
    autoplay: {
    },
    on: {
        slideChange: function () {
        }
    },
});
*/

// Пересчет rem в px для swiper
const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        // где 375 это ширина моб версии макета
        return (100/414) * (0.1 * $(window).width()) * rem;
    }
}

const main_intro_slider = new Swiper('.main-intro__slider', {
    direction: 'horizontal',
    // loop: true,
    slidesPerView: 1,

    pagination: {
        el: '.main-intro__pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
    },

    navigation: {
        nextEl: '.main-intro__arrow--right',
        prevEl: '.main-intro__arrow--left',
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
});

let offers_current_slide = $('.offers__current-slide');
const offers_slider = new Swiper('.offers__slider', {
    direction: 'horizontal',

    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: rem(4.6),
        },
        0: {
            slidesPerView: 1.11,
            spaceBetween: rem(1),
        },
    },

    pagination: {
        el: '.offers__pagination',
        type: 'bullets',
        clickable: true,
    },

    navigation: {
        nextEl: '.offers__arrow--right',
        prevEl: '.offers__arrow--left',
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },

    on: {
        slideChange: function () {
            if (offers_slider.activeIndex < 9) {
                offers_current_slide.text('0' + (offers_slider.activeIndex + 1));
            } else {
                offers_current_slide.text(offers_slider.activeIndex + 1);
            }
        },
    },
});

let offers_slides = $('.offers__pagination').find('.swiper-pagination-bullet').length;
if (offers_slides < 10) {
    $('.offers__total-slide').text('0' + offers_slides);
} else {
    $('.offers__total-slide').text(offers_slides);
}
if (offers_slider.activeIndex < 9) {
    offers_current_slide.text('0' + (offers_slider.activeIndex + 1));
} else {
    offers_current_slide.text(offers_slider.activeIndex + 1);
}