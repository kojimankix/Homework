var arr=[3,8,7,3];
var ul=document.querySelector('ul');
for (var i=0; i<arr.length; i++){
    var li=document.createElement('li');
    li.innerHTML=arr[i];
    ul.appendChild(li);
}