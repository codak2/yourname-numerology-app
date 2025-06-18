import numberToSingleDigitNumber from './numberToSingleDigitNumber.js';

const nameToNumber = (name) =>{

    // Trim whitespace from both ends
    const cleanName = name.trim().toUpperCase();

    const No1 = ['A','I','J','Q','Y'];
    const No2 = ['B','K','R'];
    const No3 = ['S','C','G','L'];
    const No4 = ['D','M','T'];
    const No5 = ['E','H','N','X'];
    const No6 = ['U','V','W'];
    const No7 = ['O','Z'];
    const No8 = ['F','P'];

    let sum=0;

    for(let i=0; i <= cleanName.length; i++){
        if (No1.includes(cleanName[i])){
            sum+=1;
        } else if (No2.includes(cleanName[i])){
            sum+=2;
        } else if (No3.includes(cleanName[i])){
            sum+=3;
        } else if (No4.includes(cleanName[i])){
            sum+=4;
        } else if (No5.includes(cleanName[i])){
            sum+=5;
        } else if (No6.includes(cleanName[i])){
            sum+=6;
        } else if (No7.includes(cleanName[i])){
            sum+=7;
        } else if (No8.includes(cleanName[i])){
            sum+=8;
        }
    }

    
    console.log("sum = ",sum,);

    return numberToSingleDigitNumber(sum);
}

export default nameToNumber;