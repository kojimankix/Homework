let elem1 = document.getElementById('elem1');
for(let i = 0;i<elem1.children.length;i++){
    elem1.children[i].innerHTML += '!';
}