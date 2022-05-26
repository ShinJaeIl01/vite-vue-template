import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '~', replacement: `${__dirname}/src`} // find 경로 별칭, replacement 설정할 경로
    ]
  }
})
