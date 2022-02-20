$(document).ready(function () {
    var infoToast = document.getElementById('infoToast');
    infoToast.addEventListener('hidden.bs.toast', function () {
        //roll-in-blurred-right
        $("#gitBtn").addClass("jello-horizontal");
    });
    var toast = new bootstrap.Toast(infoToast);
    toast.show();
});

$('#vertical-carousel').bind('mousewheel DOMMouseScroll', function (e) {
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        $(this).carousel('prev');
    }
    else {
        $(this).carousel('next');
    }
    e.preventDefault();
});

$("#vertical-carousel").on("touchstart", function (event) {
    var yTouchPointStart = event.originalEvent.touches[0].pageY;
    $(this).on("touchmove", function (event) {
        var yTouchPointEnd = event.originalEvent.touches[0].pageY;
        if (Math.floor(yTouchPointStart - yTouchPointEnd) > 1) {
            $(".carousel").carousel('next');
        }
        else if (Math.floor(yTouchPointStart - yTouchPointEnd) < -1) {
            $(".carousel").carousel('prev');
        }
    });
    $(".carousel").on("touchend", function () {
        $(this).off("touchmove");
    });
    event.preventDefault();
});

