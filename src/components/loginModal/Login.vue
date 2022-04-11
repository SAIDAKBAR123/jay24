<template>
    <div ref="wrapper" @click="toggleLogin" class="wrapper">
      <v-card class="pa-8 rounded-xl" width="500">
        <v-card-title class="text-h5 justify-center white">
          Log in
        </v-card-title>
        <v-card-text>
          <div class="text-center">Log in below or create a new Wolt account.</div>
        </v-card-text>
        <div class="justify-center">
          <form class="py-6">
            <v-text-field
            v-model="form.login"
            outlined
            label="Login"
            prepend-inner-icon="mdi-account-circle-outline"
          ></v-text-field>
            <v-text-field
            v-model="form.password"
            type="password"
            outlined
            label="Password"
            prepend-inner-icon="mdi-shield-lock-outline"
          ></v-text-field>
            <v-btn class="primary pa-4" large style="width: 100%" @click="submit">
            submit
          </v-btn>
        </form>
        </div>
        <v-card-text class="pb-0">
          <p class="text-center">This site is protected by hCaptcha. The hCaptcha Privacy Policy and Terms of Service apply.</p>
        </v-card-text>
      </v-card>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      form: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['Login']),
    submit () {
      const data = this.form
      this.Login(data)
        .then((res) => {
          console.log(res)
        })
        .finally(() => {
          window.location.href = '/'
          this.$emit('toggle-login-modal')
        })
    },
    toggleLogin (e) {
      if (this.$refs.wrapper === e.target) {
        this.$emit('toggle-login-modal')
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
}
</style>
