<template>
    <b-col cols="12" class="budget-overview-container">

        <b-col cols="11" class="title-summary-container">
            <label for="title" class="title-label form-label">Budget Settings</label>
            <label for="summary" class="summary-label form-label">Update your max budget information</label>
        </b-col>

        <b-col cols="11" class="budget-container">
            <input type="number" v-model="total_budget" class="budget-input-field form-control" placeholder="Budget">
        </b-col>

        <b-col cols="11" class="button-container">
            <button type="button" class="budget-save-button btn btn-primary" @click="updateBusinessOwner">Save changes</button>
        </b-col>

    </b-col>
</template>

<script>

import axios from 'axios'

export default {
  name: 'BudgetSettings',
  data() {
    return {
      userID: '',
      total_budget: 0
    }
  },
  mounted() {
    const businessOwner = JSON.parse(localStorage.getItem('businessOwner'))
    if (businessOwner && businessOwner.id) {
      this.userId = businessOwner.id
      this.displayUserTotalBudget()
    }
  },
  methods: {
    async displayUserTotalBudget() {
      try {
        const response = await axios.get(`http://localhost:3000/v1/api/BusinessOwners/${this.userId}`)
        this.total_budget = response.data.total_budget
      } catch (error) {
        console.error('Error getting user total budget:', error)
        alert('Could not get your total budget. Please try again.')
      }
    },
    async updateBusinessOwner() {
      if (!this.userId) return

      if (isNaN(this.total_budget) || this.total_budget < 0) {
        alert('Total budget cannot be a negative number')
        return
      }

      const updatedData = {
        total_budget: this.total_budget
      }

      try {
        const response = await axios.patch(`http://localhost:3000/v1/api/BusinessOwners/${this.userId}`, updatedData)
        alert('Your total budget have been updated successfully!')
      } catch (error) {
        console.error('Error updating your total budget:', error)
        alert('Could not update your total budget. Please try again.')
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
</style>
