
#[no_mangle]
pub extern fn process(a: i32, b: i32) -> i32 {
    return a * b;
}

#[no_mangle]
pub extern fn fibonacci(x: i32) -> i32 {
  if x <= 2 {
    return 1;
  } else {
    return fibonacci(x - 1) + fibonacci(x - 2);
  }
}
