/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let userInput = document.getElementById("input-el")
const convertBtn = document.getElementById("convertBtn")
let lengthData = document.getElementById("lengthData")

convertBtn.addEventListener("click", function(){
let userInputValue = userInput.value
let userInputNumber = Number(userInputValue)

lengthData.innerHTML = `${userInputNumber} meters = ${(userInputNumber*3.281).toFixed(3)} feet | ${userInputNumber} feet = ${(userInputNumber/3.281).toFixed(3)} meters`

volumeData.innerHTML = `${userInputNumber} liters = ${(userInputNumber*.264).toFixed(3)} gallons | ${userInputNumber} gallons = ${(userInputNumber/.264).toFixed(3)} liters`

massData.innerHTML = `${userInputNumber} kilos = ${(userInputNumber*2.204).toFixed(3)} pounds | ${userInputNumber} pounds = ${(userInputNumber/2.204).toFixed(3)} kilos`
 
})



