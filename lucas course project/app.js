let {
    
    matrix_sub,
    selection_sort,
    matrix_transpose,
    matrix_print,
    findMinIndex,
    matrix_from_file,
  
 } = require('./functions.js')

const rls = require('readline-sync')

console.log("Enter a command:")
let command = rls.prompt()
let arrayOfCommand = command.split(' ')

//console.log(process.argv)
let type = arrayOfCommand[0]
if (type === "matrix") {
    // matrix
    // matrix multiplication
    // matrix traspose
    let operationType = arrayOfCommand[1];
    console.log(type, operationType);
    if (operationType === "transpose") {
        // one matrix only can be transposed
        let matrixFilePath = arrayOfCommand[2];
        let matrix = matrix_from_file(matrixFilePath)
        let transposed_matrix = matrix_transpose(matrix)
       matrix_print (transposed_matrix)
      
    } 
      
  else if (operationType === "subtract")
    {
        let matrixAFilePath = arrayOfCommand[2];
        let matrixA = matrix_from_file(matrixAFilePath)
        let matrixBFilePath = arrayOfCommand[3];
        let matrixB = matrix_from_file(matrixBFilePath)
        console.log("matrixA")
        matrix_print(matrixA)
        console.log("matrixB")
        matrix_print(matrixB)
        console.log("whats up \n")
        let matrixC = matrix_sub(matrixA, matrixB)
        console.log(`The Sum of the two matrixs is: \n `)
        matrix_print(matrixC)
        
    
    
    } else {
        console.log("Unknown operation type");
    }
} else if (type === "sort") {
    let inputArray = arrayOfCommand[1];
    let array = matrix_from_file(inputArray)

    for (let i = 0; i < array.length; i++) {    
        let secondIndex = findMinIndex(array, i) 
        selection_sort(array, i, secondIndex)
    }
    console.log(array)
} else {
    console.log("Unknown task type");
}
