let markHeight = 1.82;
let markWeight = 76;
let johnHeight = 1.67;
let johnWeight = 92;

function calculateBmi(mass, height) {

    let bmi = Math.floor(mass / (height * height))
 

    /* switch (bmi) {
      case bmi<18.5:
          return "zayıftır"
          
      case bmi >18.9 : case bmi<24.9:
          return "normal kilolu"
  
  
      default:
          break;
  } */

    if (bmi < 18.5) {
        return "zayıftır"
    } else if (bmi < 24.9) {
        return "normal kilolu"
    } else if (bmi < 29) {
        return "kilolu"
    } else {
        return "aşırı kilolu"

    }

}
let markBmi = calculateBmi(markWeight, markHeight);
let johnBmi = calculateBmi(johnWeight, johnHeight);
console.log(`Mark'ın ${markBmi} ' ın vki `)
console.log (`John'un ${johnBmi} ' ın vki `)

