const {v4:uuidv4}=require('uuid');

function generateNumbers(count){
    const numbers=new Set();

    while(numbers.size<count){
      const randomNumber=uuidv4();
      numbers.add(randomNumber);  
    }

    return Array.from(numbers);
}

const count=10;
const uniqueNumbers=generateNumbers(count);
console.log(uniqueNumbers);