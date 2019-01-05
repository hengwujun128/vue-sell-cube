# vue-sell-cube

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

> 1.package.json

```
// 从源码中引入组件,而不是从打包之后的代码中引入,可视为 app 的一部分s
"transformModules": {
    "cube-ui": {
      "transform": "cube-ui/src/modules/${member}",
      "kebabCase": true
    }
  }

```

> 2.引入 stylus 文件不能省略后缀名

```
<!-- this is error -->
@import '~common/stylus/mixin';

@import '~common/stylus/mixin.stylus';

```
