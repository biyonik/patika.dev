console.log('-*-*-*-*-*-*-*- Node JS/Patika.dev -*-*-*-*-*-*-*-');

const showPrimeNumbers = (lowNumber, highNumber) => {
    for(let i = lowNumber; i <= highNumber; i++) {
        let isPrime = true;
        for(let j = 2; j <= i; j++) {
            if(i % j === 0 && j !== i) {
                isPrime = false;
            }
        }

        if(isPrime) console.log(i);
    }
}


const params = process.argv.slice(2);
const firstNumber = Number(params[0]) || 0;
const secondNumber = Number(params[1]) || 0;
showPrimeNumbers(firstNumber, secondNumber);
