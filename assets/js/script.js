// Script for Navbar Menu

$(document).ready(function () {

  // Navbar Toggle

  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // // Switch Password Visible/Invisible

  // $(document).on('click', '.eye-click', function () {
  //   var $loginPwd = $("#loginPwd");
  //   if ($loginPwd.type === "password") {
  //     $loginPwd.type = "text"
  //   } else {
  //     $loginPwd.type = "password"
  //   }
  //   $(".fas fa-eye eye-click").toggleClass("fa-eye").toggleClass("fa-eye-slash");
  //   $(".fas fa-eye-slash eye-click").toggleClass("fa-eye-slash").toggleClass("fa-eye");
  // });
});