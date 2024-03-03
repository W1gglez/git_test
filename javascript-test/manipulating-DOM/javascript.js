// Manipulating DOM elements
const container = document.querySelector('#container')

const p = document.createElement('p')
p.style.color ='red'
p.textContent ='Hey I\'m red!'

container.appendChild(p)

const h3 = document.createElement('h3')
h3.style.color = 'blue'
h3.textContent = 'I\'m a blue h3!'

container.appendChild(h3)

const div1 = document.querySelector('div')
div1.style.cssText = 'border: 1px; borderColor: black; backgroundColor: pink'

const h1 = document.createElement('h1')
h1.textContent = 'I\'m in a div!'

div1.appendChild(h1)

const p1 = document.createElement('p')
p1.textContent = "ME TOO!"

div1.appendChild(p1)


container.appendChild(div1)


