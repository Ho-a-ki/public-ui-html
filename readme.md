
순수 HTML + CSS. => 여러가지 코드가 섞일 때 TailWind 가 좀 더 강력한 것 같음.

* 아래의 링크 참고. plain html + tailwind CSS
https://daily-dev-tips.com/posts/plain-html-starter-with-tailwind-css/

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

