
/*let div = document.getElementById('playground')
let p = document.getElementsByClassName('text')
let h1 = document.getElementsByTagName('h1')
console.log(h1)*/

/*let div = document.querySelector('#playground') // class => .class; id => #ID; tag => name: tag 

div.innerHTML = '<h2 style="color: red">From JScript</h2>'
console.log(div.innerHTML);

let p = document.querySelectorAll('.text')
console.log(p)

let ul2 = document.querySelector('div#playground > div > ul')
let ul1 = document.querySelector('div#playground > ul')
console.log(ul1)
console.log(ul2)

let h1 = document.querySelector('h1')
h1.textContent = 'Changed from JS'

console.log(h1.textContent)
let input = document.querySelector('input')
console.log(input.value)*/

let a = document.querySelector('a')
let oldHref = a.getAttribute('href')



a.setAttribute('href', 'https://ya.ru')
a.setAttribute('title', 'Go to Yandex')
a.textContent = 'Yandex'


var box1 = document.querySelector('#box1')
var box2 = document.querySelector('#box2')

box1.classList.add('red') //добавляет классы к объекту
box2.classList.remove('blue') //удаляет классы объекта
let hasClass = box2.classList.contains('blue')
console.log(hasClass)

if (hasClass) {
	box2.classList.remove('blue')
} else {
	box2.classList.add('blue')
}

