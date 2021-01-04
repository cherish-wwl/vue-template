# vue-templet

## Project setup
```
yarn install
or
npm install
```

### Compiles and hot-reloads for development
```
yarn serve
or
npm run serve
or
npm start
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

###  目录结构
  生成目录结构：
    mddir '目录'
    将结果 复制到 md 文件中
```
|-- VUE-TEMPLET,
      |-- .DS_Store,
      |-- .env,    // 默认环境配置
      |-- .env.development,  // 生产环境配置
      |-- .env.production,  // 开发环境配置
      |-- .gitignore,   // git 配置文件
      |-- README.md,  
      |-- babel.config.js,  // babel 配置文件
      |-- package-lock.json,
      |-- package.json,
      |-- yarn.lock,
      |-- public,  // 模版
      |   |-- favicon.ico,
      |   |-- index.html,
      |-- src,  // 主代码区域
          |-- App.vue,  // 
          |-- main.js,  // 入口文件
          |-- assets,  // 图片等附件 目录
          |   |-- logo.png,
          |-- components, // 公用组件
          |   |-- HelloWorld.vue,
          |-- layouts, // 布局模版 目录
          |-- utils, // 工具类 目录
          |   |-- http.js,
          |-- views, // 页面
              |-- home,  
              |   |-- index.vue,  // 页面入口
              |   |-- components,  // 页面所引用的组件
              |   |-- store,  // 当前页面所 使用的 状态管理工具
              |       |-- index.js, 
              |-- login,
                  |-- index.vue,
                  |-- components,
```
