const numberToSingleDigitNumber = (num) =>{

    let tempNum = num;
    let sum = 0;

    if ((num > 9) && (tempNum == num)){
        while(tempNum>0){
            sum += tempNum % 10;
            tempNum = Math.floor(tempNum / 10);
        }
    }

    if(sum>9){
        numberToSingleDigitNumber(sum)
    }else{
        return sum;
    }
}

export default numberToSingleDigitNumber;