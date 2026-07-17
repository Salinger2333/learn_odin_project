type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
    
 
type Mapish = { [k: string]: boolean };
// type M = string | number
// 因为JavaScript 对象键总是被强制转换为字符串，因此 obj[0] 始终等同于 obj["0"]
type M = keyof Mapish;