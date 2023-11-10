// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.
let counter = 0
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")

function incdecr(inc){
    if (inc){
        counter++;
    }
    else{
        counter--;
    }
}