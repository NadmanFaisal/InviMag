<template>
  <div class="split-screen">
    <div class="left-section">
      <img :src="image" alt="Description of the image" class="left-texture-image" />
      <img :src="image" alt="Description of the image" class="right-texture-image" />

      <div class="company-info">
        <div class="company-name">Company Name</div>
        <div class="company-motto">ADSDAS DCCS DFSDF VDFS
          DFSDFDS SDFSFDSFSD SD SFDGDSF S DF SDF SDFD</div>
        <div class="company-description">ADSDAS DCCS DFSDF VDFS SDFDS SDFSFD S DF SDF SDFD ADSDAS DCCS DFSDF VDFS DFSDFDS SDFSFDSFSD SD SFDGDSF S DF SDF SDFD ADSDAS DCCS DFSDF VDFS DFSDFDS SDFSFDSFSD SD SFDGDSF S DF SDF SDFD</div>
      </div>

    </div>

    <div class="right-section">
      <b-container fluid class="login-container">
        <h2>Login</h2>
        <form @submit.prevent="loginUser">

          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              v-model="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              v-model="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div class="form-group">
            <input type="checkbox" id="rememberMe" v-model="rememberMe" class="checkbox" />
            <label for="rememberMe" class="remember-label">Remember me</label>
          </div>

          <button type="submit">Log In</button>
        </form>
        <div v-if="error" class="error-message">
          {{ error }}
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import textureImage from '/src/texturePacks/login_texture.png'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
      image: textureImage
    }
  },
  methods: {
    async loginUser() {
      this.error = null
      try {
        const userData = {
          email: this.email,
          password: this.password
        }
        const response = await axios.post('http://localhost:3000/v1/api/login', userData)
        console.log('Logged in business owner', response.data)
        const businessOwnerName = response.data.name
        alert(`Login successful! Welcome back ${businessOwnerName}!`)
      } catch (err) {
        console.error(err)
        this.error = err.response?.data?.message || 'An error occurred during login'
      }
    }
  }
}
</script>

<style scoped>
.split-screen {
  display: flex;
  height: 100vh;
}

.left-section {
  flex: 3;
  background-color: #FFFFFF;
  display: flex;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
}

.right-section {
  flex: 2;
  background-color: #3377FF;
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  display: flex;
  justify-content: center;
  align-items: center;

  color: #000;
  text-align: center;
  font-family: "Istok Web", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.login-container {
  max-width: 400px;
  height: 500px;
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 50px;
  background: #FFF;
  box-shadow: -15px 15px 4px 0px rgba(0, 0, 0, 0.25);
}

label[for="email"], label[for="password"] {
  display: flex;
  width: 163px;
  height: 42px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  color: #000;
  text-align: left;
  font-family: "Istok Web", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 10px;
}

.form-group {
  margin-bottom: 25px;
}

input {
  width: 100%;
  height: 60px;
  padding: 15px;
  border-radius: 50px;
  background: rgba(204, 204, 204, 0.50);
  border: none;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  outline: none;
}

.checkbox {
  width: 14px;
  height: 13px;
  flex-shrink: 0;
  margin-right: 5px;
  margin-left: -200px;
}

label[for="rememberMe"] {
  color: #939393;
  text-align: center;
  font-family: "Istok Web";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

button {
  width: 278px;
  height: 59px;
  flex-shrink: 0;
  border: none;
  border-radius: 50px;
  background: #37F;
  text-align: center;
  font-family: "Istok Web";
  color: #FFF;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

button:hover {
  background-color: rgb(0, 85, 255);
}

.left-texture-image {
  width: 458px;
  height: 456px;
  flex-shrink: 0;
  margin: 85px;
  opacity: 0.4;
}

.right-texture-image {
  width: 458px;
  height: 456px;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: rotate(180deg);
  margin: 85px;
  opacity: 0.4;
}

.company-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Adjusts the position to center of left section */
}

.company-name {
  color: #787676;
  font-family: "Istok Web";
  font-size: 96px;
  font-weight: 700;
}

.company-motto {
  display: flex;
  width: 586px;
  height: 152px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #37F;
  font-family: "Istok Web";
  font-size: 40px;
  font-weight: 700;
}

.company-description {
  display: flex;
  width: 633px;
  height: 191px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #606060;
  font-family: "Istok Web";
  font-size: 20px;
  font-weight: 400;
}

.error-message {
  margin-top: 10px;
  color: red;
}
</style>
