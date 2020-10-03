const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let [repeatTimes, separator, addition, additionRepeatTimes, additionSeparator] =
    [1, '+', '', 1, '|'];
  if(options){
    if(typeof(options.repeatTimes) !== 'undefined') repeatTimes = options.repeatTimes;
    if(typeof(options.separator) !== 'undefined') separator = options.separator;
    if(typeof(options.addition) !== 'undefined') addition = options.addition;
    if(typeof(options.additionRepeatTimes) !== 'undefined') additionRepeatTimes = options.additionRepeatTimes;
    if(typeof(options.additionSeparator) !== 'undefined') additionSeparator = options.additionSeparator;
  }
  let ans = '';
  let add = '';
  for(let i = 0; i < additionRepeatTimes - 1; i++){
    add += addition + additionSeparator;
  }
  if(additionRepeatTimes){
    add += addition;
  }
  for(let i = 0; i < repeatTimes - 1; i++){
    ans += str + add + separator;
  }
  if(repeatTimes) ans += str + add;
  return ans;
};
  