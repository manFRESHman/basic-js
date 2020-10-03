const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members) || !members.length){
    return false;
  }
  return members.filter(e => typeof(e) == 'string').map(s => (s.trim().toUpperCase())[0]).sort().reduce((a, b) => a+b);
};
