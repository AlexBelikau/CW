var humanYearsCatYearsDogYears = function(humanYears) {
 
  let arr = []
  if (humanYears === 1) {
    arr.push(humanYears, 15, 15)
  }
  else if  (humanYears === 2){
    arr.push(humanYears, 24, 24) }
  else arr.push(humanYears, 24 + (humanYears -2) * 4, 24 + (humanYears -2) * 5  )
  
  return arr;
}