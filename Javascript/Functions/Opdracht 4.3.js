
function myNumber(x) { 
    x = 20
    document.getElementById("myOutput").innerHTML = Math.floor(Math.random() *x);
    
}

function myMinNumber() {
    document.getElementById("myMin").innerHTML = Math.min(1,5,7,30,-5);
}
console.log(Math.min(1,5,7,30,-5))

function myMaxNumber() {
    document.getElementById("myMax").innerHTML = Math.max(6,2,8,-2,50);
}

console.log(Math.max(6,2,8,-2,50))