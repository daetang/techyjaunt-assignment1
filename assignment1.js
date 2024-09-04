const calculate = (num1, num2, operation) => {
    function isValidnumber(num1, num2){
        if(typeof num1 !== 'number' || typeof num2 !== 'number'){
            return "this is not a number"
        };
    };
    if(operation === "add"){
       return num1 + num2;
    } else if  (operation === "subtract") {
        return num1 - num2;
    } else if(operation === "multiply") {
        return num1 * num2;
    } else if(operation === "divide") {
        return num1 / num2;
    } else {
        return "This operation is not allowed"
    }
 };
result = calculate(num1, num2, 'operation');
console.log(result);