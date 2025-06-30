const numberToSingleDigitNumber = (num) =>{

    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    if (sum > 9){
        return numberToSingleDigitNumber(sum) 
    }else{
        console.log("Result number: ", sum)
        return sum;
    }
}

export default numberToSingleDigitNumber;