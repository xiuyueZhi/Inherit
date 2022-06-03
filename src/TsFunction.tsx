const add = (a: number, b: number): number => {
  return a + b;
};
const addWithoutOutType = (a: number, b: number) => {
  return a + b;
};
console.log("add(1,2)：", add(1, 2));
console.log("addWithoutOutType(1,2)：", addWithoutOutType(1, 2));

const add3 = (a: number, b: number, c?: number): number => {
  return c ? a + b + c : a + b;
};
console.log("add3(1, 2, 3)：", add3(1, 2, 3));
console.log("add3(1, 2)：", add3(1, 2));

const addDefault = (a: number, b: number = 10): number => {
  return a + b;
};
console.log("addDefault(1, 2)：", addDefault(1, 2));
console.log("addDefault(1)：", addDefault(1));

const addOverload = (a: number): number => {
  return a;
};
const addOverloadByType = (a: string): string => {
  return a;
};
const addOverloadByNum = (a: number, b: number): number => {
  return a + b;
};
console.log("函数 addOverload : ", addOverload(1));
console.log(
  "函数重载，参数类型不同 addOverloadByType : ",
  addOverloadByType("overload string")
);
console.log(
  "函数重载，参数个数不同 addOverloadByNum : ",
  addOverloadByNum(1, 2)
);

export default function TsFunction() {
  return <div></div>;
}
