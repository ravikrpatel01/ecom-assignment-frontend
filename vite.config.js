import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    open: "/products",
    strictPort: true
  },
  plugins: [tailwindcss(), react()],
});
