<template>
  <section class="app-resend-verify section has-background-black py-10">
    <div class="columns">
      <div
        class="column is-offset-1-mobile is-offset-2-tablet is-offset-3-desktop is-10-mobile is-8-tablet is-6-desktop"
      >
        <p
          class="has-text-weight-semibold is-size-2 has-text-primary has-text-centered"
        >Re-Send Verification Email</p>
        <br />
        <form id="resendForm">
          <div class="field">
            <label for="resendEmail" class="label has-text-primary">Email</label>
            <div class="control has-icons-left">
              <input
                id="resendEmail"
                name="resendEmail"
                class="input has-background-black"
                type="email"
                placeholder="Enter your email"
                autocomplete="email"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope fa-custom"></i>
              </span>
            </div>
          </div>
          <br />
          <div class="field">
            <div class="control">
              <button class="button is-medium is-primary" type="submit">
                <span>Send Verification Email</span>
                <span class="icon">
                  <i class="fas fa-chevron-right"></i>
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import $ from "jquery";

$(function() {
  // Resend Verification Form Validation
  var $resendForm = $("#resendForm");
  if ($resendForm) {
    $resendForm.validate({
      rules: {
        resendEmail: {
          // remote: verify-remote.js
          required: true,
          pattern: /^[A-Za-z0-9.]+@vitstudent\.ac\.in|[A-Za-z0-9.]+@vit\.ac\.in$/
        }
      },
      messages: {
        resendEmail: {
          // remote: "No account exists that is associated with this email.",
          required: "This field is required.",
          pattern: "Invalid email entered, please check the email entered."
        }
      },
      submitHandler: function() {
        event.preventDefault();
        if ($resendForm.valid()) {
          var $resendEmail = $("#resendEmail").val();
          $.post(
            "https://ffds-new.herokuapp.com/verifyemail",
            { email: $resendEmail },
            function(data, status, xhr) {
              console.log(data, status, xhr);
            }
          )
            .done(function() {
              console.log("Verification Email Requested Successfully");
              alert("Resent Verification Email.");
            })
            .fail(function() {
              console.log("Verification Email Request Failed");
              alert("Error: Email Resend Failed - Check Your Internet");
            });
        }
      }
    });
  }
});

export default {
  name: "ResendVerify"
};
</script>