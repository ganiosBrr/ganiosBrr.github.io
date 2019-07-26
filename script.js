var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");
var btns = document.getElementsByClassName("btn");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(btn);
	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.onclick = function(event) {
	var target = event.target;
	target.classList.add("done");
	// if(target.tagName !== "LI") return;
	// for(var i = 0; i < items.length; i++) {
	// 	items[i].classList.remove("active");
	// }
	// target.classList.add("active");
}

for(var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", deleteBtn);
}

function deleteBtn(event) {
	event.target.parentNode.remove();
}
