let arr = [1,2,3,4,5];

elem(arr);

function elem(arr){
    console.log("Элемент массива - "+arr.shift());

    if (arr.length != 0){
    elem(arr);
    }
}