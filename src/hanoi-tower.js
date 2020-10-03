const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let minmoves = function (disks) {
    if (disks === 1) {
      return 1;
    } else {
      return 2*(minmoves(disks-1)) + 1;
    }
  }

  let res = minmoves(disksNumber);
  return {turns: res, seconds: Math.floor(res / turnsSpeed * 3600)};
};
