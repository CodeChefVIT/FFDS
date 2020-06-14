<template>
  <section class="app-signup section font-roboto has-background-black">
    <div class="columns">
      <form
        id="signupForm1"
        class="form-signup column is-10-mobile is-8-tablet is-6-desktop is-4-fullhd is-offset-1-mobile is-offset-2-tablet my-6 px-2"
      >
        <p class="title has-text-primary">¡Holá!, Welcome to FFDS!</p>
        <br />
        <p class="title has-text-primary">Let's get you signed up!</p>
        <br />
        <div class="field">
          <label for="regEmail" class="label has-text-primary">VIT Email</label>
          <div class="control has-icons-left">
            <input
              id="regEmail"
              name="regEmail"
              class="input has-background-black"
              type="email"
              placeholder="Enter your VIT email"
              autocomplete="email"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope fa-custom"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <label for="regPwd" class="label has-text-primary">Password</label>
          <div class="control has-icons-left">
            <input
              id="regPwd"
              name="regPwd"
              class="input has-background-black"
              type="password"
              placeholder="Create a password (min. 12 chars)"
              autocomplete="new-password"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-key fa-custom"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <label for="regConfPwd" class="label has-text-primary">Confirm Password</label>
          <div class="control has-icons-left">
            <input
              id="regConfPwd"
              name="regConfPwd"
              class="input has-background-black"
              type="text"
              placeholder="Confirm your password"
              autocomplete="new-password"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-key fa-custom"></i>
            </span>
          </div>
        </div>
        <div class="field has-text-success is-size-5">
          <span class="has-text-weight-medium">Already Registered?,</span>
          <span>
            <router-link to="/login" class="has-text-weight-semibold link-custom">&nbsp;Log In</router-link>
          </span>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-medium is-primary btn-next" type="submit">
              <span>Next</span>
              <span class="icon">
                <i class="fas fa-chevron-right"></i>
              </span>
            </button>
          </div>
        </div>
      </form>
      <form
        id="signupForm2"
        class="form-signup column is-10-mobile is-8-tablet is-6-desktop is-4-fullhd is-offset-1-mobile is-offset-2-tablet my-6 px-2 is-hidden"
      >
        <p class="title has-text-primary">Just Some More Details</p>
        <div class="field">
          <label for="regName" class="label has-text-primary">Full Name</label>
          <div class="control has-icons-left">
            <input
              id="regName"
              name="regName"
              class="input has-background-black"
              type="text"
              placeholder="Enter your full name"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user-alt fa-custom"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <label for="regPhNo" class="label has-text-primary">Phone Number</label>
          <div class="control has-icons-left">
            <input
              id="regPhNo"
              name="regPhNo"
              class="input has-background-black"
              type="number"
              placeholder="Enter your phone number"
              autocomplete="tel-national"
              pattern="^(\+91[-\s]?)?[0]?(91)?[789]\d{9}$"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-phone-alt fa-custom"></i>
            </span>
          </div>
        </div>
        <!-- TODO: Separate OTP into Dashes -->
        <div class="field is-hidden">
          <label for="regOTP" class="label has-text-primary">OTP</label>
          <div class="control">
            <input
              id="regOTP"
              name="regOTP"
              class="input has-background-black"
              type="number"
              autocomplete="one-time-code"
              placeholder="Enter the 6 digit OTP"
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button id="regBtnOTP" class="button is-primary btn-otp" type="button">
              <span>Get OTP</span>
              <span class="icon">
                <i class="fas fa-chevron-right"></i>
              </span>
            </button>
            <p class="is-hidden is-6 has-text-grey">
              Didn't get a OTP, click
              <a class="btn-otp-resend link-custom-1">here</a>
              to resend.
            </p>
          </div>
          <p class="help is-danger is-hidden">The OTP you entered is incorrect.</p>
        </div>
        <div class="field is-hidden">
          <div class="control">
            <button class="button is-medium is-primary btn-next" type="submit">
              <span>Next</span>
              <span class="icon">
                <i class="fas fa-chevron-right"></i>
              </span>
            </button>
          </div>
        </div>
      </form>
      <form
        id="signupForm3"
        class="form-signup column is-10-mobile is-8-tablet is-offset-1-mobile is-offset-2-tablet my-6 px-2 is-hidden"
      >
        <div class="field is-flex is-horizontal-center">
          <figure class="image is-128x128">
            <img class="is-rounded" src="../assets/img/default-profile.jpeg" alt="User Image" />
          </figure>
        </div>
        <div class="field has-text-centered">
          <span
            class="is-size-5 has-text-weight-semibold has-text-success user-name"
          >{{ getUserName }}</span>
          <br />
          <span class="user-phone-number has-text-weight-medium">{{ getUserPhone }}</span>
        </div>
        <div class="field">
          <label for="regDescYourself" class="label has-text-primary">Describe Yourself</label>
          <div class="control">
            <input
              id="regDescYourself"
              name="regDescYourself"
              class="input has-background-black"
              type="text"
              maxlength="1000"
              placeholder="Describe Yourself (limit 1000 chars)"
            />
          </div>
        </div>
        <br />
        <div class="field">
          <label for="regExp" class="label has-text-primary">Expectations</label>
          <div class="control">
            <input
              id="regExp"
              name="regExp"
              class="input has-background-black"
              type="text"
              maxlength="1000"
              placeholder="What are your expectations from your matches? (limit 1000 chars)"
            />
          </div>
        </div>
        <br />
        <div class="field">
          <label for="regGender" class="label has-text-primary">I identify my gender as</label>
          <br />
          <div class="control has-text-success has-text-weight-semibold p-1">
            <input class="mr-1 ml-3" type="radio" id="regGenderMale" name="regGender" value="male" />
            <label for="regGenderMale">Male</label>
            <input
              class="mr-1 ml-3"
              type="radio"
              id="regGenderFemale"
              name="regGender"
              value="female"
            />
            <label for="regGenderFemale">Female</label>
            <input
              class="mr-1 ml-3"
              type="radio"
              id="regGenderGQNB"
              name="regGender"
              value="genderqueer-nonbinary"
            />
            <label for="regGenderGQNB">Genderqueer/Non-Binary</label>
            <input
              class="mr-1 ml-3"
              type="radio"
              id="regGenderNI"
              name="regGender"
              value="not-said"
            />
            <label for="regGenderNI">Prefer Not To Say</label>
            <br />
          </div>
        </div>
        <br />
        <div class="field">
          <div class="file is-primary p-1">
            <label class="file-label" for="regTT">
              <input id="regTT" name="timetable" class="file-input" type="file" required />
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">Upload your TimeTable</span>
              </span>
            </label>
          </div>
          <p class="has-text-grey pt-1by2">
            Not sure how to get your Timetable, click
            <router-link class="link-custom-1" to="/timetable">here&nbsp;</router-link>to
            learn more.
          </p>
        </div>
        <br />
        <div class="field">
          <div class="control">
            <button class="button is-medium is-primary btn-submit" type="submit">
              <span>Submit</span>
              <span class="icon">
                <i class="fas fa-chevron-right"></i>
              </span>
            </button>
            <br />
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import $ from "jquery";
import "jquery-validation";
require("jquery-validation/dist/additional-methods.js");

var user_name = "";
var user_phone = "";

$(function() {
  // Form Values Declaration

  var $regEmail = $();
  var $regPwd = $();
  var $regName = $();
  var $regPhNo = $();
  // var $regOTP = $();
  // var $regDescYourself = $();
  // var $regExp = $();
  var $regGender = $();
  // var $regTT = $();
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
          pattern: /^[A-Za-z0-9.]+@vitstudent\.ac\.in|[A-Za-z0-9.]+@vit\.ac\.in$/
        },
        regPwd: {
          required: true,
          minlength: 12
        },
        regConfPwd: {
          required: true,
          equalTo: "#regPwd"
        }
      },
      messages: {
        regEmail: {
          // remote: "This Email is already associated with an existing account.",
          required: "This field is required.",
          pattern: "Invalid Email, Please enter a VIT Email ID."
        },
        regPwd: {
          required: "This field is required.",
          minlength:
            "Invalid Password. All passwords need minimum 12 characters."
        },
        regConfPwd: {
          required: "This field is required.",
          equalTo: "The Password & the Confirmation Password do not match."
        }
      }
    });
  }

  // Signup Form 2 Validation

  if ($signupForm2.length) {
    $signupForm2.validate({
      rules: {
        regName: "required",
        regPhNo: {
          required: true,
          pattern: /^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/
        },
        regOTP: {
          //remote: verify-OTP.js
          required: true
        }
      },
      messages: {
        regName: "This field is required.",
        regPhNo: {
          required: "This field is required.",
          pattern: "Invalid Number. Please Enter an Indian Mobile Number."
        },
        regOTP: {
          //remote: "Invalid OTP.",
          required: "Enter the OTP."
        }
      }
    });
  }

  // Signup Form 3 Validation

  if ($signupForm3.length) {
    $signupForm3.validate({
      rules: {
        regDescYourself: {
          required: true,
          maxlength: 1000
        },
        regExp: {
          required: true,
          maxlength: 1000
        },
        regGender: {
          required: true,
          maxlength: 1
        },
        regTT: {
          required: true,
          accept: "image/jpeg, image/png"
        }
      },
      messages: {
        regDescYourself: {
          required: "This field is required.",
          maxlength: "Maximum {0} Characters allowed."
        },
        regExp: {
          required: "This field is required.",
          maxlength: "Maximum {0} characters allowed."
        },
        regGender: {
          required: "This field is required.",
          maxlength: "Maximum {0} can be selected."
        },
        regTT: {
          required: "This field is required.",
          accept: "Invalid File Format. Please Upload Image in jpeg/png format."
        }
      },
      errorPlacement: function(error, element) {
        if (element.is(":radio")) {
          error.appendTo(element.parent().parent());
        } else if (element.is(":file")) {
          error.appendTo(element.parent().parent());
        } else {
          error.insertAfter(element);
        }
      }
    });
  }

  // Multi-page Form Validation, Switching & Submission
  $signupForm1.submit(function() {
    event.preventDefault();
    if ($signupForm1.valid()) {
      console.log("Submitting Signup Form 1");
      $regEmail = $("#regEmail").val();
      $regPwd = $("#regPwd").val();
      $signupForm1.toggleClass("is-hidden");
      $signupForm2.toggleClass("is-hidden").fadeIn("slow");
    }
  });
  $signupForm2.submit(function() {
    event.preventDefault();
    if ($signupForm2.valid()) {
      console.log("Submitting Signup Form 2");
      $regName = $("#regName").val();
      $regPhNo = $("#regPhNo").val();
      user_name = $regName;
      user_phone = $regPhNo;
      // $regOTP = $("#regOTP").val();
      $signupForm2.toggleClass("is-hidden");
      $signupForm3.toggleClass("is-hidden").fadeIn("slow");
    }
  });
  $signupForm3.submit(function() {
    event.preventDefault();
    if ($signupForm3.valid()) {
      console.log("Submitting Signup Form 3");
      // $regDescYourself = $("#regDescYourself").val();
      // $regExp = $("#regExp").val();
      $regGender = $("#regGender").val();
      // $regTT = $("#regTT").val();
      // TODO: Fix API call to include all parameters
      $.post(
        "https://ffds-new.herokuapp.com/register",
        {
          name: $regName,
          gender: $regGender,
          password: $regPwd,
          email: $regEmail,
          phone: $regPhNo
        },
        function(data, status, xhr) {
          console.log(data, status, xhr);
        }
      )
        .done(function() {
          console.log("Signup Request Successful");
          window.location.replace("/verify");
        })
        .fail(function() {
          console.log("Signup Request Failed");
          alert("Error: Signup Unsuccessful - Check Your Internet");
        });
    }
  });

  // Manages OTP function

  $("#regBtnOTP").click(function() {
    // TODO: Check if phone number is verified
    var phNoRegex = new RegExp(/^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/);
    if (phNoRegex.test($("#regPhNo").val())) {
      $("#regBtnOTP")
        .parent()
        .parent()
        .prev()
        .toggleClass("is-hidden");
      $("#regBtnOTP")
        .next()
        .toggleClass("is-hidden");
      $("#regBtnOTP")
        .parent()
        .parent()
        .next()
        .toggleClass("is-hidden");
      $("#regBtnOTP").toggleClass("is-hidden");
      $("#regBtnOTP").prop("disabled", true);
    } else {
      alert(
        "Invalid Phone Number Entered, Please Enter a valid Indian Mobile Number."
      );
    }
  });
  $(".btn-otp-resend").click(function() {
    alert("OTP has been re-sent.");
  });
});

export default {
  name: "Signup",
  methods: {
    getUserName() {
      return user_name;
    },
    getUserPhone() {
      return user_phone;
    }
  }
};
</script>