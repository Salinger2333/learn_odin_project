# string 
## methods
### 提取字符串字符
The at(position) Method
The charAt(position) Method   
The charCodeAt(position) Method   
Using property access [] like in arrays


`at()` 方法是 JavaScript 中新增的一个方法。
它允许使用负索引，而后者（指 `charAt() `）则不允许。

如果找不到指定的字符，方括号（[]）会返回 `undefined`，而 `charAt()` 方法会返回一个空字符串。

### 提取字符串片段
There are 3 methods for extracting a part of a string:


slice(start, end)
substring(start, end)
substr(start, length)

slice() 提取字符串的一部分，并以新字符串的形式返回所提取的部分。


该方法接受两个参数：起始位置和结束位置（不包含结束位置）。

如果省略第二个参数，该方法将截取字符串的剩余部分：
`
let text = "Apple, Banana, Kiwi";
let part = text.slice(7);`

如果参数为负数，则位置将从字符串的末尾开始计算

`substring() 与 slice() `相似。

区别在于，在 substring() 中，小于 0 的起始值（start）和结束值（end）都将被视为 0。

substr() 方法在最新的 JavaScript 标准中已被移除

### 大小写转换
使用 toUpperCase() 将字符串转换为大写

通过 toLowerCase() 被转换为小写