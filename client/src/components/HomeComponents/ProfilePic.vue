<template>
    <b-col cols="10" class="white-container">
      <div class="profile-block">
        <img class="generic-avatar-icon" src="../../images/profile-picture.jpeg" alt="Avatar">
        <div class="text-container">
          <b class="name">{{ name }}</b>
          <b class="job-title">Business Owner</b>
        </div>
      </div>
    </b-col>
  </template>

<script>
import { Api } from '@/Api'

export default {
  name: 'ProfilePic',
  data() {
    return {
      userId: '',
      name: ''
    }
  },
  mounted() {
    const businessOwner = JSON.parse(localStorage.getItem('businessOwner'))
    this.userId = businessOwner.id

    this.displayUserName()
  },
  methods: {
    // gets name of the user from the businessOwner
    async displayUserName() {
      try {
        const response = await Api.get(`http://localhost:3000/v1/api/BusinessOwners/${this.userId}`)
        this.name = response.data.name
      } catch (error) {
        console.error('Error getting user name:', error)
        alert('Could not get your name. Please try again.')
      }
    }
  }
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
    border-radius: 50%;
    object-fit: cover;
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
