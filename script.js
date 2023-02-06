var happyBirthdayRectangleElt = document.getElementById(
  "happyBirthdayRectangle"
);
var happyBirthdaySmallRectangle = $(".HappyBirthdaySmallRectangle");

$("#happyBirthdayRectangle").on("click", function (event) {
  $(".HappyBirthdaySmallRectangle:eq(0)").fadeIn();
  $(".HappyBirthdaySmallRectangle:eq(0)").css(
    "background-color",
    "rgb(255, 168, 168)"
  );
});

$(".HappyBirthdaySmallRectangle:eq(0)").on("click", function (event) {
  $(".HappyBirthdaySmallRectangle:eq(1)").css(
    "background-color",
    "rgb(237, 127, 255)"
  );
  $(".HappyBirthdaySmallRectangle:eq(1)").fadeIn();
});

$(".HappyBirthdaySmallRectangle:eq(1)").on("click", function (event) {
  $(".HappyBirthdaySmallRectangle:eq(2)").css(
    "background-color",
    "rgb(158, 255, 117)"
  );
  $(".HappyBirthdaySmallRectangle:eq(2)").fadeIn();
});

$(".HappyBirthdaySmallRectangle:eq(2)").on("click", function (event) {
  $("#happyBirthdayRectangle").css("color", "#AFE309");
  $("#happyBirthdayRectangle").css("font-weight", "bold");
  $("#card").css("background", 'url("./images/birthday-card.jpg")');
  $("#card").css("background-size", "cover");

  $(".HappyBirthdaySmallRectangle").fadeOut();
});
