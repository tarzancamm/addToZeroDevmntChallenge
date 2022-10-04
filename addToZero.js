// If any two numbers in an array can be summed together to equal zero, return true. Otherwise, return false.
// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]
let newArray = [10, -4, 2, 0, 4, 5, 8]
// Write your solution below:


let test = (arr) => {
    for (let i = 0; i < newArray.length; i++) {
        for (let j = i + 1; j < newArray.length; j++) {
            if (arr[i] + arr[j] === 0) {
            return true;
            }
        }
    }
    return false;
}



console.log(test(newArray))