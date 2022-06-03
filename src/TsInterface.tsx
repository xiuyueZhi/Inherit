interface Animal {
  name: string;
  age: number;
}

const cat: Animal = {
  name: "Oscar",
  age: 1
};
console.log("oscar：", cat);

class Cat {
  name: string;
  age: number;
  gender: number;
  color: string;
  constructor(name: string, age: number, gender: number, color: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.color = color;
  }
  breathe = () => {
    console.log("Cats breathe oxygen");
  };
  eat = (food: string) => {
    console.log(`${this.name} likes to eat ${food}`);
  };
}

const cat1 = new Cat("Tom", 1, 1, "blue");
const cat2 = new Cat("Luna", 0.5, 2, "white");
cat1.breathe();
cat2.breathe();
cat1.eat("fish");
cat2.eat("fish");

export default function TsInterface() {
  return <div></div>;
}
