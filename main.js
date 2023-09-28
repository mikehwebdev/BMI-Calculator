
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

let bmiText = ''
let bmi = 0
let minWeightString = ''
let maxWeightString = ''

const inputs = document.querySelector('.details-capture')

// Event listeners

// These event listeners toggle the metric or imperial view for inputting your measurements

imperialRadioEl.addEventListener('click', () => {
    imperialInputsEl.style.display = 'grid'
    metricInputsEl.style.display = 'none'
})

metricRadioEl.addEventListener('click', () => {
    imperialInputsEl.style.display = 'none'
    metricInputsEl.style.display = 'grid'
})

// The rest of these event listeners trigger if data has been entered into the input fields. This then runs either the imperialUpdater function or metricUpdater function to ensure all fields are entered. This ensures that the BMI result doesn't change constantly while the user is entering their specifics and makes for a better user experience. If all input fields have a value the main bmiCalculator function executes with the parameter of which measurement system is being entered and the BMI is calculated accordingly.  

metricHeightEl.addEventListener('keyup', () => {
    metricHeightValue = metricHeightEl.value
    metricUpdater() 
})

metricWeightEl.addEventListener('keyup', () => {
    metricWeightValue = metricWeightEl.value
    metricUpdater()
})

imperialHeightFeetEl.addEventListener('keyup', () => {
    imperialFeetValue = imperialHeightFeetEl.value
    imperialUpdater()
})

imperialHeightInchesEl.addEventListener('keyup', () => {
    imperialInchesValue = imperialHeightInchesEl.value
    imperialUpdater()
})

imperialWeightStonesEl.addEventListener('keyup', () => {
    imperialStonesValue = imperialWeightStonesEl.value
    imperialUpdater()
})

imperialWeightPoundsEl.addEventListener('keyup', () => {
    imperialPoundsValue = imperialWeightPoundsEl.value
    imperialUpdater()
})

// Utility functions

//The 'inputs' listener here fires when the value of input changes - ideal for my needs here. If our value exceeds 500 on any input it automatically slices the last number off. This is great for input hygiene to ensure no excessively long numbers are used which can cause visual oddities such as excessivly long results or overflowing input values.

inputs.addEventListener('input', lengthCheck)

function lengthCheck(e){
    let changingInputValue = e.target.value
    
    if (changingInputValue > 500) {
        e.target.value = changingInputValue.slice(0,-1); 
    }

    if (changingInputValue.length > 5) { 
        e.target.value = changingInputValue.slice(0,5); 
     }
}


console.log(metricHeightEl.value)

function imperialUpdater(){
    
    if (imperialHeightFeetEl.value && imperialHeightInchesEl.value && imperialWeightPoundsEl.value && imperialWeightStonesEl.value) {
        console.log(imperialWeightPoundsEl.value)
        console.log(imperialWeightStonesEl.value)
        bmiCalculator('imperial')
    } else {
        bmiInfoContainer.innerHTML = 
        `<p class="your-bmi-title">Welcome!</p>
        <p class="your-bmi-welcome">Enter your height and weight and you'll see your BMI result here</p>`
    }
}

function metricUpdater() {
    if (metricHeightEl.value && metricWeightEl.value) {
        bmiCalculator('metric')
    } else {
        bmiInfoContainer.innerHTML =
            `<p class="your-bmi-title">Welcome!</p>
        <p class="your-bmi-welcome">Enter your height and weight and you'll see your BMI result here</p>`
    }
}

// The below takes the measurement system as the parameter and runs the correct code as the calculations are very different depending on whether you input metric or imperial. Once the BMI is ascertained we can establish if the result is under, over or a healthy weight and the ideal weight range depending on the users height. We then update all the string variables and update the result section using the bmiHtmlUpdate function.

function bmiCalculator(measurementSystem) {

    if (measurementSystem === 'metric') {
        bmi = (metricWeightValue / Math.pow(metricHeightValue / 100, 2)).toFixed(1)

        let minWeight = (18.5 * Math.pow(metricHeightValue / 100, 2)).toFixed(1)
        let maxWeight = (24.9 * Math.pow(metricHeightValue / 100, 2)).toFixed(1)
        minWeightString = `${minWeight} kgs `
        maxWeightString = `${maxWeight} kgs`

    } else {
        let calculatedImperialWeight = Number(imperialStonesValue) * 14 + Number(imperialPoundsValue)
        let calculatedImperialHeight = Number(imperialFeetValue) * 12 + Number(imperialInchesValue)
        bmi = (calculatedImperialWeight / Math.pow(calculatedImperialHeight, 2) * 703).toFixed(1)
        let minWeight = (18.5 / 703) * (Math.pow(calculatedImperialHeight, 2))
        let maxWeight = (24.9 / 703) * (Math.pow(calculatedImperialHeight, 2))

        let minWeightStones = Math.floor(minWeight / 14)
        let minWeightPounds = Math.floor(minWeight % 14)

        let maxWeightStones = Math.floor(maxWeight / 14)
        let maxWeightPounds = Math.floor(maxWeight % 14)

        minWeightString = `${minWeightStones}st ${minWeightPounds}lbs`
        maxWeightString = `${maxWeightStones}st ${maxWeightPounds}lbs`
    }

    if (bmi < 18.5) {
        bmiText = 'underweight'
    } else if (bmi < 25) {
        bmiText = 'a healthy weight'
    } else if (bmi < 30) {
        bmiText = 'overweight'
    } else if (bmi >= 30) {
        bmiText = 'obese'
    }

    bmiHtmlUpdate()
}

function bmiHtmlUpdate() {

    bmiInfoContainer.innerHTML =
        `
    <div class="your-bmi-container-result">
        <div class="your-bmi-container-inner-left">
            <p class="your-bmi-result-title">Your BMI is...</p>
            <p class="your-bmi-result">${bmi}</p>
        </div>
        <div class="your-bmi-container-inner-right">
            <p class="your-bmi-feedback">
            Your BMI suggests you're ${bmiText}. Your ideal weight is between <span>${minWeightString} - ${maxWeightString}.</span>
            </p>
        </div>
    </div>

    `
}



