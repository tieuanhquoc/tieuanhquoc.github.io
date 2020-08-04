var scrollNow = 0;
$(document).ready(function () {
    // $("html, body").animate({ scrollTop: 0 }, "slow");
});

var scroll = $('html').scrollTop();
$(".navbar li a").click(function () {
    $(".navbar ul li a").removeClass('selected');
    $(this).addClass('selected');
})

// $(document).ready(function () {
//     navbar();
// });

// $(window).scroll(function () {
//     navbar();
//     // changeHas();
// })
// function navbar() {
//     var home = $('.intro').height();
//     if ($('html').scrollTop() > (home / 2)) {
//         $('.navbar').css("background-color", "rgbA(0, 0, 0, 0.8)");
//     } else {
//         $('.navbar').css("background-color", "transparent");
//     }


//     // check scroll
//     if ($('html').scrollTop() > 0) {
//         $(".navbar ul li a").removeClass('selected');
//         $('#navHome').addClass('selected');
//     }
//     if ($('html').scrollTop() > home) {
//         $(".navbar ul li a").removeClass('selected');
//         $('#navAbout').addClass('selected');
//     }
// }

// function changeHas() {
//     var hv = $('.intro').height();
//     if ($('html').scrollTop() == 0) {
//         location.hash = "section0";
//         // console.log('1')
//     }
//     if ($('html').scrollTop() > (hv-1) && $('html').scrollTop() < (hv * 2)) {
//         location.hash = "section1";
//         // console.log('2')
//     }
//     // console.log($('html').scrollTop());
// }



// window.onscroll = function () {
//     if (document.body.scrollTop > 1) {
//         $('.navbar').css("background-color", "yellow");
//         console.log(document.body.scrollTop)
//     }
// }