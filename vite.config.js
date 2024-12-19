import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['axios'], // Exclude axios from the build
    },
  },
});
<<<<<<< HEAD
=======

>>>>>>> 463e9048cebb9756d7fa307e4be5995e4408ce4b
