import { useAuthStore } from '@/stores/auth';

export const requireAuth = (to, from, next) => {
	const authStore = useAuthStore();

  if (authStore.isAuthenticated) {
    next()
  } else {
    next('/login');
  }
};