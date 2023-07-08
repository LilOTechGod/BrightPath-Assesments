let attBtn = document.querySelector('#attBtn');
let mainContent = document.querySelector('.randomChoice')
let attractionValue = document.createElement('h2');

function handleAttraction() {
	let attractionArr = ['Dripping Springs Ranch Park', 'Buda Amphitheater & City Park', 'Ilarios Italian Cuisine']

	let content = attractionArr[Math.floor(Math.random()*attractionArr.length)];
	console.log(content);

	
	attractionValue.textContent = content;
	mainContent.appendChild(attractionValue);
}
attBtn.addEventListener('click', handleAttraction);
