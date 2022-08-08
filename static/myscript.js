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

document.addEventListener("adobe_dc_view_sdk.ready", function(){
    var adobeDCView = new AdobeDC.View({clientId: "8ad7b230708c488f8a6fe35a807b3c72", divId: "adobe-dc-view"});
    adobeDCView.previewFile({
        content:{location: {url: "img/cv_justine_seguin-le_boulanger.pdf"}},
        metaData:{fileName: "cv_justine_seguin-le_boulanger.pdf"}
    }, {embedMode: "IN_LINE"});
});

