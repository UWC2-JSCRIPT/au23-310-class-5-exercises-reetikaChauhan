// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>

const anchor = document.createElement("a");
const text = document.createTextNode("Buy Now!");
anchor.appendChild(text)
anchor.setAttribute("id","cta")
const mainEl = document.getElementsByTagName("main")[0]
console.log(mainEl)
mainEl.appendChild(anchor)
// or use pelement to insert after p tag [pelement.after(anchor)] works same.



// Access (read) the data-color attribute of the <img>,
// log to the console
const imgelement = document.getElementsByTagName("img")[0];
const colorattribute = imgelement.getAttribute('data-color')
console.log(colorattribute)

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const liElement = document.getElementsByTagName("li")[2]
liElement.setAttribute('class','highlight')

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
const pElement = document.getElementsByTagName("p")[0]
console.log(pElement)
mainEl.removeChild(pElement)


