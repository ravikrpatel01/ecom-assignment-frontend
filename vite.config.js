import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",
  server: {
    open: "/products",
    strictPort: true,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  plugins: [tailwindcss(), react()],
});