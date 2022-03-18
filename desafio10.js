//  Return the number of vowels in a string

//function countVowels(subject) {
//    return subject.match(/[aeiou]/gi).length;
//}

const countVowels = letras => Array.from(letras)
.filter(letter => 'aeiou'.includes(letter)).length;



console.log(countVowels('lucas da silva, santos, com strogonof '));