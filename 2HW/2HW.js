let startNumber = +prompt('Enter an integer start number, please', '10');
let finishNumber = +prompt('Enter an integer finish number bigger than start number, please', '100');
let fixedStartNumber = Math.round(startNumber);
let fixedFinishNumber = Math.round(finishNumber);
console.log(fixedStartNumber);
console.log(fixedFinishNumber);
let passOrNot = confirm('Do you want to pass through even numbers?');
console.log(passOrNot);
if (passOrNot === false) {
  console.log('Don\'t pass!');
  let sum = 0;
  for (let i = fixedStartNumber; i<= fixedFinishNumber; i++) {
    sum+=i;
  }
  console.log(sum);
} else if (passOrNot === true) {
  console.log('Let\'s pass!');
  let sum = 0;
  for (let i = fixedStartNumber; i<= fixedFinishNumber; i++){
    if (i%2 === 0){
      sum-=i;
    }
    sum+=i;
  }
  console.log(sum);
} 









  
  

















          
