//Use object literal to create an object 
// not a good way to create and duplicate an object if it has 1 or more methods

// const circle = {
//     radius: 1,
//     location: {
//         x:1,
//         y:1
//     },
//     draw: function() {
//         console.log('draw')
//     }
// }

// circle.draw()


//Factory function

// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw')

//         }
//     }
// }


// const circle1 = createCircle(1)

//Constructor function: naming convention, first letter should be uppercase
// function Circle(radius) {
//     //use this key word to set the properties
//     // this is a reference to the object that is executing this piece of code
//     // imagine we have a new empty object in memory
//     // use this to reference that object
//     // use dot notation to set the property of that object to radius
//     // console.log('this', this)
//     this.radius = radius 
//     this.draw = function() {
//         console.log('draw')
//     }

// }

// //this new operator will create an empty object
// // then it will set this to point to that object
// // finally it will return that object from the function
// // by default this point to the global object
// // if you're running it in a browser, the global object is window
// // if you're running it inside a node env, the global object is global
// // if we remove new, this references to the window object. So you are defining a property
// // or method on the window object. We should avoid that.
// const circle2 = new Circle(1)

//every object in JS has a property called constructor
// and that references the function used to construct or create the object

// when we create an object using object literal or factory syntax
// internally the JS engine uses Object() (the constructor function)  
// let x = new Object() which happens internally 
// we have String(); we use string literal such as '', "". ``
// Boolean (); we use boolen literal such as true, false
// Number() ; we use number literal such as 1,2,3
// Function(); we use function () {}
// let x = {}


// const Circle3 = new Function('radius', ` this.radius = radius 
// this.draw = function() {
//     console.log('draw')
// }`)

// const circle4 = new Circle3(1)

// The following is same as const circle4 = new Circle(1)
// when we use the new operator, this new operator will internally
// create an empty object and pass it as the first arugment to the call method
// the empty object {} will determine the context for 'this'. So 'this' will reference the empty object
// and set the property of the empty object to radius and method to draw in our example
// Circle.call({}, 1)
// Circle.apply({}, [1]) //apply method require array to be passed 

// const another = new Circle(1)


//value vs reference
// when we work with primitives, the value 10 is stored inside of the variable
// it gets copied into y as well
// let x = 10
// let y = x

// x = 20

// when we use object, that object is stored somewhere else in the memory
// and the address of that memory location is stored inside that variable
// when we copy x into y, it's the address or the reference that is copied
// in other words, both x and y are pointing to the same object in the memory
// when we make a change to that object, it will be visible to both x and y
// let x = {
//     value:10
// }

// let y = x
// x.value =20



// let number = 10 

// // number is only available in the local function
// // as we are dealing with two independent variables
// // primative is copied by their value
// function increase(number) {
//     number++
// }
// increase(number)
// console.log(number) //shows 10


// let obj = {value: 10} 

// // the local obj will point to the same object we defined
// // in this case, we are not dealing with two independent copies
// // we have two variables that are pointing to the same object
// // any change we made to one will be visible to another
// function increase(obj) {
//     obj.value++
// }
// increase(obj)
// console.log(obj) //shows 11


// function Circle(radius) {
//     this.radius = radius 

//     // abstraction: only show the essentials hide certain members from outside
//     // only local var to this function, cannot be access from outside
//     let defaultLocation = {x:0, y:0}
//     let computeOptimumLocation = function(factor) {}

//     this.draw = function() {
//         computeOptimumLocation(0.1)
//         console.log('draw')
//     }
// }

// const circle = new Circle(10)
// circle.draw()

// //add a new property to our circle object

// circle.location = {x:1}
// const propertyName = 'location2'
// circle[propertyName]  = {y:1}


// delete circle.location2

// for (let key in circle) {
//     if (typeof circle[key]!= 'function')
//         console.log(key, circle[key])
// }


// const keys = Object.keys(circle)
// console.log(keys)

// //check the existence of a property 
// if('radius' in circle)
//     console.log('yes')



// function Circle(radius) {
//     this.radius = radius 

//     let defaultLocation = {x:0, y:0}
//     //one method to access defaultLocation
//     // this.getDefaultLocation = function(){
//     //     return defaultLocation
//     // }

//     let computeOptimumLocation = function(factor) {}

//     this.draw = function() {
//         computeOptimumLocation(0.1)
//         console.log('draw')
//     }
//     //another method to access defaulLocation 
//     Object.defineProperty(this, 'defaultLocation',
//         {
//             get: function() {
//             return defaultLocation
//         },
//             set: function(value) {
//                 if(!value.x || !value.y)
//                     throw new Error('Invalid Locaiton.')
//                 defaultLocation = value
//         }
//         }
//     )
// }

// const circle = new Circle(10)
// circle.draw()
// circle.defaultLocation = {x:1,y:2}

function Stopwatch() {
    let startTime, endTime, running, duration = 0

    this.start = function() {
        if (running)
            throw new Error('Stopwatch has already started.')

        running = true

        startTime = new Date();

    }

    this.stop = function() {
        if(!running)
            throw new Error('Stopwatch is not started.')
        
        running = false

        endTime = new Date()

        const seconds = (endTime.getTime()-startTime.getTime()) / 1000
        duration += seconds
        
    }
    this.reset = function() {
        startTime = null
        endTime = null
        running = false
        duration = 0

    }
    // read-only property called duration
    Object.defineProperty(this, 'duration', {
        get:function() {return duration}
    })
    
}

const sw = new Stopwatch()