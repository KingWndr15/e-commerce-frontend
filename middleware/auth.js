// middleware/auth.js
import { useAuthStore } from '@/stores/auth';

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  

  console.log('Navigating to:', to.name);
  console.log('Is Authenticated:', authStore.isAuthenticated);
  
  // Check if the user is authenticated
  if (authStore.isAuthenticated) {
    // If the user is authenticated and tries to access the login page (index), redirect to dashboard
    if (to.name === 'index') {
      console.log('User is authenticated, redirecting to dashboard');
      console.log(authStore.user);
      return navigateTo({ name: 'dashboard' });
    }
  } else {
    console.log('User is not authenticated');
    // Optionally, you can add a check to prevent access to the dashboard if not authenticated
    if (to.name === 'dashboard') {
      console.log('User is not authenticated, redirecting to login');
      return navigateTo({ name: 'index' });
    }
  }
});
