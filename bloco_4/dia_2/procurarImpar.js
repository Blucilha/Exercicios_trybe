let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = [];
numbers = numbers.sort(function(a,b){ return a - b});

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index]%2 == 1){ impares.push(numbers[index])}
}

console.log(impares);