$(document).ready(function () {
    var overlay = $('.overlay');
    var modal = $('.modal');
    $('.col-sm-3').on('click', function () {

        overlay.fadeTo(400, 1, function () {
            modal.show("slow");
        });

        $('.close').on('click', function () {
            modal.hide(600);

            overlay.fadeOut(600);

        });


    });
});