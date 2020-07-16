let num = 56;
function Sum(num) {
    if (num == 0) return 0;
    return (num - 1) % 9 + 1;
}
console.log(Sum(num));