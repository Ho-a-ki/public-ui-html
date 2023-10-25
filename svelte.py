import os

os.system("npm create vite@latest svelte-scafold -- --template svelte")
os.system("cd svelte-scafold && npm install")

with open('svelte-scafold/vite.config.js', 'w') as f:
    f.write('''
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})
''')