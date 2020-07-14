<template>
  <section class="app-signup section font-roboto has-background-black">
    <div class="columns">
      <form
        :class="formComplete1 ? 'is-hidden' : ''"
        id="signupForm1"
        class="form-signup column is-10-mobile is-8-tablet is-6-desktop is-4-fullhd is-offset-1-mobile is-offset-2-tablet my-6 px-2"
        @submit.prevent="submit1"
      >
        <p class="title has-text-primary">Let's Set Up Your Account</p>
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
              v-model="form1.regEmail"
              @input="setEmail($event.target.value)"
              autofocus
            />
            <div v-if="$v.form1.regEmail.$dirty">
              <div class="error" v-if="!$v.form1.regEmail.required">Email is a required field.</div>
              <div class="error" v-if="!$v.form1.regEmail.pattern_email">Enter a valid VIT email.</div>
            </div>
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
              v-model="form1.regPwd"
              @input="setPwd($event.target.value)"
            />
            <div v-if="$v.form1.regPwd.$dirty">
              <div class="error" v-if="!$v.form1.regPwd.required">Password is a required field.</div>
              <div
                class="error"
                v-if="!$v.form1.regPwd.minLength"
              >Password has to be atleast 12 characters.</div>
            </div>
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
              type="password"
              placeholder="Confirm your password"
              autocomplete="new-password"
              v-model="form1.regConfPwd"
              @input="setConfPwd($event.target.value)"
            />
            <div v-if="$v.form1.regConfPwd.$dirty">
              <div
                class="error"
                v-if="!$v.form1.regConfPwd.required"
              >Password Confirmation is a required field.</div>
              <div
                class="error"
                v-if="!$v.form1.regConfPwd.sameAs"
              >The password & confirmation password do not match.</div>
            </div>
            <span class="icon is-small is-left">
              <i class="fas fa-key fa-custom"></i>
            </span>
          </div>
        </div>
        <div class="field has-text-success is-size-5">
          <span class="has-text-weight-medium">Already Registered?,&nbsp;</span>
          <span>
            <router-link to="/login" class="has-text-weight-semibold link-custom">Log In</router-link>
          </span>
        </div>
        <div class="field">
          <div class="control">
            <button
              class="button is-medium is-primary btn-next"
              @click.prevent="submit1"
              type="submit"
              :disabled="$v.form1.$invalid || is1Submitted"
            >
              <span>Next</span>
              <span class="icon">
                <i class="fas fa-chevron-right"></i>
              </span>
            </button>
          </div>
        </div>
      </form>
      <form
        :class="form2Visible ? '' : 'is-hidden'"
        id="signupForm2"
        class="form-signup column is-10-mobile is-8-tablet is-6-desktop is-4-fullhd is-offset-1-mobile is-offset-2-tablet my-6 px-2"
        @submit.prevent="submit2"
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
              autocomplete="name"
              placeholder="Enter your full name"
              v-model="form2.regName"
              @input="setName($event.target.value)"
              autofocus
            />
            <div v-if="$v.form2.regName.$dirty">
              <div class="error" v-if="!$v.form2.regName.required">Name is required.</div>
            </div>
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
              v-model="form2.regPhNo"
              @input="setPhNo($event.target.value)"
            />
            <div v-if="$v.form2.regPhNo.$dirty">
              <div class="error" v-if="!$v.form2.regPhNo.required">Phone number is required.</div>
              <div
                class="error"
                v-if="!$v.form2.regPhNo.pattern_phone"
              >Please enter a valid indian phone number.</div>
            </div>
            <span class="icon is-small is-left">
              <i class="fas fa-phone-alt fa-custom"></i>
            </span>
          </div>
        </div>
        <!-- TODO: Separate OTP into Dashes
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
              v-model="form2.regOTP"
              @input="setOTP($event.target.value)"
            />
            <div v-if="$v.form2.regOTP.$dirty">
              <div class="error" v-if="!$v.form2.regOTP.required">OTP is required.</div>
            </div>
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
            <p class="is-6 has-text-grey">
              Didn't get a OTP, click
              <a class="btn-otp-resend link-custom-1">here</a>
              to resend.
            </p>
          </div>
          <p class="help is-danger is-hidden">The OTP you entered is incorrect.</p>
        </div>-->
        <div class="field">
          <div class="control">
            <button
              class="button is-medium is-primary btn-next"
              @click.prevent="submit2"
              type="submit"
              :disabled="$v.form2.$invalid || is2Submitted"
            >
              <span>Next</span>
              <span class="icon">
                <i class="fas fa-chevron-right"></i>
              </span>
            </button>
          </div>
        </div>
      </form>
      <form
        :class="formComplete2 ? '' : 'is-hidden'"
        id="signupForm3"
        class="form-signup column is-10-mobile is-8-tablet is-offset-1-mobile is-offset-2-tablet my-6 px-2"
        @submit.prevent="submit3"
      >
        <div class="field is-flex is-horizontal-center">
          <figure class="image is-128x128">
            <img class="is-rounded" src="../assets/img/default-profile.jpeg" alt="User Image" />
          </figure>
        </div>
        <div class="field has-text-centered">
          <span
            class="is-size-5 has-text-weight-semibold has-text-success user-name"
          >{{ this.form2.regName }}</span>
          <br />
          <span class="user-phone-number has-text-weight-medium">{{ this.form2.regPhNo }}</span>
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
              v-model="form3.regDescYourself"
              @input="setDescYourself($event.target.value)"
              autofocus
            />
            <div v-if="$v.form3.regDescYourself.$dirty">
              <div class="error" v-if="!$v.form3.regDescYourself.required">This field is required.</div>
              <div
                class="error"
                v-if="!$v.form3.regDescYourself.maxLength"
              >Maximum 1000 characters allowed.</div>
            </div>
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
              v-model="form3.regExp"
              @input="setExp($event.target.value)"
            />
            <div v-if="$v.form3.regExp.$dirty">
              <div class="error" v-if="!$v.form3.regExp.required">This field is required.</div>
              <div class="error" v-if="!$v.form3.regExp.maxLength">Maximum 1000 characters allowed.</div>
            </div>
          </div>
        </div>
        <br />
        <div class="field">
          <label for="regBranch" class="label has-text-primary">Branch</label>
          <div class="control">
            <select
              class="select has-background-black"
              name="regBranch"
              id="regBranch"
              v-model="form3.regBranch"
              @input="setBranch($event.target.value)"
            >
              <option value="selectYear" disabled default>Choose a Branch</option>
              <option v-for="branch in branchList" :key="branch" value="branch">{{ branch }}</option>
            </select>
          </div>
        </div>
        <br />
        <div class="field">
          <label for="regYear" class="label has-text-primary">Year of Admission to VIT</label>
          <br />
          <div class="control has-text-success has-text-weight-semibold">
            <input
              class="mr-1 ml-1"
              type="radio"
              id="regYear2020"
              name="regYear"
              value="2020"
              v-model="form3.regYear"
              @input="setYear($event.target.value)"
            />
            <label for="regYear2020">2020</label>
            <input
              class="mr-1 ml-1"
              type="radio"
              id="regYear2019"
              name="regYear"
              value="2019"
              v-model="form3.regYear"
              @input="setYear($event.target.value)"
            />
            <label for="regYear2019">2019</label>
            <input
              class="mr-1 ml-1"
              type="radio"
              id="regYear2018"
              name="regYear"
              value="2018"
              v-model="form3.regYear"
              @input="setYear($event.target.value)"
            />
            <label for="regYear2018">2018</label>
            <input
              class="mr-1 ml-1"
              type="radio"
              id="regYear2017"
              name="regYear"
              value="2017"
              v-model="form3.regYear"
              @input="setYear($event.target.value)"
            />
            <label for="regYear2017">2017</label>
            <input
              class="mr-1 ml-1"
              type="radio"
              id="regYear2016"
              name="regYear"
              value="2016"
              v-model="form3.regYear"
              @input="setYear($event.target.value)"
            />
            <label for="regYear2016">2016</label>
            <input
              class="mr-1 ml-1"
              type="radio"
              id="regYear2015"
              name="regYear"
              value="2015"
              v-model="form3.regYear"
              @input="setYear($event.target.value)"
            />
            <label for="regYear2015">2015</label>
            <input
              class="mr-1 ml-1"
              type="radio"
              id="regYear2014"
              name="regYear"
              value="2014"
              v-model="form3.regYear"
              @input="setYear($event.target.value)"
            />
            <label for="regYear2014">2014</label>
            <input
              class="mr-1 ml-1"
              type="radio"
              id="regYear2013"
              name="regYear"
              value="2013"
              v-model="form3.regYear"
              @input="setYear($event.target.value)"
            />
            <label for="regYear2013">2013</label>
            <!-- <input
              class="mr-1 ml-1"
              type="radio"
              id="regYearNI"
              name="regYear"
              value="not-said"
              v-model="form3.regYear"
              @input="setYear($event.target.value)"
            />
            <label for="regYearNI">Prefer Not To Say</label>-->
            <br />
            <div v-if="$v.form3.regGender.$dirty">
              <div
                class="error has-text-white has-text-weight-normal"
                v-if="!$v.form3.regGender.required"
              >Year of admission is a required field.</div>
            </div>
          </div>
        </div>
        <br />
        <div class="field">
          <label for="regGender" class="label has-text-primary">I identify my gender as</label>
          <br />
          <div class="control has-text-success has-text-weight-semibold">
            <input
              class="mr-1 ml-1"
              type="radio"
              id="regGenderMale"
              name="regGender"
              value="male"
              v-model="form3.regGender"
              @input="setGender($event.target.value)"
            />
            <label for="regGenderMale">Male</label>
            <input
              class="mr-1 ml-1"
              type="radio"
              id="regGenderFemale"
              name="regGender"
              value="female"
              v-model="form3.regGender"
              @input="setGender($event.target.value)"
            />
            <label for="regGenderFemale">Female</label>
            <input
              class="mr-1 ml-1"
              type="radio"
              id="regGenderGQNB"
              name="regGender"
              value="genderqueer-nonbinary"
              v-model="form3.regGender"
              @input="setGender($event.target.value)"
            />
            <label for="regGenderGQNB">Genderqueer / Non-Binary</label>
            <input
              class="mr-1 ml-1"
              type="radio"
              id="regGenderNI"
              name="regGender"
              value="not-said"
              v-model="form3.regGender"
              @input="setGender($event.target.value)"
            />
            <label for="regGenderNI">Prefer Not To Say</label>
            <br />
            <div v-if="$v.form3.regGender.$dirty">
              <div
                class="error has-text-white has-text-weight-normal"
                v-if="!$v.form3.regGender.required"
              >Gender is a required field.</div>
            </div>
          </div>
        </div>
        <br />
        <div class="field">
          <div class="file is-primary">
            <label class="file-label" for="regTT">
              <input
                id="regTT"
                name="timetable"
                class="file-input"
                type="file"
                @input="setTT($event.target.value)"
                accept="image/png, image/jpeg"
                required
              />
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">Upload your Timetable</span>
              </span>
            </label>
          </div>
          <!-- <div class="error" v-if="!$v.form3.regTT.required">Time Table is required.</div> -->
          <p class="has-text-grey pt-1by2">
            Not sure how to get your timetable, click&nbsp;
            <router-link class="link-custom-1" to="/timetable">here</router-link>&nbsp;to learn more.
          </p>
        </div>
        <br />
        <div class="field">
          <div class="control">
            <button
              class="button is-medium is-primary btn-submit"
              @click.prevent="submit3"
              type="submit"
              :disabled="$v.form3.$invalid || is3Submitted"
            >
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
// import $ from "jquery";
// import "jquery-validation";
// require("jquery-validation/dist/additional-methods.js");

// $(function() {
//   //   // Form Values Declaration

//   //   var $regEmail = $();
//   //   var $regPwd = $();
//   //   var $regName = $();
//   //   var $regPhNo = $();
//   //   // var $regOTP = $();
//   //   // var $regDescYourself = $();
//   //   // var $regExp = $();
//   //   var $regGender = $();
//   //   // var $regTT = $();
//   //   var $signupForm1 = $("#signupForm1");
//   //   var $signupForm2 = $("#signupForm2");
//   //   var $signupForm3 = $("#signupForm3");

//   //   // Signup Form 1 Validation

//   //   if ($signupForm1.length) {
//   //     $signupForm1.validate({
//   //       rules: {
//   //         regEmail: {
//   //           // remote: check-remote.js,
//   //           required: true,
//   //           pattern: /^[A-Za-z0-9.]+@vitstudent\.ac\.in|[A-Za-z0-9.]+@vit\.ac\.in$/
//   //         },
//   //         regPwd: {
//   //           required: true,
//   //           minlength: 12
//   //         },
//   //         regConfPwd: {
//   //           required: true,
//   //           equalTo: "#regPwd"
//   //         }
//   //       },
//   //       messages: {
//   //         regEmail: {
//   //           // remote: "This Email is already associated with an existing account.",
//   //           required: "This field is required.",
//   //           pattern: "Invalid Email, Please enter a VIT Email ID."
//   //         },
//   //         regPwd: {
//   //           required: "This field is required.",
//   //           minlength:
//   //             "Invalid Password. All passwords need minimum 12 characters."
//   //         },
//   //         regConfPwd: {
//   //           required: "This field is required.",
//   //           equalTo: "The Password & the Confirmation Password do not match."
//   //         }
//   //       }
//   //     });
//   //   }

//   //   // Signup Form 2 Validation

//   //   if ($signupForm2.length) {
//   //     $signupForm2.validate({
//   //       rules: {
//   //         regName: "required",
//   //         regPhNo: {
//   //           required: true,
//   //           pattern: /^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/
//   //         },
//   //         regOTP: {
//   //           //remote: verify-OTP.js
//   //           required: true
//   //         }
//   //       },
//   //       messages: {
//   //         regName: "This field is required.",
//   //         regPhNo: {
//   //           required: "This field is required.",
//   //           pattern: "Invalid Number. Please Enter an Indian Mobile Number."
//   //         },
//   //         regOTP: {
//   //           //remote: "Invalid OTP.",
//   //           required: "Enter the OTP."
//   //         }
//   //       }
//   //     });
//   //   }

//   //   // Signup Form 3 Validation

//   //   if ($signupForm3.length) {
//   //     $signupForm3.validate({
//   //       rules: {
//   //         regDescYourself: {
//   //           required: true,
//   //           maxlength: 1000
//   //         },
//   //         regExp: {
//   //           required: true,
//   //           maxlength: 1000
//   //         },
//   //         regGender: {
//   //           required: true,
//   //           maxlength: 1
//   //         },
//   //         regTT: {
//   //           required: true,
//   //           accept: "image/jpeg, image/png"
//   //         }
//   //       },
//   //       messages: {
//   //         regDescYourself: {
//   //           required: "This field is required.",
//   //           maxlength: "Maximum {0} Characters allowed."
//   //         },
//   //         regExp: {
//   //           required: "This field is required.",
//   //           maxlength: "Maximum {0} characters allowed."
//   //         },
//   //         regGender: {
//   //           required: "This field is required.",
//   //           maxlength: "Maximum {0} can be selected."
//   //         },
//   //         regTT: {
//   //           required: "This field is required.",
//   //           accept: "Invalid File Format. Please Upload Image in jpeg/png format."
//   //         }
//   //       },
//   //       errorPlacement: function(error, element) {
//   //         if (element.is(":radio")) {
//   //           error.appendTo(element.parent().parent());
//   //         } else if (element.is(":file")) {
//   //           error.appendTo(element.parent().parent());
//   //         } else {
//   //           error.insertAfter(element);
//   //         }
//   //       }
//   //     });
//   //   }

//   //   // Multi-page Form Validation, Switching & Submission
//   //   $signupForm1.submit(function() {
//   //     event.preventDefault();
//   //     if ($signupForm1.valid()) {
//   //       console.log("Submitting Signup Form 1");
//   //       $regEmail = $("#regEmail").val();
//   //       $regPwd = $("#regPwd").val();
//   //       $signupForm1.toggleClass("is-hidden");
//   //       $signupForm2.toggleClass("is-hidden").fadeIn("slow");
//   //     }
//   //   });
//   //   $signupForm2.submit(function() {
//   //     event.preventDefault();
//   //     if ($signupForm2.valid()) {
//   //       console.log("Submitting Signup Form 2");
//   //       $regName = $("#regName").val();
//   //       $regPhNo = $("#regPhNo").val();
//   //       user_name = $regName;
//   //       user_phone = $regPhNo;
//   //       // $regOTP = $("#regOTP").val();
//   //       $signupForm2.toggleClass("is-hidden");
//   //       $signupForm3.toggleClass("is-hidden").fadeIn("slow");
//   //     }
//   //   });
//   //   $signupForm3.submit(function() {
//   //     event.preventDefault();
//   //     if ($signupForm3.valid()) {
//   //       console.log("Submitting Signup Form 3");
//   //       // $regDescYourself = $("#regDescYourself").val();
//   //       // $regExp = $("#regExp").val();
//   //       $regGender = $("#regGender").val();
//   //       // $regTT = $("#regTT").val();
//   //       // TODO: Fix API call to include all parameters
//   //       $.post(
//   //         "https://ffds-new.herokuapp.com/register",
//   //         {
//   //           name: $regName,
//   //           gender: $regGender,
//   //           password: $regPwd,
//   //           email: $regEmail,
//   //           phone: $regPhNo
//   //         },
//   //         function(data, status, xhr) {
//   //           console.log(data, status, xhr);
//   //         }
//   //       )
//   //         .done(function() {
//   //           console.log("Signup Request Successful");
//   //           window.location.replace("/verify");
//   //         })
//   //         .fail(function() {
//   //           console.log("Signup Request Failed");
//   //           alert("Error: Signup Unsuccessful - Check Your Internet");
//   //         });
//   //     }
//   // });

//   // Manages OTP function

//   $("#regBtnOTP").click(function() {
//     // TODO: Check if phone number is verified
//     var phNoRegex = new RegExp(/^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/);
//     if (phNoRegex.test($("#regPhNo").val())) {
//       $("#regBtnOTP")
//         .parent()
//         .parent()
//         .prev()
//         .toggleClass("is-hidden");
//       $("#regBtnOTP")
//         .next()
//         .toggleClass("is-hidden");
//       $("#regBtnOTP")
//         .parent()
//         .parent()
//         .next()
//         .toggleClass("is-hidden");
//       $("#regBtnOTP").toggleClass("is-hidden");
//       $("#regBtnOTP").prop("disabled", true);
//     } else {
//       alert(
//         "Invalid Phone Number Entered, Please Enter a valid Indian Mobile Number."
//       );
//     }
//   });
//   $(".btn-otp-resend").click(function() {
//     alert("OTP has been re-sent.");
//   });
// });
import {
  required,
  helpers,
  minLength,
  sameAs,
  maxLength
} from "vuelidate/lib/validators";

const pattern_email = helpers.regex(
  "pattern_email",
  /^[A-Za-z0-9.]+@vitstudent\.ac\.in|[A-Za-z0-9.]+@vit\.ac\.in$/
);
const pattern_phone = helpers.regex(
  "pattern_phone",
  /^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/
);

export default {
  name: "Signup",
  data() {
    return {
      form1: {
        regEmail: "",
        regPwd: "",
        regConfPwd: ""
      },
      form2: {
        regName: "",
        regPhNo: Number,
        regOTP: Number
      },
      form3: {
        regDescYourself: "",
        regExp: "",
        regBranch: undefined,
        regYear: undefined,
        regGender: undefined,
        regTT: File
      },
      formComplete1: false,
      formComplete2: false,
      form2Visible: false,
      is1Submitted: false,
      is2Submitted: false,
      is3Submitted: false,
      branchList: [
        "B.Tech - Biotechnology",
        "B.Tech - Chemical Engineering",
        "B.Tech - Civil Engineering",
        "B.Tech - Computer Science and Engineering",
        "B.Tech - Computer Science and Engineering with specialisation in Bioinformatics",
        "B.Tech - Computer Science and Engineering with specialisation in Information Security",
        "B.Tech - Computer Science and Engineering with specialisation in IoT",
        "B.Tech - Computer Science and Engineering with Business Systems(in collaboration with TCS)",
        "B.Tech - Computer Science and Engineering with specialisation in Data Science",
        "B.Tech - Computer Science and Engineering with specialisation in Block Chain Technology",
        "B.Tech - Electrical and Electronics Engineering",
        "B.Tech - Electronics and Communication Engineering",
        "B.Tech - Electronics and Instrumentation Engineering",
        "B.Tech - Electronics and Communication with specialisation in Biomedical Engineering",
        "B.Tech - Information Technology",
        "B.Tech - Mechanical Engineering",
        "B.Tech - Mechanical with specialisation in Automotive Engineering",
        "B.Tech - Production and Industrial Engineering",
        "B.Des. Industrial Design",
        "B.Arch",
        "B.Sc. (Hons.) Agriculture",
        "B.Sc Catering and Hotel Management",
        "B.Sc Computer Science",
        "B.Sc (Multimedia & Animation)",
        "B.Sc. Visual Communication",
        "B.B.A (Bachelor of Business Administration)",
        "B.Com (Bachelor of Commerce)",
        "B.C.A (Bachelor of Computer Applications)",
        "Integrated M.Tech. Software Engineering",
        "Integrated M.Tech. CSE in collaboration with Virtusa",
        "Integrated M.Tech. Computer Science and Engineering with specialisation In Data Science",
        "Integrated M.Sc. Biotechnology",
        "Integrated M.Sc. Computational Statistics and Data Analytics",
        "M.Tech. Automotive Electronics in collaboration with TIFAC-CORE industry partners",
        "M.Tech - Automotive Engineering",
        "M.Tech. Biomedical Engineering",
        "M.Tech. Biotechnology",
        "M.Tech CAD / CAM",
        "M.Tech. Communication Engineering",
        "M.Tech. Computer Science and Engineering",
        "M.Tech.Construction Technology and Management",
        "M.Tech. Control and Automation",
        "M. Tech. Computer Science and Engineering with specialisation in Big Data Analytics",
        "M. Tech. Computer Science and Engineering with specialisation in Information Security",
        "M. Tech. Computer Science and Engineering with specialisation in Artificial Intelligence and Machine learning",
        "M.Tech. Embedded Systems",
        "M.Tech. IoT and Sensor Systems",
        "M.Tech. Manufacturing Engineering",
        "M.Tech. Mechanical with specialisation in Cyber Physical Systems",
        "M.Tech. Mechatronics",
        "M.Tech. Nanotechnology",
        "M.Tech. Power Electronics and Drives",
        "M.Tech. Structural Engineering",
        "M.Tech. VLSI Design",
        "M.Des. (Industrial Design)",
        "M.C.A. (Master of Computer Applications)",
        "MBA (Master of Business Administration)",
        "M.Sc Applied MicroBiology",
        "M.Sc Biomedical Genetics",
        "M.Sc Biotechnology",
        "M.Sc Business Statistics",
        "M.Sc Chemistry",
        "M.Sc Data Science",
        "M.Sc Physics",
        "Ph.D - Internal Full Time only",
        "Integrated Ph.D  - Internal Full Time only"
      ]
    };
  },
  validations: {
    form1: {
      regEmail: {
        required,
        pattern_email
      },
      regPwd: {
        required,
        minLength: minLength(12)
      },
      regConfPwd: {
        required,
        sameAs: sameAs("regPwd")
      }
    },
    form2: {
      regName: {
        required
      },
      regPhNo: {
        required,
        pattern_phone
      },
      regOTP: {
        required
      }
    },
    form3: {
      regDescYourself: {
        required,
        maxLength: maxLength(1000)
      },
      regExp: {
        required,
        maxLength: maxLength(1000)
      },
      // regBranch: {
      //   required
      // },
      regYear: {
        required
      },
      regGender: {
        required
      },
      regTT: {
        required
      }
    }
  },
  computed: {
    axiosForm1() {
      const params = new URLSearchParams();
      params.append("email", this.form1.regEmail);
      params.append("password", this.form1.regPwd);
      params.append("gender", this.form3.regGender);
      params.append("phone", this.form2.regPhNo);
      params.append("name", this.form2.regName);
      return params;
    },
    axiosForm2() {
      const params = new URLSearchParams();
      params.append("bio", this.form3.regDescYourself);
      params.append("expectations", this.form3.regExp);
      params.append("year", this.form3.regYear);
      // params.append("branch", this.form3.regBranch);
      return params;
    },
    axiosSendEmailForm() {
      const params = new URLSearchParams();
      params.append("mailto", this.form1.regEmail);
      return params;
    }
  },
  validationGroup: ["form1", "form2", "form3"],
  methods: {
    setEmail(value) {
      this.form1.regEmail = value;
      this.$v.form1.regEmail.$touch();
    },
    setPwd(value) {
      this.form1.regPwd = value;
      this.$v.form1.regPwd.$touch();
    },
    setConfPwd(value) {
      this.form1.regConfPwd = value;
      this.$v.form1.regConfPwd.$touch();
    },
    setName(value) {
      this.form2.regName = value;
      this.$v.form2.regName.$touch();
    },
    setPhNo(value) {
      this.form2.regPhNo = value;
      this.$v.form2.regPhNo.$touch();
    },
    setOTP(value) {
      this.form2.regOTP = value;
      this.$v.form2.regOTP.$touch();
    },
    setDescYourself(value) {
      this.form3.regDescYourself = value;
      this.$v.form3.regDescYourself.$touch();
    },
    setExp(value) {
      this.form3.regExp = value;
      this.$v.form3.regExp.$touch();
    },
    // setBranch(value) {
    //   this.form3.regBranch = value;
    //   this.$v.form3.regBranch.$touch();
    // },
    setYear(value) {
      this.form3.regYear = value;
      this.$v.form3.regYear.$touch();
    },
    setGender(value) {
      this.form3.regGender = value;
      this.$v.form3.regGender.$touch();
    },
    setTT(value) {
      this.form3.regTT = value;
      this.$v.form3.regTT.$touch();
    },
    submit1() {
      this.$v.$touch();
      if (!this.$v.form1.$invalid) {
        this.$v.$reset();
        this.is1Submitted = true;
        console.log("Submitting Form 1");
        this.formComplete1 = true;
        this.form2Visible = true;
      }
    },
    submit2() {
      this.$v.$touch();
      if (!this.$v.form2.$invalid) {
        this.$v.$reset();
        this.is2Submitted = true;
        console.log("Submitting Form 2");
        this.formComplete2 = true;
        this.form2Visible = false;
      }
    },
    submit3() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$v.$reset();
        this.is3Submitted = true;
        //Fix Send Mail API Response Handling
        this.$store
          .dispatch("register", this.axiosForm1)
          .then(success => {
            this.$store
              .dispatch("sendmail", this.axiosSendEmailForm)
              .then(success => {
                this.$router.push("/verify");
              })
              .catch(error => {
                alert(error);
              });
          })
          .catch(error => {
            alert(error);
          });
      } else {
        alert("Please fill the required fields.");
      }
    }
  }
};
</script>