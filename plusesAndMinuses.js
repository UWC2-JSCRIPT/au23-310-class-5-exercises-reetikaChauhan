// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.
// plus button
let counter = 0
const buttonplus = document.createElement("button");
const textplus = document.createTextNode("+");
buttonplus.appendChild(textplus)
buttonplus.setAttribute("id","plus")
const mainEl = document.getElementsByTagName("body")[0]
console.log(mainEl)
mainEl.appendChild(buttonplus)
// minus button
const buttonminus = document.createElement("button");
const textminus = document.createTextNode("-");
buttonminus.appendChild(textminus)
buttonminus.setAttribute("id","minus")
mainEl.appendChild(buttonminus)
// h1 tag counter
const h1El = document.createElement("h1");
h1El.setAttribute("id","counter")
mainEl.appendChild(h1El)
h1El.innerHTML = counter
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")

function incdecr(inc){
    if (inc){
        counter++
        document.getElementById("counter").innerHTML = counter;
    }
    else{
        counter--
        document.getElementById("counter").innerHTML = counter;
    }
}

const buttonElinc =  document.getElementById("plus")
const buttonEldec =  document.getElementById("minus")
let inc = true
buttonElinc.addEventListener('click',(e) => {
        inc = true
        incdecr(inc)
})
buttonEldec.addEventListener('click',(e) =>{
    inc = false
    incdecr(inc)
})