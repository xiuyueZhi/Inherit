class Parent {
  constructor(colors) {
    this.colors = colors;
  }
  getName() {
    return this.name;
  }
  static getColors() {
    return this.colors;
  }
}

class Child extends Parent {
  constructor(colors, name) {
    super(colors);
    this.name = name;
    console.log(this);
  }
}

const colors = ["red", "yellow", "blue"];
const child = new Child(colors, "three primary color");

console.log(child);

export default function Es6Inherit() {
  return <div></div>;
}
