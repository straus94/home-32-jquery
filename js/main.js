$(function () {
    $('.list__head').on('click', function () {
        // $('.list__head').next().slideDown(700);
        // $(this).next().slideUp();
        // $('.list__head').next().hide(700);
        // $(this).next().slideToggle();
        // let $this = $(this);
        // this.preventDefault();
    if ($(this).next().hasClass('show')) {
        $(this).next().removeClass('show');
        $(this).next().hide(700);
        console.log('ok');
    } else {
        $(this).parent().parent().find('.list__body').removeClass('show');
        $(this).parent().parent().find('.list__body').slideUp(700);
        $(this).next().toggleClass('show');
        $(this).next().slideToggle(400);
        console.log('neok');
    }

        
    });
});