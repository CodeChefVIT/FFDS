// Function to Switch between Showing/Hiding Password

function dispPwd() {
  var x = document.getElementById("loginPwd")
  changeEyeIcon()
  if (x.type === "password") {
    x.type = "text"
  } else {
    x.type = "password"
  }
}

//Function to Switch between Eye & EyeSlash FA Icon

function changeEyeIcon() {
  if ($('i[class="fas fa-eye"]')) {
    $('i[class="fas fa-eye"]').replaceWith("fas fa-eye-slash")
  } else {
    $('i[class="fas fa-eye-slash"]').replaceWith("fas fa-eye")
  }
}

// Login Form Validation
$(document).ready(function () {
  $("loginForm").validate({
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
        required: "This field is required.",
        pattern: "Invalid Email, Please enter a VIT Email ID.",
      },
      loginPwd: {
        required: "This field is required.",
        minlength: "Invalid Password. All passwords have minimum 12 characters.",
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });
});
