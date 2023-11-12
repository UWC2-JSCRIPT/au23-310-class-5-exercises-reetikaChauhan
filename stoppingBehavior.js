// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
const aEle = document.getElementById("more-info")
aEle.setAttribute("href"," ")
aEle.addEventListener("click",() => {
  const text = `Here's some info`
  alert(text)
})

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"



document.getElementById("dog").addEventListener('click', (e) => {
  e.stopPropagation();
  alert("Bow wow!")
});