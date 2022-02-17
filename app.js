// cache DOM
let inputEl = document.querySelector('.input-el');
let lengthEl = document.querySelectorAll('.length-span');
let lengthMeasure = document.querySelector('.length-measure')
let volumeEl = document.querySelectorAll('.volume-span');
let volumeMeasure = document.querySelector('.volume-measure')
let massEl = document.querySelectorAll('.mass-span');
let massMeasure = document.querySelector('.mass-measure')

console.log(lengthEl);
// create function length(), volume(), mass()
function length(num) {
    for(let i = 0; i < lengthEl.length; i++) {
        lengthEl[i].textContent = num;
    }
    let lengthValue = num *= 3.281;
    lengthMeasure.textContent = lengthValue;
};



function volume(num) {
    for(let i = 0; i < volumeEl.length; i++) {
        volumeEl[i].textContent = num;
    }
    let volumeValue = num *= 0.264;
    volumeMeasure.textContent = volumeValue;
};

function mass(num) {
    for(let i = 0; i < massEl.length; i++){
        massEl[i].textContent = num;
    }
    let massValue = num *= 2.205;
    massMeasure.textContent = massValue;
};

length(20);
volume(20);
mass(20);