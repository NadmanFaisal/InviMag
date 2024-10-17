<template>
    <b-col cols="10" class="white-container">
      <div class="profile-block">
        <img class="generic-avatar-icon" src="../../images/generic-avatar.png" alt="Avatar">
        <div class="text-container">
          <b class="name">Name</b>
          <b class="job-title">Job title</b>
        </div>
      </div>
    </b-col>
  </template>

<script>
export default {
  name: 'Overview'
}
</script>

  <style scoped>

  .white-container {
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;
  }

  .profile-block {
    display: flex;
    align-items: center;
  }

  .generic-avatar-icon {
    width: 40px;
    height: 40px;
    margin-right: 5px;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .name {
    font-size: 16px;
    line-height: 120%;
    font-family: 'Istok Web', sans-serif;
    color: #787676;
  }

  .job-title {
    font-size: 14px;
    line-height: 120%;
    font-weight: normal;
    font-family: 'Istok Web', sans-serif;
    color: #787676;
  }

  </style>
