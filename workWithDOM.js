let button = document.querySelector('button')
let h1 = document.querySelector('h1')
let input = document.querySelector('input')

function buttonHandler() {
	console.log('clicked');
	h1.textContent = input.value
	}

	h1.addEventListener('mouseenter', function() {
		this.style.color = 'red'
		this.style.backgroundColor = 'black'
	})
	h1.addEventListener('mouseleave', function() {
		this.style.color = 'black' 
		this.style.backgroundColor = 'transparent'
	})


button.addEventListener('click', buttonHandler )
