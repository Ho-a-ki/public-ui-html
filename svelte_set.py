import os

os.system("npm create vite@latest svelte-scafold -- --template svelte")
os.system("cd svelte-scafold && npm install")
os.system("cd svelte-scafold && npm install -D tailwindcss postcss autoprefixer")
os.system("cd svelte-scafold && npx tailwindcss init tailwind.config.cjs -p")

with open('svelte-scafold/tailwind.config.cjs', 'w') as f:
    f.write('''
/** @type {import('tailwindcss').Config} */
module.exports = {
content: ['./src/**/*.{html,js,svelte}'],
theme: {
    extend: {},
},
plugins: [],
}          
''')

with open('svelte-scafold/src/app.css', 'w') as f:
    f.write('''
@tailwind base;
@tailwind components;
@tailwind utilities;
''')
    
with open('svelte-scafold/src/lib/Preview.svelte', 'w') as f:
    f.write('''
<div class="bg-gray-50">
    <div
        class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span class="block">Ready to dive in?</span>
            <span class="block text-indigo-600">Start your free trial today.</span>
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div class="inline-flex rounded-md shadow">
                <a href="#" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700">Get started</a>
            </div>
            <div class="ml-3 inline-flex rounded-md shadow">
                <a href="#" class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50">Learn more</a>
            </div>
        </div>
    </div>
</div>
''')


with open('svelte-scafold/src/App.svelte', 'w') as f:
    f.write('''
<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import Preview from "./lib/Preview.svelte";
</script>

<main>
  <Preview />
</main>

<style>
</style>

''')


with open('svelte-scafold/vite.config.js', 'w') as f:
    f.write('''
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
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