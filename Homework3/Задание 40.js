var button = document.querySelector('but1');
but1.addEventListener('click', summary);
function summary(){
    var form = document.getElementById('form');
    for (var i = 0, sum = 0; i < form.elements.length; i++){
        var sum = sum + +form.elements[i].value;
    }
    alert('Сумма: ' + sum);
}