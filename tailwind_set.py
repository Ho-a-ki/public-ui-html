
import os

os.system("npx tailwindcss init")
os.mkdir('src')

with open('tailwind.config.js', 'w') as f:
    f.write('''
    module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [],
    }            
''')

with open('src/input.css', 'w') as f:
    f.write('''
@tailwind base;
@tailwind components; 
@tailwind utilities;
''')

with open('src/index.html', 'w') as f:
    f.write('''<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="output.css" rel="stylesheet">
  <script src="//unpkg.com/alpinejs" defer></script>
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>''')

os.system('start cmd /k npx live-server ./src')
os.system("npx tailwindcss -i ./src/input.css -o ./src/output.css --watch")