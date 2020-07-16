function arrayfill(a, b) {
    let arr = [];
    for(let i = 0; i < b; i++) {
      arr.push(a);
    }
    return arr;
  }
  console.log(arrayfill('x', 5));