function ccValidate(number){
    let stringNumber = number.toString().split("").map(function(digit){return parseInt(digit)});
    return stringNumber;

}