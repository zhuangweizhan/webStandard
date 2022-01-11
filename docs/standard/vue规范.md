# VUE细节

## 基本准则

* vue公用方法都在mixins, 重叠功能不再命名
* 禁止name命名与跟根元素名称重叠
* data返回数据必须为对象
* 标签的key, 使用id等可标记属性，不使用index
* 一个文件只允许声明一个组件
* 单文件声明顺序：template > script > style
* 避免隐性的父子组件通信: 应该优先通过 prop 和事件进行父子组件之间的通信，而不是 this.$parent 或变更 prop。


## 细节说明

* 禁止v-if与v-for同标签使用
* 计算出结果再进行赋值
* 页面没有使用的元素，可不放置data


## 生命周期

* 声明 > 引入 > 数据/监听 > 生命周期 > 方法

即：name > mixin > components > data > watch > computed > created > mounted > activated > methods

## 缓存方案 

* 用户相关使用cookies
* 项目内部使用vuex
* vuex使用module, 与业务为基线，切割业务
* vuex使用长久方案, 配合createMyVuexPlugin使用  
