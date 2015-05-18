# node-with-rust

This project tries to showcase how you can use Rust from Node.

### Important things to notice:

#### in `package.json`

```
"install": "cargo build --release"

// this will make rust build when the packages are installed
```

#### in `lib/index.js`

Proper types: `process: [ 'int', ['int', 'int']  ]`

#### in `src/embed.rs`

Proper types again: `pub extern fn process(a: i32, b: i32) -> i32 {`
