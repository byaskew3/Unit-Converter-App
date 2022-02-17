// cache DOM
let inputEl = document.querySelector('.input-el');
let lengthEl = document.querySelector('.length-span');
let lengthMeasure = document.querySelector('.length-measure')
let volumeEl = document.querySelector('.volume-span');
let volumeMeasure = document.querySelector('.volume-measure')
let massEl = document.querySelector('.mass-span');
let massMeasure = document.querySelector('.mass-measure')

// create function length(), volume(), mass()
function length(num) {
    lengthEl.textContent = num;
    let lengthValue = num *= 3.281;
    lengthMeasure.textContent = lengthValue;
};



function volume(num) {
    volumeEl.textContent = num;
    let volumeValue = num *= 0.264;
    volumeMeasure.textContent = volumeValue;
};

function mass(num) {
    massEl.textContent = num;
    let massValue = num *= 2.205;
    massMeasure.textContent = massValue;
};

length(20);
volume(20);
mass(20);