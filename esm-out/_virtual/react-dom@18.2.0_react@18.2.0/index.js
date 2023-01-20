var reactDomExports = {};
var reactDom = {
  get exports(){ return reactDomExports; },
  set exports(v){ reactDomExports = v; },
};

export { reactDom as __module, reactDomExports as exports };
