
const num1 = 10;
const num2 = 25;
function getRandomNumbers(y,z){
return Math.floor(Math.random()*(z-y+1))+y

}
let newNumber = getRandomNumbers(num1,num2)
console.log(newNumber)

