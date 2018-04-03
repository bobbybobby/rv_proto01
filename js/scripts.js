$(".flip-card-buttons .button").on("click", function () {

    let validateClicked = $(this).hasClass('yes');

    $(".card-flipper").css("transform", "rotateY(0deg)");

    $(this).closest(".card").find(".card-back-left").show();
    $(this).closest(".card").find(".card-back-right").show();

    if (validateClicked) {
        $(this).closest(".card").find(".card-back-left").hide();
        $(this).closest(".card").find(".card-flipper").css("transform", "rotateY(180deg)");
    } else {
        $(this).closest(".card").find(".card-back-right").hide();
        $(this).closest(".card").find(".card-flipper").css("transform", "rotateY(-180deg)");
    }
    
});

$(".cancel button").on("click", function () {

    $(".card-flipper").css("transform", "rotateY(0deg)");

    $(this).closest(".card").find(".card-back-left").show();
    $(this).closest(".card").find(".card-back-right").show();

});
