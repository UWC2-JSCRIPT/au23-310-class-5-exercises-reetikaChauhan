// If an li element is clicked, toggle the class "done" on the <li>
const liEl = document.getElementsByTagName("li")[0]
liEl.addEventListener("click",() =>{
  liEl.classList.toggle("done")
})

// If a delete link is clicked, delete the li element / remove from the DOM
const deleteEl = document.querySelectorAll(".delete")[0]
console.log(deleteEl)
deleteEl.addEventListener('click',(e) => {
    liEl.parentNode.removeChild(liEl)
})

const parentLi = document.querySelectorAll(".today-list")[0]
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
  // ---- code for re-ordering -----
  newliEl.setAttribute("class","draggable")
  newliEl.setAttribute("draggable","true")
  // ---------------------------------
  const spanEl = document.createElement("span")
  spanEl.appendChild(textnode)
  const anchorEl = document.createElement("a")
  anchorEl.setAttribute("class","delete")
  const anchortext = document.createTextNode("Delete")
  anchorEl.appendChild(anchortext)
  //appending anchor tag and span to new list element
  newliEl.append(spanEl,anchorEl)
  // appending new li element to parent ul element
  parentLi.appendChild(newliEl)
  // new event listener on delete link
  anchorEl.addEventListener("click",(e) =>{
  parentLi.removeChild(newliEl)
  })
  // ---- code for re-ordering -------------
  newliEl.addEventListener('dragstart',() => {
    newliEl.classList.add('dragging')
  })
  newliEl.addEventListener('dragend',() => {
    newliEl.classList.remove('dragging')
  })
  // ----------------------------------------
  // Finish function here
};
const addEl = document.querySelectorAll(".add-item")[0]
console.log(addEl)
addEl.addEventListener("click",addListItem)

// reorder elements
const parentEl = document.querySelectorAll(".today-list")
parentEl.forEach(childEl =>{
  childEl.addEventListener('dragover',e =>{
    e.preventDefault()
    const afterElement = getDragAfterElement(childEl, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      childEl.appendChild(draggable)
    } else {
      childEl.insertBefore(draggable, afterElement)
    }
  } )
})

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}
