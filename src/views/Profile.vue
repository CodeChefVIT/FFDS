<template>
  <div class="app-profile section is-marginless is-paddingless has-background-black">
    <p class="has-text-centered has-text-primary is-size-2 pt-4">Account Details</p>
    <div class="columns">
      <div
        class="column is-10-mobile is-8-tablet is-6-desktop is-4-fullhd is-offset-1-mobile is-offset-2-tablet my-6 px-2"
      >
        <form id="profileChange">
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
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope fa-custom"></i>
              </span>
            </div>
          </div>
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
              />
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
              />
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
              />
              <span class="icon is-small is-left">
                <i class="fas fa-key fa-custom"></i>
              </span>
            </div>
          </div>
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
              />
              <span class="icon is-small is-left">
                <i class="fas fa-phone-alt fa-custom"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-primary btn-next" type="submit">
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
export default {
  name: "Profile"
};
</script>