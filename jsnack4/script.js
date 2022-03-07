
function OddOrEven(num1, num2) {
    if ((num1 + num2) % 2 == 0) {
        return true;
    } else {
        return false;
    }
};
console.log(OddOrEven((Math.floor(Math.random() * 4)), (Math.floor(Math.random() * 4))));

