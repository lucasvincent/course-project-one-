let fs = require('fs')


  
    
      

function matrix_from_file(filename) {
    let matrixBuffer = fs.readFileSync(filename)
    let matrixStr = matrixBuffer.toString()
    let matrix = JSON.parse(matrixStr)
    return matrix;
}

function  matrix_print(m) {
    for (let i = 0; i < m.length; i++)
    {
        console.log(m[i])
    }
}

function matrix_transpose(m) {
    // performs operation
    let height = m.length
    let width  = m[0].length
    // console.log(height, width, m)
    if (height !== width) 
        throw new Error("invalid matrix: it should be a square matrix")
    let temp = matrix_create(height, width)
    for (let i = 0; i < height; i++)
    {
        for (let j = 0; j < width; j++)
        {
            temp[i][j] = m[j][i]
        }
    }
    return temp
}

function matrix_create(height, width) {
    let m = new Array(height)
    for (let i = 0; i < height; i++) {
        m[i] = new Array(width)
        for (let j = 0; j < width; j++)
            m[i][j] = 0
    }
    return m
 }
 function findMinIndex(a, startIndex)
{
    let minValue=a[startIndex]
    let minIndex=startIndex
    for (let i=startIndex+1; i<a.length; i++)
    {
        if (a[i]<minValue)
        {
            minValue= a[i]
            minIndex=i
        }
    }
    return minIndex
}


function selection_sort(a, firsIndex, secondIndex) { //swap funciton 

    let tmp = a[firsIndex]
    a[firsIndex] = a[secondIndex]

    a[secondIndex] = tmp
}
function matrix_sub(a, b) {
    let m=[]
     m=new Array(a .length);
     for (let i =0 ;i<m.length;i++){
         m[i]= new Array(a[i].length)
         if(a[i].length!=b[i].length && a.length!=a[i].length ) throw  Error (" the matirx should be equal")
         if(a.length!=a[i].length ) throw  Error (" the matirx should be equal")
         if(b.length!=b[i].length)throw  Error (" the matirx should be equal")

       for(let j=0 ; j<m[i].length; j++)
         {
             m[i][j]=a[i][j]-b[i][j];
         }
         
     }
     return m
}


 module.exports = {
    matrix_create,
    matrix_transpose,
     matrix_print,
    matrix_from_file,
    matrix_sub,
    findMinIndex,
    selection_sort
 }