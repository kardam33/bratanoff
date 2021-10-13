$("#administrative").on("click", function () {
  $(".administrative, a").toggleClass("active");

  return false;
});

$("#criminal").on("click", function () {
  $(".criminal, a").toggleClass("active");

  return false;
});

$("#family").on("click", function () {
  $(".family, a").toggleClass("active");

  return false;
});

$("#citizen").on("click", function () {
  $(".citizen, a").toggleClass("active");

  return false;
});

$("#company").on("click", function () {
  $(".company, a").toggleClass("active");

  return false;
});

$("#bank").on("click", function () {
  $(".bank, a").toggleClass("active");

  return false;
});

$(document).ready(function () {
  $(".view-btn").click(function () {
    $(this).text(
      $(this).text() == "скрий текста" ? "Покажи повече" : "скрий текста"
    );
    $(this).toggleClass("btn-active");
  });
});

$(".tips").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".protect-your-rights").offset().top,
    },
    "slow"
  );
});

$(".go-to-laws").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".types-laws").offset().top,
    },
    "slow"
  );
});

$(".go-to-top").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".header").offset().top,
    },
    "slow"
  );
});

$(".about").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".presentation").offset().top,
    },
    "slow"
  );
});

function YNconfirm() {
  if (
    window.confirm(
      "Ще бъдете прехвърлен към друг сайт. Желаете ли да продължите?"
    )
  ) {
    window.location.href = "https://lex.bg/laws/tree/laws";
  }
}

$("[data-autoscroll]").autoscroll({
  interval: 100,
});

$("[data-autoscroll]").autoscroll({
  hideScrollbar: false,
});
