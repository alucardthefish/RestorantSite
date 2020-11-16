$(document).ready(function(){
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        } else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });

    $("#reserveButton").click(function(){
        $("#formModal").modal('toggle');
        
    });


    $("#loginButton").click(function(){
        $("#loginModal").modal('toggle');
    });

    $("#formModal").on('hidden.bs.modal', function(){
        $("#formReservation").trigger('reset');
    });

    $("#loginModal").on('hidden.bs.modal', function(){
        $("#formLogin").trigger('reset');
    })


});