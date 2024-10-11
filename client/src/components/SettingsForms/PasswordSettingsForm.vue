<template>
    <b-col cols="12" class="password-settings-container">

        <b-col cols="11" class="title-summary-container">
            <label for="title" class="title-label form-label">Password Settings</label>
            <label for="summary" class="summary-label form-label">Update your password information</label>
        </b-col>

        <b-col cols="11" class="current-password-container">
            <label for="current-password" class="current-password-label form-label">Current password</label>
            <input type="password" v-model="currentPassword" class="current-password-input-field form-control" placeholder="Type in your password">
        </b-col>

        <b-col cols="11" class="new-password-container">
            <label for="new-password" class="new-password-label form-label">New password</label>
            <input type="password" v-model="newPassword" class="new-password-input-field form-control" placeholder="Type in your new password" label="Recipient's name">
        </b-col>

        <b-col cols="11" class="confirm-password-container">
            <label for="confirm-password" class="confirm-password-label form-label">Confirm password</label>
            <input type="password" v-model="confirmPassword" class="confirm-password-input-field form-control" placeholder="Confirm your password">
        </b-col>

        <b-col cols="11" class="button-container">
            <button type="button" class="password-details-save-button btn btn-primary" @click="savePasswordChanges">Save changes</button>
        </b-col>

    </b-col>
</template>

<script>

import axios from 'axios'

export default {
  name: 'AccountSettings',
  data() {
    return {
      userId: '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  },
  mounted() {
    const businessOwner = JSON.parse(localStorage.getItem('businessOwner'))
    if (businessOwner && businessOwner.id) {
      this.userId = businessOwner.id
    }
  },
  methods: {
    async savePasswordChanges() {
      if (!this.newPassword || !this.currentPassword || !this.confirmPassword) {
        alert('Please fill out all fields.')
        return
      }

      if (this.newPassword !== this.confirmPassword) {
        alert('New password and confirmation do not match.')
        return
      }

      try {
        // Send PATCH request to update password
        const response = await axios.patch(`http://localhost:3000/v1/api/BusinessOwners/${this.userId}`, {
          currentPassword: this.currentPassword,
          newPassword: this.newPassword
        })

        if (response.status === 200) {
          alert('Password updated successfully!')
          this.currentPassword = ''
          this.newPassword = ''
          this.confirmPassword = ''
        } else {
          alert('Failed to update password.')
        }
      } catch (error) {
        if (error.response) {
          alert('Error updating password: ' + error.response.data.message)
        } else {
          alert('Error updating password: ' + error.message)
        }
      }
    }
  }
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
