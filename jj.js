function JS(){
	var x = document.getElementsByTagName("li");
	x[0].innerHTML="HTML5";
	x[1].innerHTML="CSS3";
	var node = document.createElement("LI");
	var textnode = document.createTextNode("MySQL");
	node.appendChild(textnode);
	document.getElementById("List").appendChild(node);
}
function change(){
	var x = document.getElementsByTagName("h2");
	x[0].innerHTML="Web Programming-4102029029";
}
function JQuery(){
	$(document).ready(function() { 
	$('li').mouseenter(function() { 
		$(this).css({"color" :"red" , "fontSize": "20"});
		})
		.mouseleave(function() { 
		$(this).css({"color" :"black" , "fontSize": "14"});
		}); 
	});
}