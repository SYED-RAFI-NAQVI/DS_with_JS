function stringSearch(long , short){
  let count = 0
  let index = 0
  let word = ""
    for(i = 0; i<long.length; i++) {
        for (j = 0; j < short.length; j++) {
            if(short[j] !== long[i+j]){
              break
            }
            if(j == short.length - 1 ){
              index = i - j
              count++
            }
            word = word + long[i+j]
        }
    }
  return [count, word, index]
}

console.log(stringSearch("this is a long string", "a"))
