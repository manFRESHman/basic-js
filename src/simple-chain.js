const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: '',

  getLength() {
    return this.chain.split(" )~~( ").length;
  },

  addLink(value) {
    if(typeof(value) === 'undefined'){
      value = ''
    }
    else{
      value = " " + value;
    }
    if(!this.chain){
      this.chain = `${value}`;
    }
    else{
      this.chain += ` )~~(${value}`;
    }
    return this;
  },

  removeLink(position) {
    if(this.getLength() < position || position < 1){
      this.chain = "";
      throw new Error;
    }
    let elems = this.chain.split(" )~~( ");
    elems[0] = elems[0].slice(1);
    elems.splice(position - 1, 1);
    this.chain = "";
    for(e of elems){
      this.addLink(e);
    }
    return this;
  },

  reverseChain() {
    let elems = this.chain.split(" )~~( ");
    if(elems.length > 1){
      elems[0] = elems[0].slice(1);
      elems = elems.reverse();
      this.chain = "";
      for(e of elems){
        this.addLink(e);
      }
    }
    return this;
  },
  finishChain() {
    let res = `(${this.chain} )`;
    this.chain = "";
    return res;
  }
};

module.exports = chainMaker;
