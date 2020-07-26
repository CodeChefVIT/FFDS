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
              placeholder="Create a password (min. 6 chars)"
              autocomplete="new-password"
              v-model="form1.regPwd"
              @input="setPwd($event.target.value)"
            />
            <div v-if="$v.form1.regPwd.$dirty">
              <div class="error" v-if="!$v.form1.regPwd.required">Password is a required field.</div>
              <div
                class="error"
                v-if="!$v.form1.regPwd.minLength"
              >Password has to be atleast 6 characters.</div>
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
        <div class="field">
          <label for="regGender" class="label has-text-primary">I identify my gender as</label>
          <div class="control has-text-success has-text-weight-semibold">
            <select
              class="select has-text-white has-background-black"
              name="regGender"
              id="regGender"
              v-model="form2.regGender"
              @input="setGender($event.target.value)"
            >
              <option value="selectGender" disabled default>Choose a Gender</option>
              <option :key="gender" :value="gender" v-for="gender in genderList">{{ gender }}</option>
            </select>
            <br />
            <div v-if="$v.form2.regGender.$dirty">
              <div
                class="error has-text-white has-text-weight-normal"
                v-if="!$v.form2.regGender.required"
              >Gender is a required field.</div>
            </div>
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
              <span>Create Account</span>
              <span class="icon">
                <i class="fas fa-chevron-right"></i>
              </span>
            </button>
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
        // regOTP: Number,
        regGender: undefined
      },
      formComplete1: false,
      formComplete2: false,
      form2Visible: false,
      is1Submitted: false,
      is2Submitted: false,
      is3Submitted: false,
      genderList: [
        "Male",
        "Female",
        "Genderqueer / Non-Binary",
        "Prefer Not To Say"
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
        minLength: minLength(6)
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
      // regOTP: {
      //   required
      // },
      regGender: {
        required
      }
    }
  },
  computed: {
    axiosFormUserCreate() {
      const params = new URLSearchParams();
      params.append("name", this.form2.regName);
      params.append("gender", this.form2.regGender);
      params.append("password", this.form1.regPwd);
      params.append("email", this.form1.regEmail);
      params.append("phone", this.form2.regPhNo);
      return params;
    },
    axiosFormSendEmail() {
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
    setGender(value) {
      this.form2.regGender = value;
      this.$v.form2.regGender.$touch();
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
        this.$v.$touch();
        if (!this.$v.$invalid) {
          this.$v.$reset();
          this.is3Submitted = true;
          console.log("Submitting Form 3");
          //Fix Send Mail API Response Handling
          this.$store
            .dispatch("register", this.axiosFormUserCreate)
            .then(success => {
              this.$store
                .dispatch("sendmail", this.axiosFormSendEmail)
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
  }
};
</script>