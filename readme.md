
순수 HTML + CSS. => 여러가지 코드가 섞일 때 TailWind 가 좀 더 강력한 것 같음.

```
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
npx tailwindcss -i ./src/input.css -o ./dist/build.css --minify
```

```
https://cdn.jsdelivr.net/gh/ho-a-ki/public-ui-html@main/footer-base/src/output-b.css
```

### 간단한 가이드

1. 특정 부분 개발 plain html + tailwind css => 로컬로 진행한다. 
2. 개발 완료 시 해당 건 빌드 후 push.
3. 그러나 html 변경 시에는 수동으로 바꿔줘야함.
4. JS나 CSS를 자동으로 올리고 해당 건으로 배포하는 경우가 더 편하긴 하겠습니다.


### Tailwind 시작하기 with local

```
1. mkdir
2. npm init -y
3. npm install -D tailwindcss
4. npx tailwindcss init

5. fix tailwind config
6. npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
7. make html file and insert style tag
```

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

