// Script for Navbar Menu

$(document).ready(function () {
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
  // TODO: Fix Dropdown Removing is-active
  // 	$('div[class= "navbar-item has-dropdown"]').click(function () {
  // 		if ($('div[class= "navbar-item has-dropdown"]').hasClass('is-active')) {
  // 			$('div[class= "navbar-item has-dropdown"]').removeClass('is-active');
  // 			$('div[class= "navbar-item has-dropdown"]').hide();
  // 		}
  // 		else {
  // 			$('div[class= "navbar-item has-dropdown"]').toggleClass("is-active");
  // 		}
  // 	});
});