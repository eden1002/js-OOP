// function Shape(color) {
//     this.color = color
// }

// Shape.prototype.duplicate = function() {
//     console.log('duplicate')
// }

// function Circle(radius, color) {
//     Shape.call(this, 'red')
//     this.radius = radius 
// }
// // now we change circlebase to a new object that inherits from shape base

// function extend(Child, Parent) {
//     Child.prototype = Object.create(Parent.prototype)
//     Child.prototype.constructor = Child

// }
// extend(Circle, Shape)

// // overriding duplicate method from the parent Shape


// Circle.prototype.duplicate = function() {
//     console.log('duplicate circle')
// }

// // Circle.prototype = Object.create(Object.prototype) // objectBase
// // Circle.prototype.constructor = Circle
// // new Circle.prototype.constructor() => new Circle()



// Circle.prototype.draw = function() {
//     console.log('draw')
// }


// function Square() {

// }

// extend(Square, Shape)

// Square.prototype.duplicate  = function() {
//     console.log('duplicate square')
// }

// const s = new Shape()
// const c = new Circle(1)

// const shapes = [
//     new Circle(),
//     new Square()
// ]

// for (let shape of shapes)
//     shape.duplicate()

//Composition

// function mixin(target, ...sources) {//use rest operator (...) to take dynamtic number of sources 
//     Object.assign(target, ...sources)  // use spread operator (...) to spread an array into multiple arguments 
// }

// const canEat = {
//     eat: function () {
//         this.hunger--
//         console.log('eating')
//     }
// }

// const canWalk = {
//     walk: function() {
//         console.log('walking')
//     }
// }

// const canSwim = {
//     swim: function() {
//         console.log('swim')
//     }
// }

// function Person() {

// }

// mixin(Person.prototype, canEat, canWalk)

// const person = new Person()
// console.log(person)


// function Goldfish() {

// }

// mixin(Goldfish.prototype, canEat, canSwim)

// const goldfish = new Goldfish()
// console.log(goldfish)

// function HtmlElement() {
//     this.click = function() {
//         console.log('clicked')
//     }
// }

// HtmlElement.prototype.focus = function() {
//     console.log('focused')
// }

// function HtmlSelectElement(items=[]) {
//     this.items = items

//     this.addItem = function(item) {
//         this.items.push(item)
//     }

//     this.removeItem = function(item) {
//         this.items.splice(this.items.indexOf(item),1)
//     }
// }
// // new up HtmlElement which has click method and prototype focus method
// HtmlSelectElement.prototype = new HtmlElement()
// // everytime we assign prototype, we reset the constrcutor property 
// HtmlSelectElement.prototype.constructor = HtmlSelectElement


//Polymorphism
// we have different objs that all have the same parent, 
// they all have a render method, but the render method behaves differently
// we have multiple forms of render methods, which is called ploymorphism
function HtmlElement() {
    this.click = function() {
        console.log('clicked')
    }
}

HtmlElement.prototype.focus = function() {
    console.log('focused')
}

function HtmlSelectElement(items=[]) {
    this.items = items

    this.addItem = function(item) {
        this.items.push(item)
    }

    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item),1)
    }

    this.render = function () {
        return `
     <select>${this.items.map(item=> `
     <option>${item}</option>`).join('')}
     </select>`
    }
}



// new up HtmlElement which has click method and prototype focus method
HtmlSelectElement.prototype = new HtmlElement()
// everytime we assign prototype, we reset the constrcutor property 
HtmlSelectElement.prototype.constructor = HtmlSelectElement


function HtmlImageElement(src) {
    this.src =src

    this.render = function() {
        return `<img src="${this.src}" />`
    }
}

HtmlImageElement.prototype = new HtmlElement()
HtmlImageElement.prototype.constructor = HtmlImageElement

const elements =[
    new HtmlSelectElement([1,2,3]),
    new HtmlImageElement('http//')
]

for (let element of elements)
    console.log(element.render())
