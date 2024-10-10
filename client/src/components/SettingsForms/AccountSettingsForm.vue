<template>
    <b-col cols="12" class="account-settings-container">

<b-col cols="11" class="title-summary-container">
  <label for="title" class="title-label form-label">Account Settings</label>
  <label for="summary" class="summary-label form-label">Update your account information</label>
</b-col>

<b-col cols="11" class="username-container">
  <label for="username" class="username-label form-label">Username</label>
  <input type="text" class="username-input-field form-control" placeholder="Username">
</b-col>

<b-col cols="11" class="name-container">
  <label for="name" class="name-label form-label">Name</label>
  <input type="text" class="name-input-field form-control" placeholder="Type in your name">
</b-col>

<b-col cols="11" class="email-container">
  <label for="email" class="email-label form-label">Email</label>
  <input type="text" class="email-input-field form-control" placeholder="Type in your email">
</b-col>

<b-col cols="11" class="button-container">
  <button type="button" class="account-details-save-button btn btn-primary">Save changes</button>
</b-col>

</b-col>
</template>

<script>
export default {
  name: 'AccountSettings'
}
</script>

<style scoped>
.account-settings-container {
  margin-top: 3%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  text-align: left;
  height: auto;
  border-radius: 15px;
  border: var(--sds-size-stroke-border) solid rgba(0, 0, 0, 0.10);
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.username-container, .name-container, .email-container {
  margin-top: 3%;
  display: flex;
  height: 20%;
  flex-direction: column;
}

.username-input-field {
  border-radius: 10px;
  height: 50%;
  background: #e4e4e4;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.30);
}

.name-input-field, .email-input-field {
  border-radius: 10px;
  height: 50%;
  background: #FFF;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.30);
}

.username-label, .name-label, .email-label {
  color: #787676;
  font-family: "Istok Web";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

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

.account-details-save-button {
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
