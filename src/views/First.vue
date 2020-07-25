<template>
  <div class="app-profile section has-background-black">
    <div class="columns">
      <form
        id="profileForm"
        class="form-signup column is-10-mobile is-8-tablet is-6-desktop is-offset-1-mobile is-offset-2-tablet is-offset-3-desktop my-6 px-2"
        @submit.prevent="submit"
      >
        <div>
          <div class="field is-flex is-horizontal-center image-upload">
            <label for="regImg">
              <figure class="image is-128x128">
                <img class="is-rounded" src="../assets/img/default-profile.jpeg" alt="User Image" />
              </figure>
            </label>
            <input
              id="regImg"
              name="regImg"
              type="file"
              @input="setImg($event.target.value)"
              accept="image/png, image/jpeg"
              required
            />
          </div>
          <div v-if="$v.regImg.$dirty">
            <div
              class="error has-text-centered"
              v-if="!$v.regImg.required"
            >Profile Image is required.</div>
          </div>
        </div>
        <div class="field has-text-centered">
          <span class="is-size-5 has-text-weight-semibold has-text-success">{{ this.regName }}</span>
          <br />
          <span class="has-text-weight-medium">{{ this.regPhNo }}</span>
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
              v-model="regDescYourself"
              @input="setDescYourself($event.target.value)"
              autofocus
            />
            <div v-if="$v.regDescYourself.$dirty">
              <div class="error" v-if="!$v.regDescYourself.required">This field is required.</div>
              <div
                class="error"
                v-if="!$v.regDescYourself.maxLength"
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
              placeholder="List Expectations like: tall, slim, athletic"
              v-model="regExp"
              @input="setExp($event.target.value)"
            />
            <div v-if="$v.regExp.$dirty">
              <div class="error" v-if="!$v.regExp.required">This field is required.</div>
              <div class="error" v-if="!$v.regExp.maxLength">Maximum 1000 characters allowed.</div>
            </div>
          </div>
        </div>
        <br />
        <div class="field">
          <label for="regBranch" class="label has-text-primary">Branch</label>
          <div class="control">
            <select
              class="select has-text-white has-background-black"
              name="regBranch"
              id="regBranch"
              v-model="regBranch"
              @input="setBranch($event.target.value)"
            >
              <option value="selectYear" disabled default>Choose a Branch</option>
              <option v-for="branch in branchList" :key="branch" :value="branch">{{ branch }}</option>
            </select>
            <div v-if="$v.regBranch.$dirty">
              <div class="error" v-if="!$v.regBranch.required">Branch is a required field.</div>
            </div>
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
              v-model="regYear"
              @input="setYear($event.target.value)"
            />
            <label for="regYear2020">2020</label>
            <input
              class="mr-1 ml-1"
              type="radio"
              id="regYear2019"
              name="regYear"
              value="2019"
              v-model="regYear"
              @input="setYear($event.target.value)"
            />
            <label for="regYear2019">2019</label>
            <input
              class="mr-1 ml-1"
              type="radio"
              id="regYear2018"
              name="regYear"
              value="2018"
              v-model="regYear"
              @input="setYear($event.target.value)"
            />
            <label for="regYear2018">2018</label>
            <input
              class="mr-1 ml-1"
              type="radio"
              id="regYear2017"
              name="regYear"
              value="2017"
              v-model="regYear"
              @input="setYear($event.target.value)"
            />
            <label for="regYear2017">2017</label>
            <input
              class="mr-1 ml-1"
              type="radio"
              id="regYear2016"
              name="regYear"
              value="2016"
              v-model="regYear"
              @input="setYear($event.target.value)"
            />
            <label for="regYear2016">2016</label>
            <input
              class="mr-1 ml-1"
              type="radio"
              id="regYear2015"
              name="regYear"
              value="2015"
              v-model="regYear"
              @input="setYear($event.target.value)"
            />
            <label for="regYear2015">2015</label>
            <input
              class="mr-1 ml-1"
              type="radio"
              id="regYear2014"
              name="regYear"
              value="2014"
              v-model="regYear"
              @input="setYear($event.target.value)"
            />
            <label for="regYear2014">2014</label>
            <input
              class="mr-1 ml-1"
              type="radio"
              id="regYear2013"
              name="regYear"
              value="2013"
              v-model="regYear"
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
            <div v-if="$v.regYear.$dirty">
              <div
                class="error has-text-white has-text-weight-normal"
                v-if="!$v.regYear.required"
              >Year of admission is a required field.</div>
            </div>
          </div>
        </div>
        <br />
        <!-- Fix: Timtable Not Compulsory -->
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
          <div class="error" v-if="!$v.regTT.required">Time Table is required.</div>
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
              @click.prevent="submit"
              type="submit"
              :disabled="$v.$invalid || isSubmitted"
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
  </div>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";
export default {
  name: "First",
  data() {
    return {
      regDescYourself: "",
      regName: localStorage.getItem("user.name"),
      regPhNo: localStorage.getItem("user.phone"),
      regExp: [],
      regBranch: undefined,
      regYear: undefined,
      regTT: File,
      isSubmitted: false,
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
    regDescYourself: {
      required,
      maxLength: maxLength(1000)
    },
    regExp: {
      required,
      maxLength: maxLength(1000)
    },
    regYear: {
      required
    },
    regBranch: {
      required
    },
    regTT: {
      required
    },
    regImg: {
      required
    }
  },
  computed: {
    axiosFormProfile() {
      const params = new URLSearchParams();
      params.append("branch", this.regBranch);
      params.append("year", this.regYear);
      // Add Email If Required By Backend
      params.append("bio", this.regDescYourself);
      return params;
    },
    axiosFormUserImage() {
      var data = new FormData();
      data.append("inputFile", this.regImg);
      return data;
    }
  },
  methods: {
    setDescYourself(value) {
      this.regDescYourself = value;
      this.$v.regDescYourself.$touch();
    },
    setExp(value) {
      this.regExp = value.split(",");
      this.$v.regExp.$touch();
    },
    setBranch(value) {
      this.regBranch = value;
      this.$v.regBranch.$touch();
    },
    setYear(value) {
      this.regYear = value;
      this.$v.regYear.$touch();
    },
    setTT(value) {
      this.regTT = value;
      this.$v.regTT.$touch();
    },
    setImg(value) {
      this.regImg = value;
      this.$v.regImg.$touch();
    },
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log("Profile Form is being Submitted!");
        this.isSubmitted = true;
        this.$store
          .dispatch("updateDetails", this.axiosFormProfile, {
            expectations: this.regExp
          })
          .then(success => {
            console.log("Profile Updated!");
            this.$store
              .dispatch(
                "addUserImage",
                this.axiosFormUserImage,
                "/user/addImage/" + localStorage.getItem("user.email")
              )
              .then(success => {
                console.log("User Image Added!");
                this.$router.push("/dashboard");
              })
              .catch(error => {
                alert(error);
              });
          })
          .catch(error => {
            alert(error);
          });
      }
    }
  }
};
</script>