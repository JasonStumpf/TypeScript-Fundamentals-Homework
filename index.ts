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