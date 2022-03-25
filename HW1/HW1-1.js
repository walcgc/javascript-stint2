const nums = [4,9,5,3,8];
const sortedSquaredNums = transform(nums);

console.log(sortedSquaredNums) 
// [9,16,25,64,81]

function transform(arrayOfNums){

  // square array
  const arr = arrayOfNums.map(function (x) {
    return Math.pow(x, 2);
  });

  // sort array
  arr.sort(function(a, b){return a - b});

  // return squared and sorted array
  return arr;

}
