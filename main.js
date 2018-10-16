for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
  
  if (currentNumber % 5 === 0 && currentNumber % 7 === 0){
      console.log("ChickenMonkey") // multiples of 5 and 7
  }

  else if (currentNumber % 5 === 0) {
      console.log("Chicken") // Only multiples of 5
  }

  else if(currentNumber % 7 === 0) {
      console.log("Monkey") // only multiples of 7
  }
  
  else console.log(currentNumber)

}