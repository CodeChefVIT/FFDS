<template>
  <div class="app-profile section is-marginless is-paddingless has-background-black">
    <!-- <p class="has-text-centered has-text-primary is-size-2 pt-4">Account Details</p> -->
    <div class="field is-flex is-horizontal-center pt-4">
      <figure class="image is-128x128">
        <img class="is-rounded" src="../assets/img/default-profile.jpeg" alt="User Image" />
      </figure>
    </div>
    <div class="field has-text-centered">
      <span class="is-size-5 has-text-weight-semibold has-text-success user-name">$user.name</span>
    </div>
    <div class="columns">
      <div
        class="column is-10-mobile is-8-tablet is-6-desktop is-4-fullhd is-offset-1-mobile is-offset-2-tablet is-offset-3-desktop is-offset-4-fullhd my-2 px-2"
      >
        <div class="has-text-success subtitle cursor-pointer" @click="changeEmail">
          <span>Change Email&nbsp;</span>
          <span>
            <i class="fas fa-chevron-right fa-sm"></i>
          </span>
        </div>
        <form id="profileEmailChange" v-if="switchEmail" @submit.prevent="submitEmail">
          <div class="field">
            <label for="profileEmail" class="label has-text-primary">New Email</label>
            <div class="control has-icons-left">
              <input
                id="profileEmail"
                name="profileEmail"
                class="input has-background-black"
                type="email"
                placeholder="Enter your email"
                autocomplete="email"
                v-model="formEmail.profileEmail"
                @input="setEmail($event.target.value)"
              />
              <div class="error" v-if="!$v.formEmail.profileEmail.required">Email is required.</div>
              <div
                class="error"
                v-if="!$v.formEmail.profileEmail.pattern_email"
              >Enter a valid VIT email.</div>
              <span class="icon is-small is-left">
                <i class="fas fa-envelope fa-custom"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button
                class="button is-primary btn-next"
                type="submit"
                @submit.prevent="submitEmail"
              >
                <span>Submit</span>
                <span class="icon">
                  <i class="fas fa-chevron-right"></i>
                </span>
              </button>
            </div>
          </div>
          <br />
        </form>
        <div class="has-text-success subtitle cursor-pointer" @click="changePwd">
          <span>Change Password&nbsp;</span>
          <span>
            <i class="fas fa-chevron-right fa-sm"></i>
          </span>
        </div>
        <form id="profilePwdChange" v-if="switchPwd" @submit.prevent="submitPwd">
          <br />
          <div class="field">
            <label for="profileCurrentPwd" class="label has-text-primary">Current Password</label>
            <div class="control has-icons-left">
              <input
                id="profileCurrentPwd"
                name="profileCurrentPwd"
                class="input has-background-black"
                type="password"
                placeholder="Current password"
                autocomplete="old-password"
                v-model="formPwd.profileCurrentPwd"
                @input="setCurrentPwd($event.target.value)"
              />
              <div
                class="error"
                v-if="!$v.formPwd.profileCurrentPwd.required"
              >Current Password is required.</div>
              <span class="icon is-small is-left">
                <i class="fas fa-key fa-custom"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <label for="profilePwd" class="label has-text-primary">New Password</label>
            <div class="control has-icons-left">
              <input
                id="profilePwd"
                name="profilePwd"
                class="input has-background-black"
                type="password"
                placeholder="Create a new password (min. 12 chars)"
                autocomplete="new-password"
                v-model="formPwd.profilePwd"
                @input="setPwd($event.target.value)"
              />
              <div class="error" v-if="!$v.formPwd.profilePwd.required">New Password is required.</div>
              <div
                class="error"
                v-if="!$v.formPwd.profilePwd.minLength"
              >New Password has to be atleast 12 characters.</div>
              <span class="icon is-small is-left">
                <i class="fas fa-key fa-custom"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <label for="profileConfPwd" class="label has-text-primary">Confirm New Password</label>
            <div class="control has-icons-left">
              <input
                id="profileConfPwd"
                name="profileConfPwd"
                class="input has-background-black"
                type="text"
                placeholder="Confirm your new password"
                autocomplete="new-password"
                v-model="formPwd.profileConfPwd"
                @input="setConfPwd($event.target.value)"
              />
              <div class="error" v-if="!$v.formPwd.profileConfPwd.sameAs">This field is required.</div>
              <span class="icon is-small is-left">
                <i class="fas fa-key fa-custom"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-primary btn-next" type="submit" @submit.prevent="submitPwd">
                <span>Submit</span>
                <span class="icon">
                  <i class="fas fa-chevron-right"></i>
                </span>
              </button>
            </div>
          </div>
          <br />
        </form>
        <div class="has-text-success subtitle cursor-pointer" @click="changePhNo">
          <span>Change Phone Number&nbsp;</span>
          <span>
            <i class="fas fa-chevron-right fa-sm"></i>
          </span>
        </div>
        <form id="profilePhNoChange" v-if="switchPhNo" @submit.prevent="submitPhNo">
          <br />
          <div class="field">
            <label for="profilePhNo" class="label has-text-primary">New Phone Number</label>
            <div class="control has-icons-left">
              <input
                id="profilePhNo"
                name="profilePhNo"
                class="input has-background-black"
                type="number"
                placeholder="Enter new phone number"
                autocomplete="tel-national"
                pattern="^(\+91[-\s]?)?[0]?(91)?[789]\d{9}$"
                v-model="formPhNo.profilePhNo"
                @input="setPhNo($event.target.value)"
              />
              <div class="error" v-if="!$v.formPhNo.profilePhNo.required">Phone number is required.</div>
              <div
                class="error"
                v-if="!$v.formPhNo.profilePhNo.pattern_phone"
              >Please enter a valid indian phone number.</div>
              <span class="icon is-small is-left">
                <i class="fas fa-phone-alt fa-custom"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-primary btn-next" type="submit" @submit.prevent="submitPhNo">
                <span>Submit</span>
                <span class="icon">
                  <i class="fas fa-chevron-right"></i>
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, helpers, minLength, sameAs } from "vuelidate/lib/validators";

const pattern_email = helpers.regex(
  "pattern_email",
  /^[A-Za-z0-9.]+@vitstudent\.ac\.in|[A-Za-z0-9.]+@vit\.ac\.in$/
);
const pattern_phone = helpers.regex(
  "pattern_phone",
  /^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/
);

export default {
  name: "Profile",
  data() {
    return {
      formEmail: {
        profileEmail: ""
      },
      formPwd: {
        profileCurrentPwd: "",
        profilePwd: "",
        profileConfPwd: ""
      },
      formPhNo: {
        profilePhNo: Number
      },
      switchEmail: false,
      switchPwd: false,
      switchPhNo: false
    };
  },
  validations: {
    formEmail: {
      profileEmail: {
        required,
        pattern_email
      }
    },
    formPwd: {
      profileCurrentPwd: {
        required
      },
      profilePwd: {
        required,
        minLength: minLength(12)
      },
      profileConfPwd: {
        sameAs: sameAs("regPwd")
      }
    },
    formPhNo: {
      profilePhNo: {
        required,
        pattern_phone
      }
    }
  },
  methods: {
    setEmail(value) {
      this.formEmail.profileEmail = value;
      this.$v.formEmail.profileEmail.$touch();
    },
    setCurrentPwd(value) {
      this.formPwd.profileCurrentPwd = value;
      this.$v.formPwd.profileCurrentPwd.$touch();
    },
    setPwd(value) {
      this.formPwd.profilePwd = value;
      this.$v.formPwd.profilePwd.$touch();
    },
    setConfPwd(value) {
      this.formPwd.profileConfPwd = value;
      this.$v.formPwd.profileConfPwd.$touch();
    },
    setPhNo(value) {
      this.formPhNo.profilePhNo = value;
      this.$v.formPhNo.profilePhNo.$touch();
    },
    changeEmail() {
      this.switchEmail = !this.switchEmail;
    },
    changePwd() {
      this.switchPwd = !this.switchPwd;
    },
    changePhNo() {
      this.switchPhNo = !this.switchPhNo;
    },
    // Add API Call for updation
    submitEmail() {
      this.$v.$touch();
      if (this.$v.formEmail.$invalid) {
        console.log("Updating Email");
      } else {
        alert("Please fill the required fields.");
      }
      this.switchEmail = false;
    },
    submitPwd() {
      this.$v.$touch();
      if (this.$v.formPwd.$invalid) {
        console.log("Updating Password");
      } else {
        alert("Please fill the required fields.");
      }
      this.switchPwd = false;
    },
    submitPhNo() {
      this.$v.$touch();
      if (this.$v.formPhNo.$invalid) {
        console.log("Updating Phone Number");
      } else {
        alert("Please fill the required fields.");
      }
      this.switchPhNo = false;
    }
  }
};
</script>