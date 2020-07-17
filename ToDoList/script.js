var p = document.getElementById("list") ;
var length = 1 ;
function add_list() {
    var a = document.getElementById ("field").value;
    if (!a){
        alert ("You have not entered anything!");
    }
    else{
        if (length<=7){
    var newlist = document.createElement("div") ;
    newlist.className = "list1"
    newlist.name = "newlist" ;
    var div = document.createElement('div') ;
    if (a.length < 18){
    div.innerHTML = length + ") " + a;
    }
    else{
        alert ("Too many characters!");
    }
    div.appendChild(newlist);
    p.appendChild(div);
    p.style.display = "block";
    length++ ;
    }
    else{
        alert ("No place!")
    }
    document.getElementById("field").value = "";
}
}

function delete_list(){
    document.getElementById("list").remove();
    length = 1;
}
