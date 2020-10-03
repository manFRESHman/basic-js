const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let res = 0;
  if(!arr){
    return 0;
  }
  for(i of arr){
    for(j of i){
      if(j === '^^'){
        res += 1;
      }
    }
  }
  return res;
};