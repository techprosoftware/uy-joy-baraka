import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve("src"),
      "@components": resolve("src", "components"),
      "@pages": resolve("src", "pages"),
      "@images": resolve("public", "assets", "images"),
      "@api": resolve("src", "Api"),
      "@apps": resolve("src", "apps"),
      "@redux": resolve("src", "redux"),
    },
  },
})
