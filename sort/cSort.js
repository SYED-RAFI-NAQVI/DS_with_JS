// You are given an array A of non-negative integers of size m. Your task is to sort the array in non-decreasing order and print out the original indices of the new sorted array.
//
// Example:
//
// A={4,5,3,7,1}
//
// After sorting the new array becomes A={1,3,4,5,7}.
//
// The required output should be "4 2 0 1 3"
//
// INPUT :
//
// The first line of input consists of the size of the array
//
// The next line consists of the array of size m
//
// OUTPUT :
//
// Output consists of a single line of integers
//
// CONSTRAINTS:
//
// 1<=m<=106
//
// 0<=A[i]<=106
//
// NOTE: The indexing of the array starts with 0.


const prompt = require('prompt-sync')()


function bubbleSort(arr){
  for(i=arr.length; i > 0; i--){
    for(j=0; j < i -1; j++){
      if(arr[j] > arr[j+1]){
        temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}

let arrSize = prompt('input array size: ')
let arr = []
let result = []

for(i = 0; i < arrSize; i++){
  a = prompt('input into array: ')
  arr.push(a)
}

arr = arr.map(Number)
arrCopy = arr.map(Number)

bubbleSort(arr)

for(i=0; i<arr.length; i++){
  result.push(arrCopy.indexOf(arr[i]))
}
console.log('Original: ', arrCopy)
console.log('Sorted:   ', arr)
console.log('Result:   ', result)
