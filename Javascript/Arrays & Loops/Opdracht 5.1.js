//a.
let myArray = [1,2,3,4,5,6,7,8,9,10];
console.log(myArray)

//b. & g.
let myFruit = ['pear', 'strawberry', 'banana', 'pineapple', 'grapes'];
console.log(myFruit)

//c.
console.log(myFruit[0], myFruit[1])

//d.
let randomIndex = myArray[Math.floor(Math.random()*10)];
console.log(randomIndex)

//f.
randomIndex = randomIndex % myFruit.length

console.log(myFruit[randomIndex])

//e.
console.log(myFruit.length)

//h.
let temp = myFruit[0];
myFruit[0] = myFruit[1]
myFruit[1] = temp

console.log(myFruit)