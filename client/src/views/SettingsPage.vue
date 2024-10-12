<template>
  <div class="settings-page">
    <b-container fluid>
      <b-row class="min-vh-100">

        <!-- Navigation bar on the left -->
        <Sidebar/>
    <b-col cols = "10" class = "offset-2 content-section" >    
      <b-row>
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
import NavigationBar from '../components/SettingsForms/NavigationForm.vue'
import Sidebar from '../components/InventoryComponents/Sidebar.vue'

export default {
  components: {
    ProfileOverview,
    AccountSettings,
    PasswordSettings,
    BudgetSettings,
    NavigationBar,
    Sidebar
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


.middle-section, .right-section {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #f1f1f1;
}

.sidebar{
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 16.666667%;
  background-color: #37F;
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
