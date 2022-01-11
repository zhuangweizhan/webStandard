# html规范

## 基本语法

* 节点统一2行缩进
* 不可忽略可选的关闭标签：如: \<input type="text">
* 静态boolean属性, 使用简写: 如: \<option  selected></option>
* 所有属性，标签，使用全小写，用中划线做分隔符，如: x-img, class
* 其他参考"文本规范"

## 属性顺序

属性按照重要重要级别往下排列(如下属性从前往后);

* id, ref, type
* click, change
* src, href
* class
* placeholder
* max-length, max, min,
* required, readonly, disabled

## 语义化

尽量使用语义化，大模块头部尽量有模块说明, 或是语义标签。如

```
<!-- 消息模块 -->
<div>
    <div>...</div>
</div>

<div>
    <header></header>
    <content></content>
</div>
```