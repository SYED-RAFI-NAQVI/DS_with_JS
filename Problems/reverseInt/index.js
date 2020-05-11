// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9




//////////////////////
/////  Solution  /////
//////////////////////

function pos_to_neg(num)
{
return -Math.abs(num);
}



function revInt(num){
  if(num>=0){
    let number = num.toString().split('').reverse().map(Number).join('')
    return number
  }else{
    let number = num.toString().split('-')[1].split('').reverse().map(Number).join('')
    return pos_to_neg(number)
  }
}


console.log(revInt(-43423))
