function getDivisors(x) {    
    function check(x) {
    let newArr = [];
    for (let i = 1; i <= x; i++) {
        if (x % i ==0 ) {
        newArr.push(i);
        }
    }
    return newArr;
    }
    console.log(check(x));
}
getDivisors(76);