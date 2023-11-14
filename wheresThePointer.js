// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click
const tableEl = document.getElementsByTagName("table")[0]
console.log(tableEl)
tableEl.addEventListener('click', (e) => {
    e.target.innerHTML = `${e.clientX}, ${e.clientY}`
})

