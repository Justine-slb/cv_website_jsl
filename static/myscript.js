$(document).ready(function () {
    $("#icon").on("click", function () {

        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";

            $(this).find('.fa').removeClass('fa-bars').addClass('fa-times');
        } else {
            x.className = "topnav";
            $(this).find('.fa').removeClass('fa-times').addClass('fa-bars');
        }

    });
});
