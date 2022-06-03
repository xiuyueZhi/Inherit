
function Parent() {
	this.colors = ['red', 'yellow', 'blue']
}
Parent.prototype.getColors = function() {
  return this.colors
}
function Child() {
  this.name='three primary color'
}
Child.prototype = new Parent()

const parent = new Parent()
const child = new Child()
console.log(parent)
console.log(child)
console.log(child.getColors())
const child2 = new Child()
console.log(child2)
console.log(child2.getColors())
child.colors.splice(0,1)
console.log('child 的 colors', child.getColors())
console.log('child2 的 colors', child2.getColors())


function ChildConstructor() {
  Parent.call(this)
}
const childConstructor = new ChildConstructor()
console.log(childConstructor)
const childConstructor2 = new ChildConstructor()
console.log(childConstructor2)
childConstructor.colors.splice(0, 1)
console.log('childConstructor 的 colors', childConstructor.colors)
console.log('childConstructor2 的 colors', childConstructor2.colors)


function ChildCompose() {
  Parent.call(this)
}
ChildCompose.prototype = new Parent()
// 将 ChildCompose 的构造函指向自己
ChildCompose.prototype.constructor = ChildCompose
const childCompose = new ChildCompose()
const childCompose2 = new ChildCompose()
console.log(childCompose)
console.log(childCompose2)

const parentObj = {
  colors: ['red', 'yellow', 'blue'],
  name: 'three primary color',
  getColors: function() {
    return this.colors
  }
}
function Create(parent) {
  function Middle() {}
  Middle.prototype = parent
  return new Middle()
}
const childObj = Create(parentObj)
console.log(childObj)

const childObj2 = Create(parentObj)
console.log(childObj2)
childObj.colors.splice(0, 1)
console.log('childObj 的 colors', childObj.getColors())
console.log('childObj2 的 colors', childObj2.getColors())
console.log('parentObj 的 colors', parentObj.getColors())

function CreateObj(parent) {
  const clone = Create(parent)
  clone.getName = function() {
    return this.name
  }
  return clone
}
const childObj3 = CreateObj(parentObj)
console.log(childObj3)


ChildCompose.prototype = Object(Parent.prototype)
const childCompose3 = new ChildCompose()
console.log(childCompose3)

function inherit(child, parent) {
  var prototype = Object(parent.prototype);
  prototype.constructor = child;
  child.prototype = prototype;
}
function ChildInherit() {
  Parent.call(this)
}
inherit(ChildInherit, Parent)
const childInherit = new ChildInherit()
console.log(childInherit)


export default function JsInherit() {
  return (
    <div></div>
  )
}