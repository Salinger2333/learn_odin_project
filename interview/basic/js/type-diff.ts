type Bird = {
  wings: number;
};

// &
type Owl = Bird & {
  nocturnal: boolean;
};

interface Bird2 {
  wings: number;
}

// extends
interface Owl2 extends Bird2 {
  nocturnal: boolean;
}

// 重新声明 直接扩展
interface Bird2 {
  eatMeat: boolean;
}

let bird2: Bird2 = {
  wings: 2,
  eatMeat: false,
};

// 重复 报错
type Bird = {
  eatMeat: boolean;
};
