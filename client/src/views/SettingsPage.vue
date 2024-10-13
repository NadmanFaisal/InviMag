<template>
  <div class="settings-page">
    <b-container fluid>
      <b-row class="min-vh-100">

        <!-- Navigation bar on the left -->

      <b-row>
        <!-- Empty section to align the middle section and right section properly-->
        <b-col cols="2" class="empty-left-section">
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

.empty-left-section {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #f1f1f1;
}

.middle-section, .right-section {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #f1f1f1;
}

.content-section {
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
  .content-section {
    flex: none;
    width: 100%;
    padding: 10px;
  }

   .left-section {
    display: none;
   }

}

</style>
