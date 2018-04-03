$(".card-triangle-button").on("click", function () {

    choice = $(this).parent().attr("class");

    $(".card-flipper").css("transform", "rotateY(0deg)");

    $(this).closest(".card").find(".card-back-left").show();
    $(this).closest(".card").find(".card-back-right").show();

    if (choice === "card-button-left") {
        $(this).closest(".card").find(".card-back-right").hide();
        $(this).closest(".card").find(".card-flipper").css("transform", "rotateY(-180deg)");
    } else if (choice === "card-button-right") {
        $(this).closest(".card").find(".card-back-left").hide();
        $(this).closest(".card").find(".card-flipper").css("transform", "rotateY(180deg)");
    }
    
});

$(".cancel button").on("click", function () {

    $(".card-flipper").css("transform", "rotateY(0deg)");

    $(this).closest(".card").find(".card-back-left").show();
    $(this).closest(".card").find(".card-back-right").show();

});
