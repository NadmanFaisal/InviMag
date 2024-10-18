<template>
    <b-col cols="12" class="profile-overview-container">
            <b-col cols="11" class="silly-rectangle">
            </b-col>

            <div class="profile-picture">
              <img src="../../images/profile-picture.jpeg"
                alt="Profile Picture"
                class="img-fluid rounded-circle"
              />
            </div>
            <div class="business-owner-details">
              <h2 class="profile-name">{{ name }}</h2>
              <p class="profile-title">Business Owner</p>
            </div>
          </b-col>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ProfileOverview',
  data() {
    return {
      userId: 'User Name',
      name: ''
    }
  },
  mounted() {
    this.ws = new WebSocket('ws://localhost:8080')

    this.ws.onopen = () => {
      console.log('WebSocket connection opened in profile overview form')
    }

    this.ws.onmessage = (message) => {
      const data = JSON.parse(message.data)
      if (data.event === 'nameUpdated') {
        this.displayUserName()
      }
    }

    this.ws.onerror = (error) => {
      console.error('WebSocket error:', error)
      alert('There was a problem with the websocket connection in the profileOverviewForm.')
    }

    this.ws.onclose = () => {
      console.log('WebSocket connection closed in profile overview form')
    }

    const businessOwner = JSON.parse(localStorage.getItem('businessOwner'))
    if (businessOwner && businessOwner.id) {
      this.userId = businessOwner.id
      this.displayUserName()
    }
  },
  methods: {
    async displayUserName() {
      try {
        const response = await axios.get(`http://localhost:3000/v1/api/BusinessOwners/${this.userId}`)
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

.silly-rectangle {
  display: flex;
  height: 80px;
  flex-direction: column;
  border-radius: 10px;
  background: #37F;
  position: absolute;
}
</style>
