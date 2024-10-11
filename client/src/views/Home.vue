 <template>
  <div>
    <b-container fluid>
      <h1 class="display-5 fw-bold">DIT342 Frontend</h1>
      <p class="fs-4">Welcome to your DIT342 Frontend Vue.js App</p>
      <b-button class="btn_message" variant="primary" v-on:click="getMessage()" >Get Message from Server</b-button>
      <p class="col-xl-9">Message from the server:<br/>
      {{ message }}</p>
      <b-button @click="logOut()">Logout</b-button>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
export default {
  name: 'home',
  data() {
    return {
      message: 'none'
    }
  },
  methods: {
    getMessage() {
      Api.get('/')
        .then(response => {
          this.message = response.data.message
        })
        .catch(error => {
          this.message = error
        })
    },
    async logOut() {
      try {
        await Api.post('http://localhost:3000/v1/api/BusinessOwners/logout')
        localStorage.removeItem('businessOwner')
        this.$router.push('/login')
      } catch (error) {
        console.error('Error during logout:', error)
      }
    }
  }
}
</script>

<style>
.btn_message {
  margin-bottom: 1em;
}
</style>
