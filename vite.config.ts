import solid from "solid-start/vite"
import UnoCSS from "unocss/vite"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [solid({ ssr: true }), UnoCSS()],
  server: {
    port: 3000
  }
})
