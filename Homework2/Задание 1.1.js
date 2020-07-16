let line1 = 'Привет';
let arr = line1.split("",line1.length);
let newarr = arr.slice(1);
let newline = arr[0].toUpperCase() + newarr.join("");
console.log(newline);
