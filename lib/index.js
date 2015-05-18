var ffi = require('ffi');
var path = require('path');

var lib = ffi.Library(path.join(__dirname, '../target/release/libembed'), {
  process: [ 'double', ['double', 'double']  ]
});

var a = lib.process(2, 3);

console.log(a);
