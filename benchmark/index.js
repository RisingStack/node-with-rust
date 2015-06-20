const RUNS = 100;
const FIB_SEQ = 40;
var lib = require('../lib');


// returns the nanoseconds needed for the run
function run (lang) {
  var i = RUNS;
  var timeTaken = 0;
  var startTime;
  var diff;

  for (; i !== 0; i--) {
    startTime = process.hrtime();
    lib.fibonacci[lang](FIB_SEQ);
    diff = process.hrtime(startTime);

    timeTaken = timeTaken + diff[0] * 1e9 + diff[1];
  }

  return timeTaken;
}

console.log('c   ', run('c'));
console.log('js  ', run('js'));
console.log('rust', run('rust'));
