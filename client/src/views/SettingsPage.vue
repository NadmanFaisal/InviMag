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
          <ProfileOverview />

          <!-- Account Settings -->
          <AccountSettings />

        </b-col>

        <b-col cols="5" class="right-section">

          <!-- Password Settings -->
          <PasswordSettings />

          <!-- Budget Settings -->
          <BudgetSettings/>

        </b-col>

      </b-row>
    </b-container>
  </div>
</template>

<script>

import ProfileOverview from '../components/SettingsForms/ProfileOverviewForm.vue'
import AccountSettings from '../components/SettingsForms/AccountSettingsForm.vue'
import PasswordSettings from '../components/SettingsForms/PasswordSettingsForm.vue'
import BudgetSettings from '../components/SettingsForms/BudgetSettingsForm.vue'

export default {
  components: {
    ProfileOverview,
    AccountSettings,
    PasswordSettings,
    BudgetSettings
  },
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
