function helloConsole() {
	console.log("Hello, World!");
}

function helloAlert() {
  alert("Hello, World!");
}

function helloBrowser() {
  var p = document.getElementById("text") ;
	p.innerHTML = "Hello, World!" ;
}

function helloStranger() {
  var person = prompt("Please Enter Your Name")
  if(person != null) {
    alert("Hello " + person + "!")
  }
}
