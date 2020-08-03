$(".navbar li a").click(function () {
    $(".navbar ul li a").removeClass('selected');
    $(this).addClass('selected');
})

$(document).ready(function () {
    navbar();
});

$(window).scroll(function () {
    navbar();
})
function navbar() {
    var home = $('.intro').height();
    if ($('html').scrollTop() > (home - 50)) {
        $('.navbar').css("background-color", "rgbA(0, 0, 0, 0.7)");
    } else {
        $('.navbar').css("background-color", "transparent");
    }


    // check scroll
    if ($('html').scrollTop() > 0) {
        $(".navbar ul li a").removeClass('selected');
        $('#navHome').addClass('selected');
    }
    if ($('html').scrollTop() > home - 50) {
        $(".navbar ul li a").removeClass('selected');
        $('#navAbout').addClass('selected');
    }





}



// window.onscroll = function () {
//     if (document.body.scrollTop > 1) {
//         $('.navbar').css("background-color", "yellow");
//         console.log(document.body.scrollTop)
//     }
// }