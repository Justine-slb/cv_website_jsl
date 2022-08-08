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

function showorhide() {
    var x = document.getElementById("program_details");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}