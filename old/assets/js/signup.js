$(function () {

  // Form Values Declaration

  var $regEmail = $();
  var $regPwd = $();
  var $regName = $();
  var $regPhNo = $();
  var $regDescYourself = $();
  var $regExp = $();
  var $regGender = $();
  var $regTT = $();
  var $signupForm1 = $("#signupForm1");
  var $signupForm2 = $("#signupForm2");
  var $signupForm3 = $("#signupForm3");

  // Signup Form 1 Validation

  if ($signupForm1.length) {
    $signupForm1.validate({
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
          minlength: "Invalid Password. All passwords need minimum 12 characters.",
        },
        regConfPwd: {
          required: "This field is required.",
          equalTo: "The Password & the Confirmation Password do not match.",
        },
      },
    });
  }

  // Signup Form 2 Validation

  if ($signupForm2.length) {
    $signupForm2.validate({
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
          minlength: "Number can't be less than 10 digits long. Enter a valid Phone Number.",
          maxlength: "Number can't be more than 10 digits long. Enter a valid Phone Number.",
        },
        regOTP: {
          //remote: "Invalid OTP.",
          required: "Enter the OTP.",
          minlength: "Invalid OTP.",
          maxlength: "Invalid OTP.",
        },
      },
    });
  }

  // Signup Form 3 Validation

  if ($signupForm3.length) {
    $signupForm3.validate({
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
        },
      },
      messages: {
        regDescYourself: {
          required: "This field is required.",
          maxlength: "Maximum {0} Characters allowed.",
        },
        regExp: {
          required: "This field is required.",
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
      errorPlacement: function (error, element) {
        if (element.is(":radio")) {
          error.appendTo(element.parent());
        }
        else if (element.is(":file")) {
          error.appendTo(element.parent().parent());
        }
        else {
          error.insertAfter(element);
        }
      }
    });
  }

  // Multi-page Form Validation, Switching & Submission

  $signupForm1.submit(function () {
    event.preventDefault();
    if ($signupForm1.valid()) {
      console.log("Submitting Signup Form 1");
      $regEmail = $("#regEmail").val();
      $regPwd = $("#regPwd").val();
      $signupForm1.toggleClass('is-hidden');
      $signupForm2.toggleClass('is-hidden').fadeIn('slow');
    }
  });
  $signupForm2.submit(function () {
    event.preventDefault();
    if ($signupForm2.valid()) {
      console.log("Submitting Signup Form 2");
      $regName = $("#regName").val();
      $regPhNo = $("#regPhNo").val();
      $regOTP = $("#regOTP").val();
      $signupForm2.toggleClass('is-hidden');
      $signupForm3.toggleClass('is-hidden').fadeIn('slow');
    }
  });
  $signupForm3.submit(function () {
    event.preventDefault();
    if ($signupForm3.valid()) {
      console.log("Submitting Signup Form 3");
      $regDescYourself = $("#regDescYourself").val();
      $regExp = $("#regExp").val();
      $regGender = $("#regGender").val();
      $regTT = $("#regTT").val();
      // TODO: Fix API call to include all parameters
      $.post(
        "https://ffds-new.herokuapp.com/register",
        { name: $regName, gender: $regGender, password: $regPwd, email: $regEmail, phone: $regPhNo },
        function (data, status, xhr) {
          console.log(data, status, xhr);
        }).done(function () { console.log("Signup Request Successful"); window.location.replace("/verify-email.html"); })
        .fail(function () { console.log("Signup Request Failed"); alert("Error: Signup Unsuccessful - Check Your Internet"); });
    }
  });

  // Manages OTP function

  $("#regBtnOTP").click(function () {
    // TODO: Check if phone number is verified
    $("#regBtnOTP").parent().parent().prev().toggleClass('is-hidden');
    $("#regBtnOTP").next().toggleClass('is-hidden');
    $("#regBtnOTP").parent().parent().next().toggleClass('is-hidden');
    $("#regBtnOTP").toggleClass('is-hidden');
    $("#regBtnOTP").prop('disabled', true);
  });
  $(".btn-otp-resend").click(function () {
    alert("OTP has been re-sent.");
  });
});

