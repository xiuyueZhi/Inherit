class Animal {
  public sayHi() {}
}

class Cat extends Animal {
  public sayHi() {
    console.log("猫咪 sayHi");
  }
}

class Dog extends Animal {
  public sayHi() {
    console.log("狗狗 sayHi");
  }
}

const cat: Animal = new Cat();
const dog: Animal = new Dog();

const sayHi = (animal: Animal): void => {
  console.log(animal.sayHi());
};
sayHi(cat);
sayHi(dog);

export default function TsInherit() {
  return <div></div>;
}
