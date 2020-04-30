// function bubbleSort(arr){
//   for(i = arr.length; i > 0; i--){
//     for(j = 0; j < i - 1; j++){
//       // console.log(arr, arr[j], arr[j+1])
//       if(arr[j]> arr[j+1]){
//         let temp = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = temp
//       }
//     }
//   }
//   return arr
// }
//
// console.log(bubbleSort([23,12,54,2,56,5]))



// Optimizing Code
function bubbleSort(arr){
  let swap
  for(i = arr.length; i > 0; i--){
    swap = true
    for(j = 0; j < i - 1; j++){
      // console.log(arr, arr[j], arr[j+1])
      if(arr[j]> arr[j+1]){
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        swap = false
      }
    }
    if (swap) break
  }
  return arr
}

console.log(bubbleSort([23,1,2,4,5]))
