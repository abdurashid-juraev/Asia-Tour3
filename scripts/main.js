function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find(".burger-menu-btn");
  let links = menu.find(".burger-menu-link");
  let overlay = menu.find(".burger-menu-overlay");

  button.on("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });
  links.on("click", () => toggleMenu());
  overlay.on("click", () => toggleMenu());
  function toggleMenu() {
    menu.toggleClass("burger-menu-active");

    if (menu.hasClass("burger-menu-active")) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "visible");
    }
  }
}

burgerMenu(".burger-menu");

//text hide show

$(".toggle-content").hide();
$(".hide").hide();
$(".toggle-btn").on("click", function () {
  $(".toggle-content").slideToggle("fast");
  $(".show").hide();
  $(".hide").show();
});
$(".hide").on("click", function () {
  $(".toggle-content").slideToggle("fast");
  $(".show").show();
  $(".hide").hide();
});