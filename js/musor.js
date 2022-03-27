function animate (column, row, speed, box, next) {
    let standart_speed = 200;
    if (column === -1) {
        box.animate({
            top: (row -1) * 25 + '%',
        }, (speed * standart_speed), 'linear', next);
    } else if (row === -1) {
        box.animate({
            left: (column - 1) * 33.333 + '%',
        }, (speed * standart_speed), 'linear', next);
    } else {
        box.animate({
            left: (column - 1) * 33.333 + '%',
            top: (row -1) * 25 + '%',
        }, (speed * standart_speed), 'linear', next);
    }
}
let anim_play = false,
    anim_index = 0;

main_intro_slider.on('slideChange', function () {
    if (!anim_play) {
        anim_play = true;
        switch (anim_index % 2) {
            case 0:
                setTimeout(function () {anim_play = false}, 1500);
                $('.main-intro__box').each(function (index) {
                    let box = $(this);
                    switch (index) {
                        case 0:
                            animate(2, -1, 1, box, function () {
                                animate(-1, 2, 1, box, function () {
                                    box.css('background-color', '#BAC9D9');
                                });
                            });
                            break;
                        case 1:
                            animate(3, -1, 1, box, function () {
                                animate(-1, 4, 3, box, function () {
                                    box.css('background-color', '#CD010C')
                                        .css('border-radius', '10rem 0 0 0');
                                });
                            });
                            break;
                        case 2:
                            animate(-1, 2, 1, box, function () {});
                            break;
                        case 3:
                            animate(-1, 4, 2, box, function () {});
                            break;
                        case 4:
                            animate(-1, 3, 1, box, function () {
                                animate(2, -1, 1, box, function () {});
                            });
                            break;
                        case 5:
                            box.css('border-radius', '0 10rem 0 0');
                            break;
                        case 6:
                            animate(1, -1, 1, box, function () {
                                animate(-1, 1, 2, box, function () {});
                            });
                            break;
                        case 7:
                            animate(-1, 1, 2, box, function () {
                                box.css('border-radius', '0 0 10rem 0');
                            });
                            break;
                        case 8:
                            animate(2, -1, 1, box, function () {
                                animate(-1, 2, 2, box, function () {
                                    animate(1, -1, 1, box, function () {})
                                });
                            });
                            break;
                        case 9:
                            animate(1, -1, 1, box, function () {
                                animate(-1, 1, 3, box, function () {
                                    animate(2, -1, 1, box, function () {})
                                });
                            });
                            break;
                        case 10:
                            animate(-1, 3, 1, box, function () {
                                box.css('border-radius', '10rem 0');
                            });
                            break;
                    }
                });
                anim_index += 1;
                break;
            case 1:
                setTimeout(function () {anim_play = false}, 1500);
                $('.main-intro__box').each(function (index) {
                    let box = $(this);
                    switch (index) {
                        case 0:
                            animate(1, -1, 1, box, function () {
                                animate(-1, 1, 1, box, function () {
                                    box.css('background-color', '#FFF');
                                });
                            });
                            break;
                        case 1:
                            animate(2, -1, 1, box, function () {
                                animate(-1, 1, 3, box, function () {
                                    box.css('background-color', '#BAC9D9')
                                        .css('border-radius', '0 0 10rem 0');
                                });
                            });
                            break;
                        case 2:
                            $(this).animate({
                                top: '0'
                            }, 300, 'linear');
                            animate(-1, 1, 1, box, function () {});
                            break;
                        case 3:
                            animate(-1, 2, 2, box, function () {});
                            break;
                        case 4:
                            animate(-1, 2, 1, box, function () {
                                animate(3, -1, 1, box, function () {});
                            });
                            break;
                        case 5:
                            box.css('border-radius', '10rem 0 0 0');
                            break;
                        case 6:
                            animate(2, -1, 1, box, function () {
                                animate(-1, 3, 2, box, function () {});
                            });
                            break;
                        case 7:
                            animate(-1, 3, 2, box, function () {
                                box.css('border-radius', '10rem 0 0 0');
                            });
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
                            animate(2, -1, 0.01, box, function () {
                                animate(-1, 4, 0.01, box, function () {
                                    animate(1, -1, 0.01, box, function () {})
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
                            animate(1, -1, 0.01, box, function () {
                                animate(-1, 4, 0.01, box, function () {
                                    animate(2, -1, 0.01, box, function () {})
                                });
                            });
                            break;
                        case 10:
                            animate(-1, 4, 1, box, function () {
                                box.css('border-radius', '0 10rem');
                            })
                            break;
                    }
                });
                anim_index += 1;
                break;
        }
    }
});