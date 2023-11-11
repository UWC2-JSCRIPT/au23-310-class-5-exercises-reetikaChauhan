// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
const mainEl = body.children[0]
console.log(mainEl)

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
const parentoful = ul.parentNode // parentNode  of <ul> is <main>
const bodyEl = parentoful.parentNode // parentNode of <main> is <body>
console.log(bodyEl)

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
const p_parentNode = p.parentNode  // parent Node of p is <main>
const ulEle = p_parentNode.children[1] // one of children of <main> is ul
const liEle = ulEle.children[2] // children of <ul> are <li> tags
console.log(liEle)