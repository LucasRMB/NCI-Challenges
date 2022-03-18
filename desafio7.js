// Create a function that filters out negative numbers

var arr = [2, 5, 5.5, 3, 6.8, 0, -5];

function filtrate(el) {
  return el > 0 && el % 1 == 0;
}

console.log(arr.filter(filtrate));