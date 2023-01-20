var profilingExports = {};
var profiling = {
  get exports(){ return profilingExports; },
  set exports(v){ profilingExports = v; },
};

export { profiling as __module, profilingExports as exports };
