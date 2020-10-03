const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let s = +sampleActivity;
  if(typeof sampleActivity != 'string' || !s){
    return false;
  }
  let res = Math.ceil(Math.log(MODERN_ACTIVITY / s) / 0.693 * HALF_LIFE_PERIOD);
  if(!(res > 0)){
    return false;
  }
  return res;
};
