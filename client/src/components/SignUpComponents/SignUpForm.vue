<template>
    <div>
      <b-container fluid>
        <b-row class="justify-content-center">
          <b-col xs="12" md="10" class="mb-3">
            <!-- User name input -->
            <label class="signup-label" for="username">Username</label>
            <b-form-input
              id="username"
              v-model="localUsername"
              placeholder="Enter your username"
              class="signup-input"
            ></b-form-input>
          </b-col>
          <!-- Email input -->
          <b-col xs="12" md="10" class="mb-3">
            <label class="signup-label" for="email">Email</label>
            <b-form-input
              type="email"
              id="email"
              v-model="localEmail"
              placeholder="Enter your email"
              class="signup-input"
            ></b-form-input>
          </b-col>
          <!-- Password input -->
          <b-col xs="12" md="10" class="mb-3">
            <label class="signup-label" for="password">Password</label>
            <b-form-input
              type="password"
              id="password"
              v-model="localPassword"
              placeholder="Enter your password"
              class="signup-input"
            ></b-form-input>
          </b-col>
        </b-row>

        <b-row class="justify-content-center">
          <b-col xs="12" md="10">
            <b-button class="signup-component-box w-100" @click="handleSubmit">
              <span class="signup-component-text">Sign Up</span>
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </template>

<script>
export default {
  props: {
    username: String,
    email: String,
    password: String
  },
  data() {
    return {
      localUsername: this.username,
      localEmail: this.email,
      localPassword: this.password
    }
  },
  methods: {
    // emit values to parent class, which is the SignUpPage.vue
    handleSubmit() {
      this.$emit('submit', {
        username: this.localUsername,
        email: this.localEmail,
        password: this.localPassword
      })
    }
  }
}
</script>

  <style scoped>
  .signup-input {
    border-radius: 20px;
    background: rgba(204, 204, 204, 0.50);
    box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.25);
    padding: 8px 12px;
    font-size: 16px;
  }

  .signup-label {
    font-family: 'Istok Web', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #000;
  }

  .signup-component-box {
    border-radius: 30px;
    background: #37f;
    padding: 10px 20px;
    font-size: 18px;
    width: 100%;
  }

  .signup-component-text {
    color: #fff;
    font-family: 'Istok Web', sans-serif;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    .signup-input {
      font-size: 14px;
      padding: 6px 10px;
    }

    .signup-component-box {
      font-size: 16px;
    }
  }

  @media (max-width: 576px) {
    .signup-label {
      font-size: 18px;
    }

    .signup-component-box {
      font-size: 14px;
    }
  }
  </style>
