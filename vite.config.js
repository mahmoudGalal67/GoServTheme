import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/public/api": {
        target: "http://goservback.sallaplus.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/public\/api/, "/public/api"),
      },
    },
  },
});
