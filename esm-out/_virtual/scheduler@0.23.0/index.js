var schedulerExports = {};
var scheduler = {
  get exports(){ return schedulerExports; },
  set exports(v){ schedulerExports = v; },
};

export { scheduler as __module, schedulerExports as exports };
