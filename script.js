var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var li = document.getElementsByTagName("li");
var ul = document.querySelector("ul");
var buttonDelete = document.getElementsByClassName("delete");

function createListItem() {
	var listItem = document.createElement("li");
	listItem.appendChild(document.createTextNode(input.value));
	ul.appendChild(listItem)

	var dltBtn = document.createElement("button");
	dltBtn.appendChild(document.createTextNode("Delete"));
	dltBtn.onclick = removeParent;
	listItem.appendChild(dltBtn);

	input.value = "";
}

function removeParent(event) {
	var target = event.target;
	target.parentNode.remove();
}

for(let i = 0; i < buttonDelete.length; i++) {
	buttonDelete[i].addEventListener("click", removeParent)
}

function inputLength() {
	return input.value.length;
}

function addItemAfterClick() {
	if(inputLength() > 0) createListItem();
}

function addItemAfterKeypress(event) {
	if(inputLength() > 0 && event.keyCode === 13) createListItem();
}

ul.onclick = function(event) {
	var target = event.target;
	target.classList.toggle("done");
}

button.addEventListener("click", addItemAfterClick);
input.addEventListener("keypress", addItemAfterKeypress);