function isPythagoreanTriple(integers) {
  let res = integers.sort( (a,b) => a-b)
  let a = res[0];
  let b = res[1];
  let c = res[2];
  return a*a+ b*b === c*c;
}