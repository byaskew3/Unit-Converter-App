// caching the DOM
let inputEl = document.querySelector('.input-el');

// length elements
let lengthEl = document.querySelectorAll('.length-span');
let lengthMeasure = document.querySelector('.length-measure');
let lengthMeasure2 = document.querySelector('.length-measure-2');

// volume elements
let volumeEl = document.querySelectorAll('.volume-span');
let volumeMeasure = document.querySelector('.volume-measure');
let volumeMeasure2 = document.querySelector('.volume-measure-2');

// mass elements
let massEl = document.querySelectorAll('.mass-span');
let massMeasure = document.querySelector('.mass-measure');
let massMeasure2 = document.querySelector('.mass-measure-2');


// create function length(), volume(), mass()
function length(num) {
    for(let i = 0; i < lengthEl.length; i++) {
        lengthEl[i].textContent = num;
    }
    let metersToFeet = (num * 3.28084).toFixed(3);
    let feetToMeters = (num * 0.3048).toFixed(3);
    lengthMeasure.textContent = metersToFeet;
    lengthMeasure2.textContent = feetToMeters;
};



function volume(num) {
    for(let i = 0; i < volumeEl.length; i++) {
        volumeEl[i].textContent = num;
    }
    let litersToGallons = (num * 0.264172).toFixed(3);
    let gallonsToLiters = (num * 3.78541).toFixed(3);
    volumeMeasure.textContent = litersToGallons;
    volumeMeasure2.textContent = gallonsToLiters;
};

function mass(num) {
    for(let i = 0; i < massEl.length; i++){
        massEl[i].textContent = num;
    }
    let kilosToPounds = (num * 2.2046).toFixed(3);
    let poundsToKilos = (num * 0.453592).toFixed(3);
    massMeasure.textContent = kilosToPounds;
    massMeasure2.textContent = poundsToKilos;
};

length(20);
volume(20);
mass(20);