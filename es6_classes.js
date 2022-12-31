// // class is not hoisted 
// // class Declaration
// class Circle{
//     constructor(radius) {
//         this.radius = radius
//         this.move = function(){}
//     }

//     draw() {
//         console.log('draw')
//     }
// }

// // class Expression
// const square = Class {

// }

// const c = new Circle(1)


// // function delcaration, can call it before its declaration
// // function is hoisted, raised to the top
// function sayHello() {}

// // function expression, not hoisted
// const sayGoodbya = function() {}


// class Circle {
//     constructor(radius) {
//         this.radius = radius
//     }
//     // Instance method
//     draw() {}

//     // Static method, not available any new object
//     // we use static to create utility function
//     static parse(str) {
//         const radius = JSON.parse(str).radius
//         return new Circle(radius)
//     }
// }

// const circle = Circle.parse('{ "radius":1 }')
// const circle2 = new Circle(1)
// console.log(circle)

// const Circle = function() {
//     this.draw = function() {console.log(this)}
// }

// const c = new Circle()
// // Method call, "this" will point to the Circle object
// c.draw();

// const draw = c.draw

// //You call a method as a stand alone function, a function call, 
// // by defaul 'this' will point to the global object, which is window in the broswer, global in node
// draw()

// //when use strict mode, draw() will become undefined to prevent us from calling a method as a function


// set private property, hide certain methods and properties from outside 

// const _radius = Symbol() // everytime we call symbol() we get an unique identifier
// const _draw = Symbol()
// class Circle {
//     constructor(radius) {
//         this[_radius] = radius
//     }


// [_draw](){} //unique symbol() identifier will be used as the name of the draw method, so it becomes private
// }
// const c = new Circle(1)

// console.log(c)

// // a hack way to get a private property value
// const key = Object.getOwnPropertySymbols(c)[0]
// console.log(c.key)

// const _radius = new WeakMap()
// const _move = new WeakMap()
// class Circle {
//     constructor(radius) {
//       _radius.set(this, radius)
      

//       _move.set(this, () => {       //arrow function use 'this' value of their containing function, this will not be rebound
//                                     // this references a Circle object
//         console.log('move', this)
//       })
//     }

//     get radius() {
//         return _radius.get(this)
//     }

//     set radius(value) {
//         if (value <=0) throw new Error('invalid radius.')
//             _radius.set(this, value)
//     }

//     draw() {
//       _move.get(this)()
//       console.log('draw')
//     }
// }

// const c = new Circle(1)


// class Shape {
//     constructor(color) {
//         this.color = color
//     }

//     move() {
//         console.log('move')
//     }
// }

// class Circle extends Shape {
//     constructor(color, radius) {
//         super(color)
//         this.radius = radius
//     }
//     move() {
//         super.move()
//         console.log('circle move')
//     }
//     draw () {
//         console.log('draw')
//     }

// }

// const c = new Circle('red' , 1)


const _items = new WeakMap()

class Stack {
    constructor() {    //use constructor to initiate a private property
     _items.set(this,[])
    }

    push(obj) {
        _items.get(this).push(obj)
    }

    pop() {
        const items = _items.get(this)

        if(items.length ===0)
            throw new Error('Stack is empty.')

        return items.pop()
    }

    peek(){
        const items = _items.get(this)

        if(items.length ===0)
            throw new Error('Stack is empty.')

        return items[items.length -1]
    }

    get count() {
        return _items.get(this).length
    }
}