<template>
  <div class="settings-page">
    <b-container fluid>
      <b-row class="min-vh-100">

        <b-col cols="2" class="left-section">
          <b-col cols="12" class="company-name-container">
            <label for="company-name" class="company-name-label form-label">Company Name</label>
          </b-col>

          <div class="top-navigation-container">
            <b-card>
              <a class="nav-link" href="/">Home</a>
            </b-card>
            <b-card>
              <a class="nav-link" href="#">Inventory</a>
            </b-card>
            <b-card>
              <a class="nav-link" href="#">Suppliers</a>
            </b-card>
            <b-card>
              <a class="nav-link" href="#">Products</a>
            </b-card>
            <b-card>
              <a class="nav-link" href="#">Order</a>
            </b-card>
          </div>

          <div class="bottom-navigation-container">
            <b-card class="settings-card">
              <a class="nav-link active" href="#">Settings</a>
            </b-card>
            <b-card>
              <a class="nav-link" href="#">Log out</a>
            </b-card>
          </div>
        </b-col>

        <b-col cols="5" class="middle-section">

          <!-- Profile Overview -->
          <b-col cols="12" class="profile-overview-container">
            <b-col cols="11" class="silly-rectangle">
            </b-col>

            <div class="profile-picture">
              <img src="../images/profile-picture.jpeg"
                alt="Profile Picture"
                class="img-fluid rounded-circle"
              />
            </div>
            <div class="business-owner-details">
              <h2 class="profile-name">John Doe</h2>
              <p class="profile-title">Business Owner</p>
            </div>
          </b-col>

          <!-- Account Settings -->
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
        </b-col>

        <b-col cols="5" class="right-section">

          <!-- Password Settings -->
          <b-col cols="12" class="password-settings-container">

            <b-col cols="11" class="title-summary-container">
              <label for="title" class="title-label form-label">Password Settings</label>
              <label for="summary" class="summary-label form-label">Update your password information</label>
            </b-col>

            <b-col cols="11" class="current-password-container">
              <label for="current-password" class="current-password-label form-label">Current password</label>
              <input type="text" class="current-password-input-field form-control" placeholder="Username" label="Recipient's username">
            </b-col>

            <b-col cols="11" class="new-password-container">
              <label for="new-password" class="new-password-label form-label">New password</label>
              <input type="text" class="new-password-input-field form-control" placeholder="Type in your name" label="Recipient's name">
            </b-col>

            <b-col cols="11" class="confirm-password-container">
              <label for="confirm-password" class="confirm-password-label form-label">Confirm password</label>
              <input type="text" class="confirm-password-input-field form-control" placeholder="Type in your email" label="Recipient's password">
            </b-col>

            <b-col cols="11" class="button-container">
              <button type="button" class="password-details-save-button btn btn-primary">Save changes</button>
            </b-col>

          </b-col>

          <!-- Budget Settings -->
          <b-col cols="12" class="budget-overview-container">

            <b-col cols="11" class="title-summary-container">
              <label for="title" class="title-label form-label">Budget Settings</label>
              <label for="summary" class="summary-label form-label">Update your max budget information</label>
            </b-col>

            <b-col cols="11" class="budget-container">
              <input type="number" v-model="budget" class="budget-input-field form-control" placeholder="Budget">
            </b-col>

            <b-col cols="11" class="button-container">
              <button type="button" class="budget-save-button btn btn-primary">Save changes</button>
            </b-col>

          </b-col>

        </b-col>

      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      budget: 0
    }
  },
  methods: {
  }
}

</script>

<style scoped>
.row {
  margin: 0;
}

.container-fluid {
  padding: 0;
}

.left-section {
  border-radius: 0px 50px 50px 0px;
  background: #37f;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

.company-name-label {
  margin-top: 10%;
  color: var(--Schemes-On-Primary, #FFF);
  text-align: center;
  font-family: "Istok Web";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.top-navigation-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20%;
}

.top-navigation-container .card {
  background: #37f;
  text-align: center;
  padding: 5px;
  flex: 1;
  border: none;
}

.top-navigation-container .nav-link {
  color: var(--Schemes-On-Primary, #fff);
  font-family: 'Istok Web';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}

.top-navigation-container .nav-link:hover {
  color: #0056b3;
  text-decoration: none;
}

.bottom-navigation-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50%;
}

.bottom-navigation-container .card {
  background: #37f;
  text-align: center;
  padding: 15px;
  flex: 1;
  border: none;
}

.bottom-navigation-container .nav-link {
  color: var(--Schemes-On-Primary, #fff);
  font-family: 'Istok Web';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}

.bottom-navigation-container .nav-link:hover {
  color: #0056b3;
  text-decoration: none;
}

.bottom-navigation-container .settings-card {
  background: linear-gradient(
    to right,
    #ffffffd8 0%,
    #e0e0e000 50%,
    #ffffff00 100%
  );
  text-align: center;
  padding: 5px;
}

.card:hover {
  background: linear-gradient(
    to right,
    #ffffff3a 0%,
    #e0e0e000 50%,
    #ffffff00 100%
  );
}

.middle-section, .right-section {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #f1f1f1;
}

.silly-rectangle {
  display: flex;
  height: 80px;
  flex-direction: column;
  border-radius: 10px;
  background: #37F;
  position: absolute;
}

.profile-overview-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 15px;
  border: var(--sds-size-stroke-border) solid rgba(0, 0, 0, 0.10);
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;
}

.profile-picture {
  margin-top: 5%;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  z-index: 2;
}

.profile-picture img {
  width: 100%;
  height: 100%;
}

.profile-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #787676;

  text-align: center;
  font-family: "Istok Web";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 10px;
}

.profile-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #787676;

  text-align: center;
  font-family: "Istok Web";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 10px;
}

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

.budget-overview-container {
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  padding: 20px;
  border-radius: 15px;
  border: var(--sds-size-stroke-border) solid rgba(0, 0, 0, 0.10);
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;
}

.budget-container {
  margin-top: 3%;
  display: flex;
  height: 40%;
  flex-direction: column;
}

.budget-input-field {
  border-radius: 10px;
  height: 80%;
  background: #FFF;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.30);
  color: #37F;
  text-align: center;
  font-family: "Istok Web";
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.budget-save-button {
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

@media screen and (max-width: 768px) {
  .row {
    flex-direction: column;
  }

  .middle-section, .right-section {
    flex: none;
    width: 100%;
    padding: 10px;
  }

   .left-section {
    display: none;
   }

}

</style>
