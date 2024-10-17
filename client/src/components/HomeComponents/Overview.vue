<template>
  <b-container fluid class="light-blue-container">
    <b-row class="justify-content-center">
      <!-- "TO BE SHIPPED" -->
      <b-col cols="auto" class="group-child me-4">
        <b class="b">98</b>
        <b class="to-be-shipped">TO BE SHIPPED</b>
      </b-col>

      <!-- "DELIVERED" -->
      <b-col cols="auto" class="group-child me-4">
        <b class="b" style="color: green;">98</b>
        <b class="to-be-shipped" style="color: green;">DELIVERED</b>
      </b-col>

      <!-- "RETURNED" -->
      <b-col cols="auto" class="group-child me-4">
        <b class="b" style="color: red;">98</b>
        <b class="to-be-shipped" style="color: red;">RETURNED</b>
      </b-col>

      <!-- Last Column (No Label) -->
      <b-col cols="auto" class="group-child ms-5">
        <b class="b" style="color: blue;">98</b>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Overview'
}
</script>

<style scoped>
.light-blue-container {
  width: 100%;
  height: 270px;
  background-color: #F1F6FF;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: center;
  align-content: center;
}

.group-child {
  width: 18%;
  height: 103px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  transition: width 0.3s ease; /* Smooth transition for size changes */
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

@media (max-width: 1200px) {
  .group-child {
    width: 20%; /* Slightly increase width on smaller screens */
  }
}

@media (max-width: 992px) {
  .group-child {
    width: 20%; /* Further adjust width on medium-sized screens */
  }
}

@media (max-width: 768px) {
  .group-child {
    width: 20%; /* Adjust for smaller tablets */
    margin-bottom: 10px; /* Add space between rows for smaller screens */
  }

  .b {
    font-size: 24px; /* Adjust font size for mobile */
  }

  .to-be-shipped {
    font-size: 12px; /* Adjust label size for mobile */
  }
}

@media (max-width: 576px) {
  .group-child {
    width: 30%; /* Increase width for mobile screens */
  }
}
</style>
