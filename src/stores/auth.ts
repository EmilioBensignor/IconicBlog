import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { signInWithEmailAndPassword, type User } from 'firebase/auth'
import { auth } from '@/firebase/init.js'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const user:Ref<null|User> = ref(null)
  async function login(email: string, password: string) {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response) {
        isAuthenticated.value = true;
        user.value = response.user
      }
    } catch (error) {
      console.log(error);
    }
  }

  return { isAuthenticated, user, login }
})
