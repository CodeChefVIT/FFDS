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

// // Function to Switch between Showing/Hiding Password

// function dispPwd() {
//   var x = document.getElementById("loginPwd")
//   changeEyeIcon()
//   if (x.type === "password") {
//     x.type = "text"
//   } else {
//     x.type = "password"
//   }
// }

// //Function to Switch between Eye & EyeSlash FA Icon

// function changeEyeIcon() {
//   if ($('i[class="fas fa-eye"]')) {
//     $('i[class="fas fa-eye"]').replaceWith("fas fa-eye-slash")
//   } else {
//     $('i[class="fas fa-eye-slash"]').replaceWith("fas fa-eye")
//   }
// }