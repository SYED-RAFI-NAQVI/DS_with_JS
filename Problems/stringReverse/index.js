// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function rev(str){
  let reversed = ''
  for(let i = 0; i < str.length; i++){
    reversed = str[i] + reversed 
    console.log(reversed)
  }
  return reversed
}

console.log(rev('here'))



// function rev(string){
//   let str = string
//   return str.split('').reverse().join('')
// }
//
// console.log(rev('here'))
