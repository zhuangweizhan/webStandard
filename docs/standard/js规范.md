# JS规范

## 基本准则

* 方法长度，不超过100行
* 禁止使用var，强制使用const与let
* 使用字符串模板(注意小程序兼容性)(下方提供案例)
* 尽量使用字面形变量(下方提供案例)
* 数组尽量使用操作函数。(如push等)(下方提供案例)
* 对象与数组，推荐使用解构(下方提供案例)
* 能用箭头函数，不使用普通函数


* 推荐简写
```
/** 不建议 **/
const str = "My name is " + name;

const array = new Array();
const obj = new Object();
array[0] = '你好';

const first = arr[0];
const second = arr[1];

const atom = {
  value: 1,
  addValue: function (value) {
    return value;
  },
};

/** 建议 **/
const str = `My name is ${name}`;

const array = [];
const obj = {};
array.push('你好');

const { first, second }  = arr;

const atom = {
  obj: 1,
  addValue(value) {
    return value;
  },
};
```

## 函数准则

* 尽量只做一件事
* 尽量短小，最高不超过100行
* 推荐纯函数，尽量不写非纯函数(下方有说明)
* 推荐采用"函数式编程"的思维(下方有说明)
* 推荐使用"高阶函数"(下方有说明)
* 推荐函数柯里化(下方有说明)
* 了解递归函数

---

**纯函数的定义**: 当一个函数的输出不受外部环境影响，同时也不影响外部环境时，该函数就是纯函数，也就是它只关注逻辑运算和数学运算，同一个输入总得到同一个输出。

纯函数如:Array.prototype.map,  非纯函数如: Array.ptototype.splice

---

**函数式编程的理解：** 

1.避免多次赋值变量

2.拒绝使用eval

3.不修改内核对象

4.优先使用函数而不是方法（了解一下javascript中函数和方法的区别: https://blog.csdn.net/qq_44163269/article/details/104627274）

---


**高阶函数的概念：** 以一个函数作为参数，以一个函数作为结果。如常用的reduce。


## 循环方法

对比优势for, forEach, map, filter, reduce, find, some等

* *遍历当前对象: forEach
* *计算总算：reduce
* *过滤数据：filter
* *获取新对象：map
* 查找新对象：find
* 每一项返回true,则返回true： every
* 任一项返回true，则返回true：some


## 判断方法

* 双重否定!!

* || 与 && 

表达式a && 表达式b :  计算表达式a（也可以是函数）的运算结果，
                      如果为 True, 执行表达式b（或函数），并返回b的结果；
                      如果为 False，返回a的结果；

表达式a || 表达式b :  计算表达式a（也可以是函数）的运算结果，
                      如果为 Fasle, 执行表达式b（或函数），并返回b的结果；
                      如果为 True，返回a的结果；
```
if (this.uploadData.length < this.num){
    this.showUploadBtn = true;
}

优化后：
    this.uploadData.length < this.num && ( this.showUploadBtn = true)
```


* 三元表达式

能用三元表达式解决的问题，尽量不使用if。

```   
    if(name === '小明'){
        this.show = true
    }else{
        this.show = false
    }

    优化后：
    this.show = name === '小明' ? true : false;
```

* ES10

* 多层判断以上，使用switch或对象获取。

## 异步方案

异步解决方案统一使用async, await。无需捕捉异常的情况下，尽快少使用promise, then。

```
 const res = await test1().catch((err)=>{
        console.log(new Error)
 }) 
```
