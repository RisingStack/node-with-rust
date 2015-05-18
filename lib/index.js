var ffi = require('ffi');
var path = require('path');

var lib = ffi.Library(path.join(__dirname, '../target/release/libembed'), {
  process: [ 'int', ['int', 'int']  ]
});

var a = lib.process(2, 3);
