const imperialRadioEl = document.getElementById('imperial')
const metricRadioEl = document.getElementById('metric')

const metricHeightEl = document.getElementById('metricHeight')
const metricWeightEl = document.getElementById('metricWeight')

const imperialHeightFeetEl = document.getElementById('imperialHeight-ft')
const imperialHeightInchesEl = document.getElementById('imperialHeight-in')
const imperialWeightStonesEl = document.getElementById('imperialWeight-st')
const imperialWeightPoundsEl = document.getElementById('imperialWeight-lbs')


const imperialInputsEl = document.querySelector('.bmi-details-imperial')
const metricInputsEl = document.querySelector('.bmi-details-metric')
const bmiInfoContainer = document.querySelector('.your-bmi-container')

let metricHeightValue = 0
let metricWeightValue = 0

let imperialStonesValue = 0
let imperialPoundsValue = 0

let imperialFeetValue = 0
let imperialInchesValue = 0

let imperialHeightValue = 0
let imperialWeightValue = 0

let bmi = 0

imperialRadioEl.addEventListener('click', ()=>{
    imperialInputsEl.style.display = 'grid'
    metricInputsEl.style.display ='none'
})

metricRadioEl.addEventListener('click', ()=>{
    imperialInputsEl.style.display = 'none'
    metricInputsEl.style.display ='grid'
})


metricHeightEl.addEventListener('keyup',()=>{
    metricHeightValue = metricHeightEl.value
    bmiCalculator('metric')
})

metricWeightEl.addEventListener('keyup',()=>{
    metricWeightValue = metricWeightEl.value
    bmiCalculator('metric')
})

imperialHeightFeetEl.addEventListener('keyup',()=>{
    imperialFeetValue = imperialHeightFeetEl.value
    bmiCalculator('imperial')
})

imperialHeightInchesEl.addEventListener('keyup',()=>{
    imperialInchesValue = imperialHeightInchesEl.value
    bmiCalculator('imperial')
})

imperialWeightStonesEl.addEventListener('keyup',()=>{
    imperialStonesValue = imperialWeightStonesEl.value
    console.log('test')
    bmiCalculator('imperial')
})

imperialWeightPoundsEl.addEventListener('keyup',()=>{
    imperialPoundsValue = imperialWeightPoundsEl.value
    bmiCalculator('imperial')
})

let bmiText = ''

function bmiCalculator(measurementSystem){


if (measurementSystem === 'metric') {

    bmi = (metricWeightValue / Math.pow(metricHeightValue /100, 2)).toFixed(1)
    console.log(bmi) 
} else {
    let calculatedImperialWeight = Number(imperialStonesValue) * 14 + Number(imperialPoundsValue) 
    let calculatedImperialHeight = Number(imperialFeetValue) * 12 + Number(imperialInchesValue) 
    bmi = (calculatedImperialWeight/Math.pow(calculatedImperialHeight, 2) * 703).toFixed(1)
    
    
}

if (bmi < 18.5) {
     bmiText = 'underweight'
} else if (bmi < 25) {
    bmiText = 'a healthy weight'
} else if (bmi < 30) {
    bmiText ='overweight'
} else if (bmi >= 30) {
    bmiText = 'obese'
}
bmiHtmlUpdate()
}

function bmiHtmlUpdate(){
    
bmiInfoContainer.innerHTML = 
    `
    <div class="your-bmi-container-result">
        <div class="your-bmi-container-inner-left">
            <p class="your-bmi-title">Your BMI is...</p>
            <p class="your-bmi-result">${bmi}</p>
        </div>
        <div class="your-bmi-container-inner-right">
            <p class="your-bmi-feedback">
            Your BMI suggests you're ${bmiText}. Your ideal weight is between <span>63.3kgs - 85.2kgs.</span>
            </p>
        </div>
    </div>

    `
}

