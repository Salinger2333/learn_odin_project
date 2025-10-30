# string 
## methods
https://www.w3schools.com/js/js_string_methods.asp#mark_substring
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


trim() 方法用于移除字符串两端的空白字符
trimStart() 方法的作用与 trim() 类似，但它只移除字符串开头的空白字符。
trimEnd() 方法的作用与 trim() 类似，但它只移除字符串末尾的空白字符。



JavaScript String repeat()
repeat() 方法会返回一个包含指定次数的字符串副本的新字符串。
repeat() 方法会返回一个新的字符串。
repeat() 方法不会修改原始字符串。


### 替换字符串内容

replace() 方法用于在一个字符串中将指定的某个值替换为另一个值：
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

replace() 方法不会改变调用它的字符串。

replace() 方法会返回一个新的字符串。

replace() 方法只替换第一个匹配项

如果你想替换所有匹配项，请使用带有全局标志（/g）的正则表达式。请参阅下面的示例。
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");

replaceAll() 方法允许您使用正则表达式而不是字符串来进行替换。

如果参数是正则表达式，则必须设置全局标志（g），否则会抛出 `TypeError` 错误。

### 字符串转数组
字符串可以使用 split() 方法转换为数组：
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe

如果省略分隔符，返回的数组将在索引 [0] 处包含整个字符串。

如果分隔符设置为空字符串（""），返回的数组将是包含单个字符的数组：


## 比较
https://javascript.info/comparison

null，undefined 在> < >= <=时会转换成0和Nan
但null在== 和 ===不会

在unicode中，
数字 < 大写字母（A-Z） < 小写字母（a-z
比较两个字符串的算法很简单：

1. 比较两个字符串的第一个字符。
2. 如果第一个字符串的第一个字符大于（或小于）第二个字符串的第一个字符，那么第一个字符串就大于（或小于）第二个字符串。到此为止。
3. 否则，如果两个字符串的第一个字符相同，则以相同的方式比较第二个字符。
4. 重复执行，直到其中一个字符串结束为止。
5. 如果两个字符串的长度相同，则它们相等。否则，长度较长的字符串更大。）

# conditions
https://javascript.info/logical-operators
## ||
 let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder 


true || alert("not printed");
false || alert("printed");
