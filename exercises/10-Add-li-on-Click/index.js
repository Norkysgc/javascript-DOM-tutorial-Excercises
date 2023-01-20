let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var ul = document.getElementById("myList");
  	var li = document.createElement("li");
 	li.appendChild(document.createTextNode("Fourth element"));
  	li.setAttribute("id", "element4"); 
 	ul.appendChild(li);
});
