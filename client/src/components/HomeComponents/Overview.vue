<template>
  <b-container fluid class="light-blue-container">
    <b-row class="justify-content-center">
      <!-- Wrap the overview section -->
      <div class="overview-section text-center">
        <b class="overview-text">Overview</b>
        <b-row class="justify-content-center g-3"> <!-- Add gutters (spacing) between components -->
          <b-col cols="auto" class="group-child me-4">
            <b class="b">98</b>
            <b class="to-be-shipped">TO BE SHIPPED</b>
          </b-col>

          <b-col cols="auto" class="group-child me-4">
            <b class="b" style="color: green;">98</b>
            <b class="to-be-shipped" style="color: green;">DELIVERED</b>
          </b-col>

          <b-col cols="auto" class="group-child">
            <b class="b" style="color: red;">98</b>
            <b class="to-be-shipped" style="color: red;">RETURNED</b>
          </b-col>
        </b-row>
      </div>

      <!-- Wrap the budget section -->
      <div class="budget-section text-center mt-4">
        <b class="overview-text">Budget</b>
        <b-row class="justify-content-center g-3"> <!-- Add gutters (spacing) between components -->
          <b-col cols="auto" class="group-child">
            <b class="b" style="color: blue;">98</b>
          </b-col>
        </b-row>
      </div>

    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Overview'
}
</script>

<style scoped>
/* Text and component layout */
.overview-section, .budget-section {
  text-align: center;
  margin-bottom: 20px; /* Add space between overview and budget sections */
}

.overview-text {
  color: #787676;
  font-family: "Istok Web";
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px; /* Add some space between the text and the components */
}

.light-blue-container {
  width: 100%;
  height: auto;
  background-color: #F1F6FF;
  padding-top: 20px;
  padding-bottom: 20px;
}

.group-child {
  width: 250px; /* Set a fixed width for consistency */
  height: 103px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
}

.b {
  font-size: 36px;
  color: #ff8833;
  line-height: 1;
}

.to-be-shipped {
  font-size: 14px;
  color: #ff8833;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .group-child {
    width: 100px;
  }

  .b {
    font-size: 24px;
  }

  .to-be-shipped {
    font-size: 12px;
  }
}

@media (max-width: 576px) {
  .group-child {
    width: 50%;
  }
}
</style>
