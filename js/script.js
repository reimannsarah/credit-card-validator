function ccValidate(number) {
    let numberArray = number.toString().split("").map(function(digit){return parseInt(digit)});
    
    const newArray = [];
    // for(let i = 1; i <= numberArray.length; i += 2 ) {
    //     numberArray.splice(1, i, ([i]*2));
    //     console.log(numberArray);
    // }

    for (let i = 0; i <= numberArray.length; i ++){
        if (i % 2 !== 0) {
            newArray.push(numberArray[i] * 2);
        }else {
        	newArray.push(numberArray[i]);	
    } 
	}
	console.log(newArray);
}