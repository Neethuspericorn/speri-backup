$(document).ready(function () {
    $(window).width() < "991" &&
        $(".nav-link-mob").click(function () {
            $(this).closest("li").find(".sub-menu-outer").slideToggle(); 
        })
});