function p() {
    let elements = document.getElementsByClassName('zzz');
    for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = i+1;
    }
}