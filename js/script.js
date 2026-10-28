$(".human").click(function () {
  $(this).addClass("fly");
  $(".scene").addClass("move");
});

$(".p18").on("animationend", function () {
  $(".human").removeClass("fly");
});

$(".dragon").click(function () {
  $(".hug").addClass("show");
});

$(".dragon").on("animationend", function () {
  $(this).removeClass("shine");
});
