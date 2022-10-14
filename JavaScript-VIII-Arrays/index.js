// let n = 5;

// let names = ["Chunnu", "Munnu", "Pablo", "Raju", "Shyam"];

// let isPresent=false;

// for (let i= 0; i < n; i++) { 

// if (names[i] =="shyam") { isPresent=true;

// }

// }

// if(isPresent==true){ console.log(true);

// } else {

// console.log(false);

// }

let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = [];

for(let i = numbers.length -1; i >= 0; i--) {
  reversedNumbers.push(numbers[i]);
}

console.log(reversedNumbers);