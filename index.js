// Homework Exercises
// 1. For each of these values, what type will the TypeScript compiler infer?
//let a = 118;
// A: number
//let b = 'Thieves';
// A: string
//let c = [true, false, false];
// A: boolean
//let d = {age: number};
// A: any
//let e = [3]
// A: number
//let f;
// A: any
//let g = []
// A: null
// 2. What are the compilation errors in each of the following code snippets?
/*let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};*/
// A: The variable releaseYear is not defined
/*let prices = [100, 200, 300];
prices[0] = '$100';*/
// A: Price at 0 is a number and cannot become a string
//function myFunc(a: number, b: number): number {}
// A: The a and b variables are not defined in dictionary
//CodeWars Questions
/*1. Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog.
If this one is an alligator (case-insensitive) return small otherwise return wide.*/
function mouth_size(animal) {
    if (animal.toLowerCase() === 'alligator') {
        return 'small';
    }
    else {
        return 'wide';
    }
}
console.log(mouth_size('Alligator'));
console.log(mouth_size('wolf'));
/*2. You get an array of numbers, return the sum of all of the positives ones.
Note: if there is nothing to sum, the sum is default to 0.*/
function positive_sum(arr) {
    let answer = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            answer += arr[i]
        }
    }
    return answer
}
console.log(positive_sum([1, -4, 7, 12]));