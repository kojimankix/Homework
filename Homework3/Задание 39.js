let ul = document.getElementById("ul");

ul.addEventListener("click", function func(event) {
	let li = event.target.closest("li");
	

	if (li) {
		li.innerHTML +="!"; 
	}
});


let but = document.getElementsByTagName("button")[0];

but.addEventListener("click", function() {

let liElem = document.createElement("li");
liElem.innerHTML = "пункт";
ul.appendChild(liElem);
});