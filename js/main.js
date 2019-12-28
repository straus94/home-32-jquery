$(function () {
    $('.list__head').on('click', function () {
        $('.list__head').next().hide(700);
        $(this).next().slideToggle();
    });
});