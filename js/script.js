function ccValidate(number) {
    let numberArray = number.toString().split("").map(Number);
    const newArray = [];
    let sum = 0;

    for (let i = 0; i < numberArray.length; i ++){
        if (i % 2 !== 0) {
            let doubleI = numberArray[i] * 2;
            if (doubleI>=10){
                let arrayDoubleI = doubleI.toString().split("").map(Number);
                let integer1 = arrayDoubleI[0];
                let integer2 = arrayDoubleI[1];
                let addDoubleI = integer1 + integer2;
                newArray.push(addDoubleI);
            }else {
                newArray.push(numberArray[i] * 2);
               }
        }else {
        newArray.push(numberArray[i]);
        };	
        sum += newArray[i]        
    }  
    let sumArray = sum.toString().split("").map(Number);
    let lastNumber = sumArray.pop();
    if (lastNumber === 0){
        return "This card number is valid.";
    } else {
        return "This card number is not valid.";
    };
	}
	



