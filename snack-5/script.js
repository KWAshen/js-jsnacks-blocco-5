const nums = [2, 8, 4, 7, 12, 87]; //o cancellare il 7 e 87 dalla lista

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const evenNums = nums.filter((num) => num % 2 === 0);
  // return evenNums;
  console.log(evenNums);
