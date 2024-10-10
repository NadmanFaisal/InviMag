<template>
    <b-col cols="12" class="password-settings-container">

        <b-col cols="11" class="title-summary-container">
            <label for="title" class="title-label form-label">Password Settings</label>
            <label for="summary" class="summary-label form-label">Update your password information</label>
        </b-col>

        <b-col cols="11" class="current-password-container">
            <label for="current-password" class="current-password-label form-label">Current password</label>
            <input type="text" class="current-password-input-field form-control" placeholder="Type in your password" label="Recipient's username">
        </b-col>

        <b-col cols="11" class="new-password-container">
            <label for="new-password" class="new-password-label form-label">New password</label>
            <input type="text" class="new-password-input-field form-control" placeholder="Type in your new password" label="Recipient's name">
        </b-col>

        <b-col cols="11" class="confirm-password-container">
            <label for="confirm-password" class="confirm-password-label form-label">Confirm password</label>
            <input type="text" class="confirm-password-input-field form-control" placeholder="Confirm your password" label="Recipient's password">
        </b-col>

        <b-col cols="11" class="button-container">
            <button type="button" class="password-details-save-button btn btn-primary">Save changes</button>
        </b-col>

    </b-col>
</template>

<script>
export default {
  name: 'PasswordSettings'
}
</script>

<style scoped>
.title-summary-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.title-label {
  color: #787676;
  margin-top: 5%;
  text-align: center;
  font-family: "Istok Web";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.summary-label {
  color: #787676;

  text-align: center;
  font-family: "Istok Web";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.button-container {
  display: flex;
  justify-content: flex-end;
}

.password-settings-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  height: 60%;

  border-radius: 15px;
  border: var(--sds-size-stroke-border) solid rgba(0, 0, 0, 0.10);
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.current-password-container, .new-password-container, .confirm-password-container {
  margin-top: 2%;
  display: flex;
  height: 19%;
  flex-direction: column;
}

.current-password-input-field {
  border-radius: 10px;
  height: 50%;
  background: #e4e4e4;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.30);
}

.new-password-input-field, .confirm-password-input-field {
  border-radius: 10px;
  height: 50%;
  background: #FFF;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.30);
}

.current-password-label, .new-password-label, .confirm-password-label {
  color: #787676;
  font-family: "Istok Web";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.password-details-save-button {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: #37F;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  font-family: "Istok Web";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
