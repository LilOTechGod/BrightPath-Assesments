const complimentBtn = document.getElementById("complimentButton")
// variable for fortune button
const fortuneBtn = document.getElementById('fortuneButton');
// variable for custom fortune here
const customFortune = document.getElementById('addFortuneInput');
const showFortune = document.getElementById('populateFortune');
const cusFortuneBtn = document.getElementById('addFortuneBtn');



// created card in div for section
createCustomCard = (yourCustomFortune) => {
    showFortune.innerHTML = ``;
    yourCustomFortune.map((fortune) => {
        const holdingDiv = document.createElement('div');
        holdingDiv.innerHTML=  `
             <h3>${fortune.customFortune}</h3>`

        showFortune.appendChild(holdingDiv);
    })
    
}



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

// axios request for fortune on the front end to fetch data from the back end
const getRandomFortune = () => {
    axios.get('http://localhost:4000/api/fortuneCookie/')
    .then(res => {
        const data = res.data;
        alert(data);
    })
}

// axios post request for fortune on front end
const postFortune = (e) => {
    e.preventDefault();
    axios.get('http://localhost:4000/api/yourFortune/')
    .then(res => {

    })
}

complimentBtn.addEventListener('click', getCompliment)
// addeventlistener for when the button is clicked
fortuneBtn.addEventListener('click', getRandomFortune);