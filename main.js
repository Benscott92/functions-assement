

function add(a, b){
    return a + b
}
console.log(add(5, 5))



function multiply(a, b){
    let result = 0
    for(let index = 0; index < b; index += 1){
        result = add(result, a)
    }
    return result
}
console.log(multiply(6, 4))



function power(x, n){
    let poweredNumber = x
    for(let index = 1; index < n; index += 1){
       poweredNumber =  multiply(poweredNumber, x)
    }
    return poweredNumber
}
console.log(power(3, 4))



function factorial(z){
    let newFactor = add(z, -1)
    let factoredNumber = z
    for(let index = 1; index < z; index += 1){
        factoredNumber =  multiply(factoredNumber, newFactor)
        newFactor -= 1
    } 
    return factoredNumber
}
console.log(factorial(4))

// 5 * 4 * 3 * 2 * 1 = 120
// For example, calling factorial(4) should return a result of 24.

// Bonus: Fibonacci (3 points)
// Write a function named "Fibonacci" which takes an argument n and returns the nth Fibonacci number.

// You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will use functions you wrote in earlier katas to write this function.

// For example, calling fibonacci(8) should return a result of 13. The fibonnaci sequence begins:

// 0  1  1  2  3  5  8  [13]  21
// So, the number in brackets is the 8th Fibonacci number.

// Hints
// The answers to most of these katas will look similar. They will typically involve:
// declaring a variable to keep track of a final result
// writing a FOR loop to consistently modify the result
// returning the result
// If you struggle for more than 15 minutes on any one thing, ask for help! This is an exercise in critical thinking, not torture.