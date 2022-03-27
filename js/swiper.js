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
        nextEl: '.offers__arrow-right',
        prevEl: '.offers__arrow-left',
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
});

let offers_current_slide = $('.offers__current-slide'),
    offers_slides = $('.offers__pagination').find('.swiper-pagination-bullet').length;

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

offers_slider.on('slideChange', function () {
    if (offers_slider.activeIndex < 9) {
        offers_current_slide.text('0' + (offers_slider.activeIndex + 1));
    } else {
        offers_current_slide.text(offers_slider.activeIndex + 1);
    }
});



const reviews_slider = new Swiper('.reviews__slider', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: rem(4.6),

    breakpoints: {
        768: {
            slidesPerView: 2.5,
        },
        0: {
            slidesPerView: 1,
        },
    },

    pagination: {
        el: '.reviews__pagination',
        type: 'bullets',
        clickable: true,
    },

    navigation: {
        nextEl: '.reviews__arrow-right',
        prevEl: '.reviews__arrow-left',
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
});

let reviews_current_slide = $('.reviews__current-slide'),
    reviews_slides = $('.reviews__pagination').find('.swiper-pagination-bullet').length;

if (reviews_slides < 10) {
    $('.reviews__total-slide').text('0' + reviews_slides);
} else {
    $('.reviews__total-slide').text(reviews_slides);
}
if (reviews_slider.realIndex < 9) {
    reviews_current_slide.text('0' + (reviews_slider.realIndex + 1));
} else {
    reviews_current_slide.text(reviews_slider.realIndex + 1);
}

reviews_slider.on('slideChange', function () {
    if (reviews_slider.realIndex < 9) {
        reviews_current_slide.text('0' + (reviews_slider.realIndex + 1));
    } else {
        reviews_current_slide.text(reviews_slider.realIndex + 1);
    }
});



const partners_slider = new Swiper('.partners__slider', {
    direction: 'horizontal',

    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: rem(1),
            grid: {
                fill: 'row',
                rows: 2,
            },
        },
        0: {
            slidesPerView: 1.13,
            spaceBetween: rem(1),
        },
    },

    pagination: {
        el: '.partners__pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.partners__arrow-right',
        prevEl: '.partners__arrow-left',
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
});

let partners_current_slide = $('.partners__current-slide'),
    partners_slides = $('.partners__pagination').find('.swiper-pagination-bullet').length;

if (partners_slides < 10) {
    $('.partners__total-slide').text('0' + partners_slides);
} else {
    $('.partners__total-slide').text(partners_slides);
}
if (partners_slider.activeIndex < 9) {
    partners_current_slide.text('0' + (partners_slider.activeIndex + 1));
} else {
    partners_current_slide.text(partners_slider.activeIndex + 1);
}

partners_slider.on('slideChange', function () {
    if (partners_slider.activeIndex < 9) {
        partners_current_slide.text('0' + (partners_slider.activeIndex + 1));
    } else {
        partners_current_slide.text(partners_slider.activeIndex + 1);
    }
});