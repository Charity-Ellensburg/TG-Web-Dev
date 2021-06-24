function myGreeting(onclick) {
    console.log('Hello World')
    document.getElementById("text").innerHTML = "Hello World";
    return myGreeting;
}
 let myElement = document.getElementById("test")
 function myFunction(myParam) { 
        console.log(myParam)
        return (myParam * 2)
 }

myFunction()
let result = myFunction(6)
console.log(result)

