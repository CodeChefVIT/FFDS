// Function to Switch between Showing/Hiding Password

function dispPwd() {
  var x = document.getElementById("regPwd")
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



// //Form Validation for Part 1

$(document).ready(function () {
  $("regPart1Form").validate({
    rules: {
      regEmail: {
        // remote: check-remote.js,
        required: true,
        pattern: /^[A-Za-z0-9.]+@vitstudent\.ac\.in|[A-Za-z0-9.]+@vit\.ac\.in$/,
      },
      regPwd: {
        required: true,
        minlength: 12,
      },
      regConfPwd: {
        required: true,
        equalTo: "#regPwd",
      },
    },
    messages: {
      regEmail: {
        // remote: "This Email is already associated with an existing account.",
        required: "This field is required.",
        pattern: "Invalid Email, Please enter a VIT Email ID.",
      },
      regPwd: {
        required: "This field is required.",
        minlength: "Invalid Password. All passwords have minimum 12 characters.",
      },
      regConfPwd: {
        required: "This field is required.",
        equalTo: "The Password & the Confirmation Password do not match.",
      },
    },
    submitHandler: function (form) {
      $("regPart1").toggleClass("is-hidden");
      $("regPart2").toggleClass("is-hidden");
      form.submit();
    },
  });
  $("regPart2Form").validate({
    rules: {
      regName: "required",
      regPhNo: {
        //remote: verify-PhNo.js,
        required: true,
        minlength: 10,
        maxlength: 10,
      },
      regOTP: {
        //remote: verify-OTP.js
        required: true,
        minlength: 6,
        maxlength: 6,
      },
    },
    messages: {
      regName: "This field is required.",
      regPhNo: {
        //remote: "This Phone Number is not valid. Please enter a valid Phone Number.",
        required: "This field is required.",
        minlength: "Number can't be less than 10 digits long. Enter a valid Phone Number",
        maxlength: "Number can't be more than 10 digits long. Enter a valid Phone Number",
      },
      regOTP: {
        //remote: "Invalid OTP.",
        required: "This field is required.",
        minlength: "Invalid OTP.",
        maxlength: "Invalid OTP",
      },
    },
    submitHandler: function (form) {
      $("regPart2").toggleClass("is-hidden");
      $("regPart3").toggleClass("is-hidden");
      form.submit();
    }
  });
  $("regPart3Form").validate({
    rules: {
      regDescYourself: {
        required: true,
        maxlength: 1000,
      },
      regExp: {
        required: true,
        maxlength: 1000,
      },
      regGender: {
        required: true,
        maxlength: 1,
      },
      regTT: {
        required: true,
        accept: "image/jpeg, image/png",
      }
    },
    messages: {
      regDescYourself: {
        required: "This field is required.",
        maxlength: "Maximum {0} Characters allowed.",
      },
      regExp: {
        required: "this field is required.",
        maxlength: "Maximum {0} characters allowed.",
      },
      regGender: {
        required: "This field is required.",
        maxlength: "Maximum {0} can be selected.",
      },
      regTT: {
        required: "This field is required.",
        accept: "Invalid File Format. Please Upload Image in jpeg/png format.",
      }
    },
    submitHandler: function (form) {
      form.submit();
    },
  });
});