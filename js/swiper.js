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
});
*/

// Пересчет rem в px для swiper
const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        // где 375 это ширина моб версии макета
        return (100/375) * (0.1 * $(window).width()) * rem;
    }
}

let intro_index = 0;
let x = 0;
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

    on: {
        slideChange: function () {
            switch (intro_index % 2) {
                case 0:
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
                    break;
                case 1:
                    $('.main-intro__box').each(function (index) {
                        let box = $(this);
                        switch (index) {
                            case 0:
                                $(this).animate({
                                    left: 0
                                }, 300, 'linear', function () {
                                    $(this).animate({
                                        top: 0
                                    }, 300, 'linear')
                                        .css('background-color', '#FFF');
                                });
                                break;
                            case 1:
                                $(this).animate({
                                    left: '33.333%'
                                }, 300, 'linear', function () {
                                    $(this).animate({
                                        top: '0',
                                    }, 900, 'linear')
                                        .css('background-color', '#BAC9D9')
                                        .css('border-radius', '0 0 10rem 0');
                                });
                                break;
                            case 2:
                                $(this).animate({
                                    top: '0'
                                }, 300, 'linear');
                                break;
                            case 3:
                                $(this).animate({
                                    top: '25%'
                                }, 600, 'linear');
                                break;
                            case 4:
                                $(this).animate({
                                    top: '25%'
                                }, 300, 'linear', function () {
                                    $(this).animate({
                                        left: '66.666%'
                                    }, 300, 'linear');
                                });
                                break;
                            case 5:
                                $(this).animate({
                                }, 0, 'linear')
                                    .css('border-radius', '10rem 0 0 0');
                                break;
                            case 6:
                                $(this).animate({
                                    left: '33.333%'
                                }, 300, 'linear', function () {
                                    $(this).animate({
                                        top: '50%',
                                    }, 600, 'linear');
                                });
                                break;
                            case 7:
                                $(this).animate({
                                    top: '50%'
                                }, 600, 'linear')
                                    .css('border-radius', '10rem 0 0 0');
                                break;
                            case 8:
                                $(this).animate({
                                    left: '33.333%'
                                }, 300, 'linear', function () {
                                    $(this).animate({
                                        top: '75%',
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
                                        top: '75%',
                                    }, 900, 'linear', function () {
                                        $(this).animate({
                                            left: '33.333%',
                                        }, 300, 'linear');
                                    });
                                });
                                break;
                            case 10:
                                $(this).animate({
                                    top: '75%'
                                }, 300, 'linear')
                                    .css('border-radius', '0 10rem');
                                break;
                        }
                    });
                    break;
            }

            intro_index += 1;
        }
    }
});