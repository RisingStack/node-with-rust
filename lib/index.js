var ffi = require('ffi');
var path = require('path');

var fibSeq = 40;

var lib = ffi.Library(path.join(__dirname, '../target/release/libembed'), {
  process: [ 'int', ['int', 'int']  ],
  fibonacci: ['int', ['int']]
});

var cLib = ffi.Library(path.join(__dirname, '../target/fibonacci'), {
  fib: ['int', ['int']]
});

function fibonacci (n) {
  if(n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

module.exports.fibonacci = {
  js: fibonacci,
  rust: lib.fibonacci,
  c: cLib.fib
};
