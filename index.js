
function isPrime(a) {
    for(let i = 2; i < a; i++){
        if(num % i === 0) {
            return false;
        }
      
    } return true;

}

function averageOfPrime(b) {
    let j = 0;
    let sum = 0;
    let average;
    for(let i = 2; i < b; i++) {
        if(isPrime(i)) {
            sum+= i;
            j++;
        }
    }
   return average = sum/j;
}



averageOfPrime();





