### 구조설정 먼저 라우팅 설정을 잡아본다.

```
<App>

/ 👉 <Home>

/products 👉 <AllProducts>

/products/new 👉 <NewProduct>

/products/:id 👉 <ProductDetail>

/carts 👉 <MyCart>
```

### react-route-dom, react-icons

```
yarn add react-router-dom react-icons

```

### 라우팅을만들어주고

### NAVBAR COMPONENTS를 만들어 준다.

### OUTLET이라는 개념 : 중첩된 라우팅 구조를 구성할 수 있도록 해주는 컴포넌트입니다. Outlet 컴포넌트는 라우팅 컴포넌트 내부에서 사용되며, 중첩된 자식 라우트가 렌더링되는 위치를 지정합니다

https://hyebeen2658.tistory.com/19

### tailwind 설치

```
yarn add -D tailwindcss

npx tailwindcss init

tailwind.config.js

content 업데이트
content: [
    './src/**/*.{js,jsx}',
  ],


index.css에 추가
@tailwind base;
@tailwind components;
@tailwind utilities;

이후 다시 yarn start

```

### @apply란 ?

Tailwind CSS에서 @apply 지시어는 Tailwind의 유틸리티 클래스를 컴포넌트나 요소의 CSS에 적용할 수 있게 해줍니다. 이는 여러 유틸리티 클래스를 한 곳에 모아 커스텀 CSS 클래스를 만들 때 유용하며, 이를 통해 HTML 마크업을 깔끔하게 유지하고 재사용 가능한 스타일을 만들 수 있습니다.

### tailwind.config.js theme extent 에서 설정가능 brand색상

### firebase 설치 yarn add firebase

### 각종 키는 .env파일을 만들어서 저장해준다.

### yarn add uuid (유니크한 아이디를 만들어준다.)



### yarn add @tanstack/react-query   



### eslint  and prettier 

```
https://wookgu.tistory.com/31 airbnb

https://blog.uniqbuild.co.kr/?p=559 for Strings must use singlequote

.eslintrc.js에 
"quotes": [2, "double", { "avoidEscape": false }], 추가함 
 
```



### 추가적으로 해야할것 
``` 
HOC 개념 이해하기 
infiniti Scroll
noti 
TYPESCRIPT
```


### 도움되는 사이트 
```
https://github.com/brillout/awesome-react-components
```

### first deploy using github action


### .env 파일이 없어서 ec2에 직접 만들어 넣을지 아니면 workflow에 올릴지 고민함 
직접 ec2에 저장하는것으로함 

계속안되는중임 

11번째 
