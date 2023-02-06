var min = function(list){
  let res1 = list.sort( (a,b) => a-b )
  return res1[0];
}

var max = function(list){
  let res2 = list.sort( (a,b) => a-b ).slice(-1)
 
  return res2[0];
}