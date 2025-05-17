import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/my-project/", // Must match your repo name exactly
  plugins: [react()],
});
