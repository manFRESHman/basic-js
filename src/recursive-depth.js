const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let level = 1;
    for(let e in arr) {
        if(Array.isArray(arr[e])){
            let depth = this.calculateDepth(arr[e]) + 1;
            level = Math.max(depth, level);
        }
    }
    return level;
  }
};