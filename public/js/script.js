//jshint esversion:6

AOS.init({
    duration: 2000
});

$(document).ready(() => {
    $(".lead").click(() => {
        // alert("CLick activated");
        $('html,body').animate({
            scrollTop: $('#name').offset.top
        }, 'slow');
        $('#name').focus();
    });
    $('#time').datetimepicker();
});