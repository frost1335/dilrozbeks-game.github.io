$(document).ready(function () {
    let lSchCreate = 13
    let count = 0
    /*         let $blocks = document.querySelectorAll('.box_stone_l');
            if($blocks.length <= 60){
                count = count + 50
                console.log($blocks.length);
            } */
    for (let iSchCreate = 12; iSchCreate <= 50; iSchCreate++) {
        iSchCreate++
        lSchCreate++
        let $test = $('.body').append(`<div class="bot_cam box_stone_l">
            <div class="cam_box">
            </div>
            <div class="cam_box">
                <div class="cont_box_l">
                    <div class="box_stone">
                        <div class="box_count_stone">
                            <div class="count count${iSchCreate} count_scetch"></div>
                            <div class="count"></div>
                        </div>
                        <div class="box_count_stone">
                            <div class="box"><img class="stone_img" src="./img/—Pngtree—hand drawn big stones and_4636718.png" alt=""></div>
                        </div>
                        <div class="box_count_stone">
                            <div class="count"></div>
                            <div class="count count${lSchCreate} count_scetch"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cam_box">
            </div>
        </div>`)
        lSchCreate++
    }
    for (let i = 0; i == 0; i++) {
        let $overlay = $('body').append(`<div class="overlay">
        <div class="menu">
            <h1>Busted</h1>
            <div class="score">
                0<span class="min">0</span>:<span class="secHel" >0</span><span class="sec">0</span>.<span class="mil_zero">0</span><span class="mil"></span>
            </div>
            <div class="stars">
            <span class="star1 star">*</span>
            <span class="star2 star">*</span>
            <span class="star3 star">*</span>
            <span class="star4 star">*</span>
            <span class="star5 star">*</span>
            </div>

            <a class="restart" href="./index.html">Tap enter to restart</a>

        </div>
    </div>`)
    }
});