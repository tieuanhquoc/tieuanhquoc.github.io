var scrollNow = 0;
$(document).ready(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

var scroll = $('html').scrollTop();
$(".navbar li a").click(function () {
    $(".navbar ul li a").removeClass('selected');
    $(this).addClass('selected');
})