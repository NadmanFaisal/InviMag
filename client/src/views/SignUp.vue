<template>
    <div class="white-background">
      <b-container fluid class="vh-100 d-flex align-items-center justify-content-center">
        <b-row class="justify-content-center align-items-center w-100">
          <b-col md="8" class="signup-blue-container d-flex justify-content-center align-items-center">
            <div class="white-container-signup p-4">
              <h1 class="signup-title mb-4">Sign Up</h1>

              <SignUpForm
                :username="username"
                :email="email"
                :password="password"
                @submit="submitSignUp"
              />

              <p
                v-if="message"
                :class="{
                  'text-success': message === 'Sign Up Successful!',
                  'text-danger': message !== 'Sign Up Successful!'
                }"
                class="mt-3"
              >
                {{ message }}
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </template>

<script>
import SignUpForm from '@/components/SignUpForm.vue'
import axios from 'axios'

export default {
  name: 'SignUp',
  components: {
    SignUpForm
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      message: ''
    }
  },
  methods: {
    async submitSignUp({ username, email, password }) {
      try {
        await axios.post('http://localhost:3000/v1/api/BusinessOwners/signup', {
          name: username,
          email,
          password
        })
        this.message = 'Sign Up Successful!'
      } catch (error) {
        this.message = 'Sign Up Failed: ' + (error.response?.data?.error || error.message)
      }
    }
  }
}
</script>

  <style scoped>
  .white-background {
    background: #FFF;
    min-height: 100vh;
  }

  .signup-blue-container {
    background: #37F;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    width: 100%;
    max-width: 800px;

    border-radius: 0;
  }

  .white-container-signup {
    width: 100%;
    max-width: 404px;
    border-radius: 50px;
    background: #FFF;
    box-shadow: -15px 15px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 40px 60px;
  }

  .signup-title {
    font-family: 'Istok Web', sans-serif;
    font-size: 36px;
    font-weight: 700;
    color: #000;
    text-align: center;
  }

  @media (max-width: 768px) {
    .signup-blue-container {
      max-width: 100%;
      padding: 30px;
    }

    .white-container-signup {
      padding: 30px 40px;
    }

    .signup-title {
      font-size: 28px;
    }
  }

  @media (max-width: 576px) {
    .signup-title {
      font-size: 24px;
    }

    .white-container-signup {
      padding: 20px 30px;
    }
  }
  </style>
