// function getSum(numOne, numTwo) {
//     let numSum = calcSumm(numOne, numTwo);

//     console.log(numSum);
// }

// function calcSumm(numOne, numTwo) {
//     return numOne + numTwo;
// }

// getSum(1, 2)


// function calcSumm(numOne, numTwo) {
//     let result = 1;
//     for(let i = 0; i<numTwo; i++){
//         result *=numOne;
//     }

//     return result;
// }

// console.log(calcSumm(2, 2))


// let showMessage = (text, name) => {
//     let message = text + ', ' + name + '!';
//     return message;
// };
// console.log(showMessage('Hello', 'Vasya'));


// function calcSumm(numOne, numTwo) {
//     if (numTwo === 1){
//         return numOne;
//     }
//     else{
//         return numOne * calcSumm(numOne, numTwo -1);
//     }
// }

// console.log(calcSumm(2, 3))
// try {
//     throw "myException"
//   } catch (e) {
//     console.error(e);
//   }

// var result = [];
// var questions = [
//     'How old are you?',
//     'What is your name?'
// ]

// for (let i = 0; i < questions.length; i++) {
//     result[i] = prompt(questions[i]);
// }
// console.log(result);
// document.write(result)







var result = [];
var questions = [
    'What is your name',
    'How old are you'
];

for (let i = 0; i < questions.length; i++) {
    result[i] = prompt(questions[i]);   
}

console.log(result);
document.write(result)