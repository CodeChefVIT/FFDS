// // Function to Switch between Showing/Hiding Password

// function dispPwd() {
//   var x = document.getElementById("regPwd");
//   changeEyeIcon();
//   if (x.type === "password") {
//     x.type = "text";
//   } else {
//     x.type = "password";
//   }
// }

// //Function to Switch between Eye & EyeSlash FA Icon

// function changeEyeIcon() {
//   if ($('i[class="fas fa-eye"]')) {
//     $('i[class="fas fa-eye"]').replaceWith("fas fa-eye-slash");
//   } else {
//     $('i[class="fas fa-eye-slash"]').replaceWith("fas fa-eye");
//   }
// }

// //Form Bypass



// Form Validation

$(document).ready(function () {
  $("#signupForm").validate({
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
      },
    },
    submitHandler: function (form) {
      form.submit();
    },
  });
  $(".btn-next").click(function () { // Function Runs On NEXT Button Click
    $(this).parents("fieldset").toggleClass('is-hidden');
    $(this).parents("fieldset").next().toggleClass('is-hidden').fadeIn('slow');
    // Adding Class Active To Show Steps Forward
    //$('.active').next().toggleClass('is-hidden');
  });
  $(".btn-otp").click(function () { // Function Runs On OTP Button Click
    $(this).next().toggleClass('is-hidden');
    $(this).parent().parent().next().toggleClass('is-hidden');
  });
  $(".btn-otp-resend").click(function () { // Function Runs On OTP Resend Click
  });
  $(".btn-prev").click(function () { // Function Runs On PREVIOUS Button Click
    $(this).parents("fieldset").toggleClass('is-hidden');
    $(this).parents("fieldset").prev().toggleClass('is-hidden').fadeIn('slow');
    // Removing Class Active To Show Steps Backward;
    // $('.active:last').removeClass('active');
  });
});