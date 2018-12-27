# jsonview-vue

可折叠的方式查看json数据

## use

1、 安装

```
npm install jsonview-vue -S
```

2、 引入

```
import JsonView from 'jsonview-vue';
import Vue from 'vue';

Vue.use(JsonView);
```

```
// 在组件中引入
import { jsonView } from 'jsonview-vue';

// ...
// components: {
//    jsonView
// }
// ...
```
script标签引入js
```
// 1、Vue.use
Vue.use(JsonView);


// 2、组件中注册
// ...
// components: {
//    jsonView: JsonView.jsonView
// }
// ...
```

3、使用

3.1) props

json: 必需，需要查看的json对象，object和array都可

```
<json-view :json="{a: 123}"></json-view>
```

closed: 非必需，默认为true，为折叠状态。是否为折叠状态
注： 内容的折叠状态，是用v-if来实现的，所以当closed为true的时候是可以展示有环的对象。如果为false，对象有环会报错，请根据实际情况设置该值

```
<json-view :json="{a: 123}" :closed="false"></json-view>
```





