const {v4:uuidv4}=require('uuid');

function generateNumbers(count){
    const numbers=new Set();
    while(numbers.size<count){
      const randomNumber=uuidv4().replace(/-/g,'').replace(/\D/g,'').substring(0,8);
      const formattedNumber = `${randomNumber.substring(0, 2)}-${randomNumber.substring(2, 5)}-${randomNumber.substring(5)}`;
      numbers.add(formattedNumber);  
    }

    return Array.from(numbers);
}
// const random ='123456789123'
// console.log(`${random.substring(0,2)}-${random.substring(2,5)}-${random.substring(5,8)}`);

const count=50;
const uniqueNumbers=generateNumbers(count);
console.log(uniqueNumbers);
