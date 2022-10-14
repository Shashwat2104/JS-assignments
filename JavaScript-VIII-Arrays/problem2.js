
let char="p"

let lower_char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "1", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",

"w", "x", "y", "z"];

let upper_char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "0", "P", "Q", "R", "S", "T", "U", "V",

"W", "x", "Y", "Z"];

  let N=lower_char.length-1;

for(let i=0;i<=N;i++){
  if(char==lower_char[i])

  {
    char=upper_char[i];
    break;
  } 
}console.log(char)