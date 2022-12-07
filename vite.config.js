import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir)
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: pathResolve('src'),
      },
    ],
  },
})
