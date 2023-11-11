// If an li element is clicked, toggle the class "done" on the <li>
const liEl = document.getElementsByTagName("li")[0]
console.log(liEl)
liEl.classList.toggle("done")
// If a delete link is clicked, delete the li element / remove from the DOM
const deleteEl = document.querySelectorAll(".delete")[0]
console.log(deleteEl)
deleteEl.addEventListener('click',(e) => {
    liEl.parentNode.removeChild(liEl)
})

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>
  // creating new li element
  const textnode = document.createTextNode(text)
  const newliEl = document.createElement("li")
  const spanEl = document.createElement("span")
  spanEl.appendChild(textnode)
  const anchorEl = document.createElement("a")
  anchorEl.setAttribute("class","delete")
  const anchortext = document.createTextNode("Delete")
  anchorEl.appendChild(anchortext)
  //appending anchor tag and span to new list element
  newliEl.append(spanEl,anchorEl)
  // appending new li element to parent ul element
  const parentLi = document.getElementsByTagName("ul")[0]
  parentLi.appendChild(newliEl)
  // new event listener on delete link
  anchorEl.addEventListener("click",(e) =>{
  parentLi.removeChild(newliEl)
  })

  // Finish function here
};
const addEl = document.querySelectorAll(".add-item")[0]
console.log(addEl)
addEl.addEventListener("click",addListItem)
