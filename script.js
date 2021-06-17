$(document).ready(function () {

    //tab click event switcher
    $(".container__li").click(function () {
        $(this)
            .addClass("active")
            .removeClass("disable");
        $(this)
            .siblings()
            .removeClass("active")
            .addClass("disable");
        $(".tabs")
            .css("display", "none")
            .eq($(this).index())
            .css("display", "block");
    });
});