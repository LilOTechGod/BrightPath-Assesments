let colorBtn = document.getElementById('color');
let placeBtn = document.getElementById('place');
let ritualBtn = document.getElementById('ritual');


function handleColorBtn() {
    window.alert('My favorite color is royal blue (:')
};

function handlePlaceBtn() {
    window.alert('My favorite place to visit is my parents hometown in Mexico! Very beautiful')
};

function handleRitualBtn() {
    window.alert('My morning ritual is sit up in bed once I wake up and smile (: Do not touch my phone till 30 min later that way I can focus my descion making power towards things that are most important. After a couple hours of coding I stretch and do a 25 min high intensity workout!')
}

colorBtn.addEventListener('click', handleColorBtn);
placeBtn.addEventListener('click', handlePlaceBtn);
ritualBtn.addEventListener('click', handleRitualBtn);