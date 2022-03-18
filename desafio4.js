// Calculate the sum of numbers within an array
// reduce reduz os itens de um vetor a um valor único, com base em uma regra
var array = [1, 2, 3, 4, 5];
    
    
    var sum = array.reduce(function(a, b){
        return a + b;
    }, 0);
    
    console.log(sum);



