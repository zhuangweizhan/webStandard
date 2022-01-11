# css规范


## 基本语法

* 节点统一2行缩进
* 分号结尾
* 样式之间用空行隔开
* 换行
```
/* 错误示范 */
.element
{color: red};

/* 建议 */
.element {
  color: red;
}
```

* 尽量不使用多规则
```
/* 错误示范 */
.element, .dialog {
    ...
}

/* 建议 */
.element {
  ...
}
.dialog {
  ...
}
```
* 统一双引号
* 颜色统一16进制，如:#001122


##  统一使用scss

严谨使用less，当前less只为覆盖antd

## 组件级class

* bem规范

```
 b: block 块级
 e: element 元素
 m: modifier 修饰器名
 block-name__element-name-modifier-name，也就是模块名 + 元素名 + 修饰器名。
```

了解：
utils.bem

样式: mixin function
## 原子类定义

* 简写说明: 以英文首字母为准

规则如下：
* 1）缩写统一用首字母 + "_" + 属性值, 
* 2）属性值，数字默认单位px，如数字100表示100px，
  %使用percentage缩写, 如100p表示100%。
  其他英文名称直接使用，如left
* 3）由于max跟min缩写都为m，故采用全名，如maxh表示max-height

缩写规则如下：
```
b: border, 此外,bl,br,bt,bb
bg: background
c: color
d: display
m: margin 此外,ml,mr,mt,mb, m-10-20表示margin: 10px 20px;
p: padding 此外,pl,pr,pt,pb
po: position 
f: float
fs: font-size, 会默认设置line-height与font-weight
fw: font-weight, 如fw-500
ff: font-family, 如ff-bold
h: height
minh: min-height
maxh: max-height
w: width
minw: min-width
maxw: max-width
lh: line-height
t: text, 如：text-ellipsis{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
ta-l: text-align
```

## 公用class
* html使用原子类简写，如：\<span class="fs-16">你好\</span>

* css使用使用原子类混入，不使用继承
```
/* 错误示范 */
.empty{ 
  @extend .fs-16;
};

/* 建议 */
.empty{ 
  @include fs(16)
};

```
## class层级叠加

方案建议：
* 1)&-继承(推荐)
* 2)同级处理
* 3)首字母缩写

不建议: 混合使用

推荐1)：
```
.item {
  &-name {
    ...
  }
  &-age {
    ...
  }
 }
```

方案2：
```
.item-name {
  ...
}
.item-age {
  ...
}
```

方案3：
```
.item {
  .i-name {
    ...
  }
  .i-age {
    ...
  }
}
```
