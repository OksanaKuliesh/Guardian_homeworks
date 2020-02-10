let wannaPlay = confirm('Hey, let\'s play!');
      if(wannaPlay === true){
        let startNumber = +prompt('Enter an integer start number, please', '10');
        let finishNumber = +prompt('Enter an integer finish number bigger than start number, please', '100');
      if (startNumber && finishNumber !== NaN) {
let fixedStartNumber = Math.round(startNumber);
let fixedFinishNumber = Math.round(finishNumber);
document.writeln(`Your start number is: ${fixedStartNumber}`);
document.writeln(`Your finish number is: ${fixedFinishNumber}`);
      let passOrNot = confirm('Do you want to pass through even numbers?');
      if (passOrNot === false) {
  document.writeln('Don\'t pass through even numbers!');
  let sum = 0;
  for (let i = fixedStartNumber; i<= fixedFinishNumber; i++) {
    sum+=i;
  }
  document.writeln(`Your numbers sum is: ${sum}`);
} else if (passOrNot === true) {
  document.writeln('Let\'s pass through even numbers!');
  let sum = 0;
  for (let i = fixedStartNumber; i<= fixedFinishNumber; i++){
    if (i%2 === 0){
      sum-=i;
    }
    sum+=i;
  }
  document.writeln(`Your numbers sum is: ${sum}`);
}
} else {
  alert('Entered data is not a number!!! Enter numbers, please:)');
}} else {
  document.writeln(':(((( Come again to play! ;)')
}







  
  

















          










  
  

















          
