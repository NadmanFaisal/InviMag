<template>
  <div class="settings-page">
    <div class="container-fluid">
      <div class="row min-vh-100">

        <div class="col-2 left-section">
          <div class="top-navigation-container">
            <div class="card">
              <a class="nav-link" href="/">Home</a>
            </div>
            <div class="card">
              <a class="nav-link" href="#">Inventory</a>
            </div>
            <div class="card">
              <a class="nav-link" href="#">Suppliers</a>
            </div>
            <div class="card">
              <a class="nav-link" href="#">Products</a>
            </div>
            <div class="card">
              <a class="nav-link" href="#">Order</a>
            </div>
          </div>

          <div class="bottom-navigation-container">
            <div class="card settings-card">
              <a class="nav-link active" href="#">Settings</a>
            </div>
            <div class="card">
              <a class="nav-link" href="#">Log out</a>
            </div>
          </div>

        </div>

        <div class="col-5 middle-section">

          <div class="col-12 profile-overview-container">
            <div class="col-11 silly-rectangle">
            </div>

            <div class="profile-picture">
                <img src="/home/nadman/OneDrive_Chalmers/Semester 3/DIT342 - Web development/group-17-web/client/src/images/profile-picture.jpeg" alt="Profile Picture" class="img-fluid rounded-circle" />
            </div>
            <div class="business-owner-details">
              <h2 class="profile-name">John Doe</h2>
              <p class="profile-title">Business Owner</p>
            </div>
          </div>

          <div class="col-12 account-settings-container">

            <div class="col-11 title-summary-container">
              <label for="title" class="title-label form-label">Account Settings</label>
              <label for="summary" class="summary-label form-label">Update your account information</label>
            </div>

            <div class="col-11 username-container">
              <label for="username" class="username-label form-label">Username</label>
              <input type="text" class="username-input-field form-control" placeholder="Username" label="Recipient's current password">
            </div>

            <div class="col-11 name-container">
              <label for="name" class="name-label form-label">Name</label>
              <input type="text" class="name-input-field form-control" placeholder="Type in your name" label="Recipient's new password">
            </div>

            <div class="col-11 email-container">
              <label for="email" class="email-label form-label">Email</label>
              <input type="text" class="email-input-field form-control" placeholder="Type in your email" label="Recipient's old password">
            </div>

            <div class="col-11 button-container">
              <button type="button" class="account-details-save-button btn btn-primary">Save changes</button>
            </div>
          </div>

        </div>

        <div class="col-5 right-section">
          <div class="col-12 password-settings-container">

            <div class="col-11 title-summary-container">
              <label for="title" class="title-label form-label">Password Settings</label>
              <label for="summary" class="summary-label form-label">Update your password information</label>
            </div>

            <div class="col-11 current-password-container">
              <label for="current-password" class="current-password-label form-label">Current password</label>
              <input type="text" class="current-password-input-field form-control" placeholder="Username" label="Recipient's username">
            </div>

            <div class="col-11 new-password-container">
              <label for="new-password" class="new-password-label form-label">New passowrd</label>
              <input type="text" class="new-password-input-field form-control" placeholder="Type in your name" label="Recipient's name">
            </div>

            <div class="col-11 confirm-password-container">
              <label for="confirm-password" class="confirm-password-label form-label">Confirm password</label>
              <input type="text" class="confirm-password-input-field form-control" placeholder="Type in your email" label="Recipient's password">
            </div>

            <div class="col-11 button-container">
              <button type="button" class="password-details-save-button btn btn-primary">Save changes</button>
            </div>
          </div>

          <div class="col-12 budget-overview-container">

            <div class="col-11 title-summary-container">
              <label for="title" class="title-label form-label">Budget Settings</label>
              <label for="summary" class="summary-label form-label">Update your max budget information</label>
            </div>

            <div class="col-11 budget-container">
              <input type="number" v-model="budget" class="budget-input-field form-control" placeholder="Budget" label="Recipient's budget">
            </div>

            <div class="col-11 button-container">
              <button type="button" class="budget-save-button btn btn-primary">Save changes</button>
            </div>
          </div>

        </div>

      </div>
    </div>
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

.top-navigation-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40%;
}

.top-navigation-container .card {
  background: #37f;
  text-align: center;
  padding: 15px;
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
  margin-top: 100%;
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
  padding: 15px;
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

.test-container {
  text-align: center;
  padding-top: 50px;
}
</style>
