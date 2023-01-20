var simpleSwizzleExports = {};
var simpleSwizzle = {
  get exports(){ return simpleSwizzleExports; },
  set exports(v){ simpleSwizzleExports = v; },
};

export { simpleSwizzle as __module, simpleSwizzleExports as exports };
