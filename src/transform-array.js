const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error();
  }
  if(!arr.length){
    return arr;
  }
  let narr = arr.slice(0);
  let i = 0;
  let ln = narr.length;
  if(typeof narr[0] === 'string' && narr[0].endsWith('-prev')){
    narr.splice(0, 1);
    i += 1;
  }
  if(typeof narr[narr.length - 1] === 'string' && narr[narr.length - 1].endsWith('-next')){
    narr.splice(narr.length - 1, 1);
    ln -= 1;
  }
  for(; i < ln; i++){
    if(narr[i] === '--discard-next'){
      narr.splice(i, 2, 'TODELETE');
    }
    else if(narr[i] === '--discard-prev'){
      narr.splice(i - 1, 2, 'TODELETE');
    }
    else if(narr[i] === '--double-next'){
      narr.splice(i, 1, narr[i + 1]);
    }
    else if(narr[i] === '--double-prev'){
      narr.splice(i, 1, narr[i - 1]);
    }
  }
  narr = narr.filter(el => el != 'TODELETE');
  return narr;
};
