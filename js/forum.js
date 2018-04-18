"use strict";

function createAvatar(){
	let avatar = document.createElement("div");
	avatar.className = "col-sm-2";
	let avatarImage = document.createElement("img");
	avatarImage.style.height = "100px";
	avatarImage.style.width = "100px";
	avatarImage.src = "img/mouse2.jpg";
	avatarImage.className = "rounded-circle d-none d-md-block";
	avatar.appendChild(avatarImage);

	return avatar;
}

function createComment(commentInput, name){
	let commentDiv = document.createElement("div");
	commentDiv.className = "col-sm-10";
	commentDiv.style.margin = "1rem 0";
	let commentator = document.createElement("h5");
	commentator.innerHTML = name;
	let commentParagraph = document.createElement("p");
	commentParagraph.innerHTML = commentInput;
	let date = document.createElement("small");
	let d = new Date();
	let currentDate = "-- " + d.getHours() + 	":" + d.getMinutes() + " " + d.getDate().toString() + "." + (d.getMonth()+1) + "." + d.getFullYear().toString();
	let dateText = document.createTextNode( currentDate);
	date.appendChild(dateText);

	commentDiv.appendChild(commentator);
	commentDiv.appendChild(commentParagraph);
	commentDiv.appendChild(date);


	return commentDiv;
}

function addComment(){
	let commentInput = document.getElementById("forum-input").value;
	if (commentInput) {
		let section = document.createElement("section");
		let row = document.createElement("div");
		row.className = "row";
		let avatar = createAvatar();
		let comment = createComment(commentInput, "Martin Z.");
		

		row.appendChild(avatar);
		row.appendChild(comment);
		section.appendChild(row);
		document.getElementById("forum").insertBefore(row, document.getElementById("forum").firstChild);
	} else {
		document.getElementById("forum-input").placeholder = "Bitte erst einen Kommentar schreiben."
	}
}

function setup(){
	document.getElementById("forum-input-button").addEventListener("click", addComment);
}

window.addEventListener("load", setup);