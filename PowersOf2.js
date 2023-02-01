function powersOfTwo(n){
  let arr = []
  
  for ( e = 0; e <=n; e++  ) {
       arr.push(Math.pow(2,e))
  }
  return arr;
}