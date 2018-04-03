$(".card-triangle-button").on("click", function () {

    choice = $(this).parent().attr("class");
    card = $(this).parent().parent().parent().parent().parent().attr("id");

    $(".card-flipper").css("transform", "rotateY(0deg)");

    $("#" + card + " .card-back-left").show();
    $("#" + card + " .card-back-right").show();

    if (choice === "card-button-left") {
        $("#" + card + " .card-back-right").hide();
        $("#" + card + " .card-flipper").css("transform", "rotateY(-180deg)");
    } else if (choice === "card-button-right") {
        $("#" + card + " .card-back-left").hide();
        $("#" + card + " .card-flipper").css("transform", "rotateY(180deg)");
    }

});
