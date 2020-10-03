const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect){
    this.direct = true;
    if(isDirect === false){
      this.direct = false;
    }
  }

  makeKeys(originalKey){
    originalKey = originalKey.toUpperCase();

    var key = [];
    for (var i = 0; i < originalKey.length; i++) {
      var c = originalKey.charCodeAt(i);
      if (65 <= c && c <= 90){
        key.push((c - 65) % 32);
      }
    }
    return key;
  }

  encrypt(msg, originalKey) {
    if(typeof(msg) === 'undefined' || typeof(originalKey) === 'undefined') throw new Error();
    msg = msg.toUpperCase();

    let key = originalKey;
    if(typeof(originalKey) === 'string'){
      key = this.makeKeys(originalKey);
    }

    var res = "";
    for (var i = 0, j = 0; i < msg.length; i++) {
      var c = msg.charCodeAt(i);
      if (65 <= c && c <= 90) {
        res += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
        j++;
      } else {
        res += msg.charAt(i);
      }
    }

    if(!this.direct) res = res.split('').reverse().join('');
    return res;

  }

  decrypt(msg, originalKey) {
    if(typeof(msg) === 'undefined' || typeof(originalKey) === 'undefined') throw new Error();

    let key = this.makeKeys(originalKey);

    for (var i = 0; i < key.length; i++){
      let t = key[i];
      key[i] = (26 - t) % 26;
    }
    return this.encrypt(msg, key);
  }
}

module.exports = VigenereCipheringMachine;
