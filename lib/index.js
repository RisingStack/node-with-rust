var ffi = require('ffi');
var path = require('path');

var fibSeq = 45;

var lib = ffi.Library(path.join(__dirname, '../target/release/libembed'), {
  process: [ 'int', ['int', 'int']  ],
  fibonacci: ['int', ['int']]
});

function fibonacci (n) {
  if(n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

var startRust = process.hrtime();
var fibRust =  lib.fibonacci(fibSeq);
var endRust = process.hrtime(startRust);

var startJs = process.hrtime();
var fibJs =  fibonacci(fibSeq);
var endJs = process.hrtime(startJs);

console.log('rust', fibRust, endRust);
console.log('js', fibJs, endJs);
