$(document).ready(function () {
    let $blk = $('.block')
    let $left = $('.left')
    let $right = $('.right')
    let $cont = $('.cont')
    let $stone = document.querySelectorAll('.box_stone');
    let $scetch = document.querySelectorAll('.count_scetch');
    let $camBot = document.querySelectorAll('.bot_cam');
    let $stars = document.querySelectorAll('.star');
    console.log($stars);
    $('.box_stone_l').each(function () {
        for (let Si = 0; Si <= $stone.length; Si++) {
            let rand1 = Math.floor(Math.random() * 3801 + 150)
            let rand2 = Math.floor(Math.random() * 101 + 150)
            $(this).css(`left`, `${rand1}px`)
            $(this).css(`top`, `${rand2}px`)
        }
    })
    $('.selec_bot').each(function () {
        for (let Si = 0; Si <= $camBot.length; Si++) {
            let rand1 = Math.floor(Math.random() * 3501 + 550)
            let rand2 = Math.floor(Math.random() * 3501 + 550)
            $(this).css(`left`, `${rand1}px`)
            $(this).css(`top`, `${rand2}px`)
        }
    })
    function CarMove(i, j, r, d, l) {
        let $z = this
        $z.i = i
        $z.j = j
        $z.r = r
        $z.d = d
        $z.l = l

        $z.RotateInt = function () { // pastga buradi

            return $z.RotateIntr = setInterval(function () {
                $z.r = $z.r + 1.5
                $blk.css('transform', `rotate(${$z.r}deg)`)
                if ($z.r > 360) {
                    $z.r = 0
                } else if ($z.r < 0) {
                    $z.r = 360
                }
            }, 10)
        }
        $z.RotateIntL = function () { // tepaga buradi
            return $z.RotateIntrL = setInterval(function () {
                $z.r = $z.r - 1.5
                $blk.css('transform', `rotate(${$z.r}deg)`)
                if ($z.r > 360) {
                    $z.r = 0
                } else if ($z.r < 0) {
                    $z.r = 360
                }
            }, 10)
        }
        $z.RotateClear = function () {
            clearInterval($z.RotateIntr)
        }
        $z.RotateClearL = function () {
            clearInterval($z.RotateIntrL)
        }

        $z.interDown = function () {
            if ($z.l < 1) {
                $z.interD = setInterval(function () {
                    if ($z.r <= 90) {
                        $z.i = $z.i + ($z.d / 90) * (90 - $z.r)
                        $z.j = $z.j + ($z.d / 90) * $z.r
                        $('.dust').css('top', $('.gas').offset().top - 18)
                        $('.dust').css('left', $('.gas').offset().left - 40)
                    } else if ($z.r <= 180) {
                        $z.i = $z.i + ($z.d / 90) * (90 - $z.r)
                        $z.j = $z.j + ($z.d / 90) * (180 - $z.r)
                        $('.dust').css('top', $('.gas').offset().top - 50)
                        $('.dust').css('left', $('.gas').offset().left - 35)
                    } else if ($z.r <= 270) {
                        $z.i = $z.i + ($z.d / 90) * (0 - (270 - $z.r))
                        $z.j = $z.j + ($z.d / 90) * (180 - $z.r)
                        $('.dust').css('top', $('.gas').offset().top - 35)
                        $('.dust').css('left', $('.gas').offset().left - 15)
                    } else if ($z.r <= 360) {
                        $z.i = $z.i + ($z.d / 90) * (0 - (270 - $z.r))
                        $z.j = $z.j + ($z.d / 90) * (0 - (360 - $z.r))
                        $('.dust').css('top', $('.gas').offset().top - 30)
                        $('.dust').css('left', $('.gas').offset().left - 20)
                    }
                    let $winW1 = $('.position').offset().left - $('.position_3').offset().left
                    let $winW2 = $('.position_2').offset().top - $('.position_3').offset().top
                    let Wbol = $winW1 / 2
                    let Wkop = $winW2 / 2
                    $blk.css('left', `${$z.i}px`)
                    $blk.css('top', `${$z.j}px`)
                    $('html, body').scrollTop($z.j - Wkop - 200)
                    $('html, body').scrollLeft($z.i - Wbol)


                }, 8)
                $z.l++
            }
            return
        }
        $z.interDown()
        let iKey = 0
        let lKey = 0
        function KeyDown(e) {
            if (e.key === 'Right' || e.key === 'ArrowRight') {
                if (iKey == 0) {
                    $z.RotateInt()
                    iKey++
                }
            }
            if (e.key === 'Left' || e.key === 'ArrowLeft') {
                if (lKey == 0) {
                    $z.RotateIntL()
                    lKey++
                }
            }
            if (e.key === 'Enter') {
                window.location.href = './index.html'
            }
            if (e.key === 'Up' || e.key === 'ArrowUp') {
                $z.d = 4
            }
        }
        function KeyUp(e) {
            if (e.key === 'Right' ||
                e.key === 'ArrowRight' ||
                e.key === 'Left' ||
                e.key === 'ArrowLeft' ||
                e.key === 'Up' ||
                e.key === 'ArrowUp') {
                $z.RotateClear()
                $z.RotateClearL()
                lKey = 0
                iKey = 0
                $z.d = 2
            }
        }
        $right.on('mousedown', function () {
            $z.RotateInt()
        })
        $right.on('mouseup', function () {
            $z.RotateClear()
        })
        $right.on('mouseout', function () {
            $z.RotateClear()
        })
        $left.on('mousedown', function () {
            $z.RotateIntL()
        })
        $left.on('mouseup', function () {
            $z.RotateClearL()
        })
        $left.on('mouseout', function () {
            $z.RotateClearL()
        })
        document.addEventListener('keydown', KeyDown)
        document.addEventListener('keyup', KeyUp)
    }
    let degR = 0
    var carMove = new CarMove($blk.offset().left + 500, $blk.offset().top + 500, degR, 2, 0)



    function BotMove(bot, box, speed) {
        let $z = this
        $z.degB = 0
        $z.rB = 0
        $z.dB = 2
        $z.$bot = bot
        $z.$box = box
        $z.speed = speed
        $z.iB = $z.$bot.offset().left
        $z.jB = $z.$bot.offset().top
        let l = 0
        let i = 0
        let j = 0
        $z.BotForml = function () {
            if (i == 0) {
                $z.form = setInterval(function () {
                    $z.topBlk = $blk.offset().top - $z.$bot.offset().top
                    $z.leftBlk = $blk.offset().left - $z.$bot.offset().left
                    if ($z.topBlk > 0 && $z.leftBlk > 0) {
                        $z.degB = $z.topBlk / (($z.topBlk + $z.leftBlk) / 90)
                    } else if ($z.topBlk > 0 && $z.leftBlk < 0) {
                        $z.leftBlk8 = 0 - $z.leftBlk
                        $z.degB = ($z.leftBlk8 / (($z.topBlk + $z.leftBlk8) / 90)) + 90
                    } else if ($z.topBlk < 0 && $z.leftBlk < 0) {
                        $z.c270t = 0 - $z.topBlk
                        $z.c270l = 0 - $z.leftBlk
                        $z.degB = ($z.c270t / (($z.c270t + $z.c270l) / 90)) + 180
                    } else if ($z.topBlk < 0 && $z.leftBlk > 0) {
                        $z.c360t = 0 - $z.topBlk
                        $z.degB = ($z.leftBlk / (($z.c360t + $z.leftBlk) / 90)) + 270
                    }
                }, 50)
                return
            }
        }
        $z.degMovBot = function () {
            if (j == 0) {
                // $z.rB.RotateBot = setInterval(function () {
                    $z.interBotSet = setInterval(function () {
                    $z.$box.css('transform', `rotate(${$z.degB}deg)`)
                }, 20)
                // }, 200)
                j++
                return
            }
        }
        $z.BotMoveLt = function () {
            if (l == 0) {
                $z.interBot = setInterval(function () {
                    let $winW1 = $('.position').offset().left - $('.position_3').offset().left
                    let $winW2 = $('.position_2').offset().top - $('.position_3').offset().top
                    let Rrand1 = Math.floor(Math.random() * 250 + (($blk.offset().top - ($winW2)) - 300)) // top
                    let Rrand2 = Math.floor(Math.random() * ($winW1 + 600) + (($blk.offset().left - ($winW1 / 2)) - 300))
                    let Rrand3 = Math.floor(Math.random() * ($winW2 + 600) + (($blk.offset().top - ($winW2 / 2)) - 300)) // left
                    let Rrand4 = Math.floor(Math.random() * 250 + (($blk.offset().left - ($winW1 / 2)) - 300))
                    let Rrand5 = Math.floor(Math.random() * 250 + (($blk.offset().top + ($winW2 / 2)) + 50)) // bottom
                    let Rrand6 = Math.floor(Math.random() * ($winW1 + 600) + (($blk.offset().left - ($winW1 / 2)) - 300))
                    let Rrand7 = Math.floor(Math.random() * ($winW2 + 600) + (($blk.offset().top - ($winW2 / 2)) - 300)) // right
                    let Rrand8 = Math.floor(Math.random() * 250 + (($blk.offset().left + ($winW1 / 2)) + 50))
                    if ($z.degB <= 90) {
                        $z.jB = $z.jB + ($z.dB / 90) * $z.degB
                        $z.iB = $z.iB + ($z.dB / 90) * (90 - $z.degB)
                        if ($z.$bot.css('display') == 'none') {
                            $z.jB = Rrand5
                            $z.iB = Rrand6
                            $z.$bot.css('display', 'flex')
                            $z.$bot.css('opacity', 1)
                            $z.$bot.find('.main_box').find('.cont')
                        }
                    } else if ($z.degB <= 180) {
                        $z.jB = $z.jB + ($z.dB / 90) * (180 - $z.degB)
                        $z.iB = $z.iB + ($z.dB / 90) * (90 - $z.degB)
                        if ($z.$bot.css('display') == 'none') {
                            $z.jB = Rrand3
                            $z.iB = Rrand4
                            $z.$bot.css('display', 'flex')
                            $z.$bot.css('opacity', 1)
                            $z.$bot.find('.main_box').find('.cont')
                        }
                    } else if ($z.degB <= 270) {
                        $z.jB = $z.jB + ($z.dB / 90) * (180 - $z.degB)
                        $z.iB = $z.iB + ($z.dB / 90) * (0 - (270 - $z.degB))
                        if ($z.$bot.css('display') == 'none') {
                            $z.jB = Rrand1
                            $z.iB = Rrand2
                            $z.$bot.css('display', 'flex')
                            $z.$bot.css('opacity', 1)
                            $z.$bot.find('.main_box').find('.cont')
                        }
                    } else if ($z.degB <= 360) {
                        $z.jB = $z.jB + ($z.dB / 90) * (0 - (360 - $z.degB))
                        $z.iB = $z.iB + ($z.dB / 90) * (0 - (270 - $z.degB))
                        if ($z.$bot.css('display') == 'none') {
                            $z.jB = Rrand7
                            $z.iB = Rrand8
                            $z.$bot.css('display', 'flex')
                            $z.$bot.css('opacity', 1)
                            $z.$bot.find('.main_box').find('.cont')
                        }
                    }
                    $z.$bot.css('top', $z.jB)
                    $z.$bot.css('left', $z.iB)
                }, $z.speed)
                l++
            }
        }
        $z.BotForml()
        $z.degMovBot()
        $z.BotMoveLt()
    }
    var botMove1 = new BotMove($('.bot_block1'), $('.Bot_box1'), Math.floor(Math.random() * 10 + 9))
    var botMove2 = new BotMove($('.bot_block2'), $('.Bot_box2'), Math.floor(Math.random() * 10 + 9))
    var botMove3 = new BotMove($('.bot_block3'), $('.Bot_box3'), Math.floor(Math.random() * 10 + 9))
    var botMove4 = new BotMove($('.bot_block4'), $('.Bot_box4'), Math.floor(Math.random() * 10 + 9))
    var botMove5 = new BotMove($('.bot_block5'), $('.Bot_box5'), Math.floor(Math.random() * 10 + 9))
    let i = 0
    if (i == 0) {
        let countMs = 1
        Counter = setInterval(function () {
            if (i == 0) {
                if (countMs >= 10) {
                    $('.mil_zero').html('')
                }
            }
            if (i == 0) {
                $('.mil').html(countMs)
            }
            countMs += 1
            if (countMs == 100) {
                countMs = 0
            }
        }, 10)
        let countS = 0
        CounterS = setInterval(function () {
            countS++
            if (countS == 60) {
                countS = 0
            }
            if (i == 0) {
                if (countS >= 10) {
                    $('.secHel').html('')
                }
            }
            if (i == 0) {
                $('.sec').html(countS)
            }
        }, 1000)
        let countM = 0
        CounterM = setInterval(() => {
            countM++
            if (i == 0) {
                $('.min').html(countM)
            }
        }, 60000);

        let contSStop = 0
        CounterStar = setInterval(() => {
            if (i == 0) {
                if (countS >= 10) {
                    if (contSStop == 0) {
                        for (let i = 0; i < 1; i++) {
                            $stars[i].style.color = 'yellow'
                        }
                        contSStop++
                    }
                }

            }
        }, 400)
        let contSMtop = 0
        CounterStarMin1 = setInterval(() => {
            if (i == 0) {
                if (countS >= 30) {
                    if (contSMtop == 0) {
                        for (let i = 0; i < 2; i++) {
                            $stars[i].style.color = 'yellow'
                        }
                        contSMtop++
                    }
                }

            }
        }, 400)
        let contSHtop = 0
        CounterStarMin2 = setInterval(() => {
            if (i == 0) {
                if (countM >= 1) {
                    if (contSHtop == 0) {
                        for (let i = 0; i < 3; i++) {
                            $stars[i].style.color = 'yellow'
                        }
                        contSHtop++
                    }
                }
            }
        }, 400)
        let contSHstop = 0
        CounterStarMin3 = setInterval(() => {
            if (i == 0) {
                if (countM >= 1) {
                    if (contSHstop == 0) {
                        for (let i = 0; i < 3; i++) {
                            $stars[i].style.color = 'yellow'
                        }
                        contSHstop++
                    }
                }
            }
        }, 400)
        let contSHMtop = 0
        CounterStarMin4 = setInterval(() => {
            if (i == 0) {
                if (countM >= 1 && countS >= 30) {
                    if (contSHMtop == 0) {
                        for (let i = 0; i < 4; i++) {
                            $stars[i].style.color = 'yellow'
                        }
                        contSHMtop++
                    }
                }
            }
        }, 400)
        let contSHMMtop = 0
        CounterStarMin5 = setInterval(() => {
            if (i == 0) {
                if (countM >= 2) {
                    if (contSHMMtop == 0) {
                        for (let i = 0; i < 5; i++) {
                            $stars[i].style.color = 'yellow'
                        }
                        contSHMMtop++
                    }
                }
            }
        }, 400)

    }
    let positT
    let positL
    let iSikl = 0
    $boxBotStopInt = setInterval(function () {
        let $winW1 = $('.position').offset().left
        let $winW2 = $('.position_2').offset().top
        $('.count').each(function () {
            let $z = $(this)
            $stopCntT = $(this).offset().top
            $stopCntL = $(this).offset().left
            $contPosT = $('.block').offset().top
            $contPosL = $('.block').offset().left
            if ($stopCntT >= $contPosT - (($winW2 / 2) + 150) && $stopCntL >= $contPosL - (($winW1 / 2) + 150) && $stopCntT <= $contPosT + (($winW2 / 2) + 150) && $stopCntL <= $contPosL + (($winW1 / 2) + 150)) {
                dontScroll = function (cn1, cn4) {
                    let $cnt1 = cn1
                    let $cnt4 = cn4
                    $cnt4.each(function () {
                        $c4Pt = $(this).offset().top
                        $c4Pl = $(this).offset().left
                        $cnt1.each(function () {
                            $c1Pt = $(this).offset().top
                            $c1Pl = $(this).offset().left
                            $cont.each(function () {
                                let $z = $(this)
                                $contT = Math.floor($(this).offset().top)
                                $contL = Math.floor($(this).offset().left)
                                if (($c1Pt <= $contT && $c1Pl <= $contL && $contT <= $c4Pt && $contL <= $c4Pl)) {
                                    if (iSikl == 0) {
                                        positT = $z.offset().top
                                        positL = $z.offset().left
                                        iSikl++
                                    }
                                    $('.gif_1').css('top', positT - 110)
                                    $('.gif_1').css('left', positL - 140)
                                    $('.gif_2').css('top', positT - 70)
                                    $('.gif_2').css('left', positL - 70)
                                    $('.gif_1').css('display', 'block')
                                    $('.gif_2').css('display', 'block')
                                    setTimeout(function () {
                                        $('.gif_1').css('display', 'none')
                                        $('.gif_2').css('display', 'none')
                                        iSikl = 0
                                    }, 400)
                                }
                                if (($c1Pt <= $contT && $c1Pl <= $contL && $contT <= $c4Pt && $contL <= $c4Pl)) {
                                    $cnt1.parent().parent().parent().parent().parent('.selec_bot').hide()
                                    $cnt4.parent().parent().parent().parent().parent('.selec_bot').hide()
                                    $cnt1.parent().parent().parent().parent().parent().css('opacity', 0)
                                    $cnt4.parent().parent().parent().parent().parent().css('opacity', 0)
                                    $cnt1.parent().parent().parent().parent().parent('.box_stone_l').find($cnt1).removeClass()
                                    $cnt4.parent().parent().parent().parent().parent('.box_stone_l').find($cnt4).removeClass()
                                    $z.parent().parent().hide()
                                    $z.parent().parent().hide('.selec_bot')
                                    if ($z.parent().parent().attr('data-block') == 'stop' && i == 0) {
                                        setTimeout(function () {
                                            $('.overlay').show()
                                        }, 800)
                                        i++
                                    }
                                }
                            })
                        })
                    })
                }
                let lSch = 1
                for (let iSch = 0; iSch <= $scetch.length - 1; iSch++) {
                    iSch++
                    lSch++
                    dontScroll($z.parent().parent().find($(`.count${iSch}`)), $z.parent().find($(`.count${lSch}`)))
                    lSch++
                }
            }
        })
    }, 250)

});