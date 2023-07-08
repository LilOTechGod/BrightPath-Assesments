console.log("hello world");
let rubberDuck = document.querySelector('img');


function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
	window.alert('Your form has been submitted, thank you!')
	document.getElementById('contact').reset();
}

function handleImg() {
	window.alert('Thank you! Thank you! For supporting small business')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
rubberDuck.addEventListener('mouseover', handleImg);
