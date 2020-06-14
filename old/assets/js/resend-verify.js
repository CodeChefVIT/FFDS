$(function () {

  // Resend Verification Form Validation

  var $resendForm = $("#resendForm");
  if ($resendForm) {
    $resendForm.validate({
      rules: {
        resendEmail: {
          // remote: verify-remote.js
          required: true,
          pattern: /^[A-Za-z0-9.]+@vitstudent\.ac\.in|[A-Za-z0-9.]+@vit\.ac\.in$/,
        },
      },
      messages: {
        resendEmail: {
          // remote: "No account exists that is associated with this email.",
          required: "This field is required.",
          pattern: "Invalid email entered, please check the email entered.",
        },
      },
      submitHandler: function (form) {
        event.preventDefault();
        if ($resendForm.valid()) {
          var $resendEmail = $("#resendEmail").val();
          $.post(
            "https://ffds-new.herokuapp.com/verifyemail",
            { email: $resendEmail },
            function (data, status, xhr) {
              console.log(data, status, xhr);
            }).done(function () { console.log("Verification Email Requested Successfully"); alert("Resent Verification Email.") })
            .fail(function () { console.log("Verification Email Request Failed"); alert("Error: Email Resend Failed - Check Your Internet"); });
        }
      }
    });
  }

})