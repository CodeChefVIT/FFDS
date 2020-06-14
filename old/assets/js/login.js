
$(function () {

  // Login Form Validation

  var $loginForm = $("#loginForm");
  if ($loginForm.length) {
    $loginForm.validate({
      rules: {
        loginEmail: {
          required: true,
          pattern: /^[A-Za-z0-9.]+@vitstudent\.ac\.in|[A-Za-z0-9.]+@vit\.ac\.in$/,
        },
        loginPwd: {
          required: true,
          minlength: 12,
        },
      },
      messages: {
        loginEmail: {
          required: "Email is mandatory.",
          pattern: "Invalid Email, Please enter a VIT Email ID.",
        },
        loginPwd: {
          required: "Password is mandatory.",
          minlength: "Invalid Password. All passwords must have minimum 12 characters.",
        },
      },
    });
  }

  // Login Form Submit Handler

  $loginForm.submit(function () {
    event.preventDefault();
    if ($loginForm.valid()) {
      var $loginEmail = $("#loginEmail").val();
      var $loginPwd = $("#loginPwd").val();
      $.post(
        "https://ffds-new.herokuapp.com/login",
        { email: $loginEmail, password: $loginPwd },
        function (data, status, xhr) {
          console.log(data, status, xhr);
        }).done(function () {
          console.log("Login Request Successful");
          // window.location.replace("/dashboard.html");
          $.session.clear();
          $.session.set('sess-id', 'bcjcjcncnek');
        })
        .fail(function () {
          console.log("Login Request Failed");
          alert("Error: Login Unsuccessful - Check Your Internet");
        });
      // Fix Login on Done

      console.log("Form is being submitted.");
    }
  });
})