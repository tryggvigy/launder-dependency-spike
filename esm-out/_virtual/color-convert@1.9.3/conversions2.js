var conversionsExports = {};
var conversions = {
  get exports(){ return conversionsExports; },
  set exports(v){ conversionsExports = v; },
};

export { conversions as __module, conversionsExports as exports };
