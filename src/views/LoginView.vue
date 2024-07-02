<template>
  <h1>Login</h1>
  <form @submit.prevent="login()">
    <div>
      <label for="email"></label>
      <input v-model="email" id="email" type="email">
    </div>
    <div>
      <label for="password"></label>
      <input v-model="password" id="password" type="password">
    </div>
    <button>Log In</button>
  </form>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';
import router from '@/router';
const email = ref('')
const password = ref('')
const store = useAuthStore()
async function login(){
  await store.login(email.value,password.value)
  .then(() => {
    router.push('/')
  })
  .catch((error) => {
    console.log(error);
  })
}
</script>