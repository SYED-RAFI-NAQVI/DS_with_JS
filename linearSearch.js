 function linear(arr, val){
    for(i = 0; i<arr.length; i++){
        if(arr[i]==val) {
            return i
        }
    }
 return -1
 }

 console.log(linear([2,3,4,5,6,7,8,9], 123))