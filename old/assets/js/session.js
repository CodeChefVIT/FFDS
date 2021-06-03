$(document).ready(function () {

  // Handling Logout Cookie Deletion

  $('.usr-logout-btn').click(function () {
    $.session.clear();
    window.location.replace("/index.html");
  })

  //Handling Changes on Login

  if ($.session.get('sess-id') != undefined) {
    $(.usr - nologin).toggleClass('is-hidden');
    $(.usr - login).toggleClass('is-hidden');
  }
})


