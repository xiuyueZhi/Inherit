class Cat {
  name: string;
  age: number;
  sex: number;
  eat(food: string) {
    console.log("eat：", food);
  }
  breath() {
    console.log("breath");
  }
  sleep(hour: number) {
    console.log("sleep：", hour);
  }
}

class Dog {
  name: string;
  age: number;
  sex: number;
  eat(food: string) {
    console.log("eat：", food);
  }
  breath() {
    console.log("breath");
  }
  sleep(hour: number) {
    console.log("sleep：", hour);
  }
}

class Animal {
  name: string;
  age: number;
  sex: number;
  eat(food: string) {
    console.log("eat：", food);
  }
  breath() {
    console.log("breath");
  }
  sleep(hour: number) {
    console.log("sleep：", hour);
  }
}

const cat = new Animal();
const dog = new Animal();

// 封装
class Phone {
  private type: string;
  constructor(type?: string) {
    this.type = type;
  }
  charge(usb: string) {
    console.log("开始充电，充电 usb ：", usb);
    this.line();
    this.operation();
  }
  private operation() {
    console.log("充电操作");
  }
  private line() {
    console.log("充电线线路");
  }
}

const phone = new Phone();
phone.charge("type-c");
// phone.line();
// phone.operation();

export default function TsObject() {
  return <div></div>;
}
