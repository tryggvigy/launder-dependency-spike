var reactIsExports = {};
var reactIs = {
  get exports(){ return reactIsExports; },
  set exports(v){ reactIsExports = v; },
};

export { reactIs as __module, reactIsExports as exports };
