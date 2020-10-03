const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date){
    return 'Unable to determine the time of year!';
  }
  if(Object.prototype.toString.call(date) !== '[object Date]'){
    throw new Error();
  }
  let m = date.getMonth();
  if(m < 2 || m === 11) return 'winter';
  if(m < 5) return 'spring';
  if(m < 8) return 'summer';
  if(m < 11) return 'autumn';
};
