function ccValidate(number) {
    let numberArray = number.toString().split("").map(function(digit){return parseInt(digit)});
    
    const newArray = [];
    for(let i = 1; i <= numberArray.length; i += 2 ) {
        newArray.push(numberArray[i] * 2);
        console.log(newArray);
    }

}