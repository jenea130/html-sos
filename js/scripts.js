$(document).ready(function () {
    $('.header__lang select').styler({
        // onSelectOpened: function () {
        //     // к открытому селекту добавляется красная обводка
        //     // $(this).css('outline', '3px solid red');
        //     setTimeout(() => {
        //         $(".jq-selectbox__dropdown li").eq(0).css("visibility", "hidden");
        //     }, 1000)

        // }
    });
    $('.home-intro__down').on('click', function (e) {
        e.preventDefault();
        const id = $(this).attr('href');
        console.log(id);
        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 500);
    });
});
