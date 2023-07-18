var zeki = "Welcome to the poging website";

alert(zeki + " " + "Grabe ang pogi ko talaga");

function sayPogi(){
	alert("Gusto mo ba maging pogi?");
}
function tips(){
	alert("Ito and website na para sayo")
}


function howtobeHandsome(tips1, tips2){
	alert(tips1 + tips2);
}

document.write("<center>Ang pogi ng gumawa ng website na ito.</center>");


function changePicture(){
document.getElementById("cats").src = "cutecat.png";
document.getElementById("cat1").innerHTML = "Muning";
}

function backPicture(){
document.getElementById("cats").src = "cat.png";
document.getElementById("cat1").innerHTML = "Kuting";
}
function logIn(){
	document.getElementbyId("cats").src = "cat.png";
}

document.getElementbyId("surName").style.color = "green";

function clickEvent(obj){
	obj.innerHTML = "Pogi Ko";
	obj.style.color = "blue";
}

function hoverEvent(obj){
	obj.innerHTML = "Mas gwapo";
	obj.style.color = "blue";
}

function mouseOut(obj){
	obj.innerHTML = "Ang pogi ko";
	obj.style.color = "blue";
}

function mouseDown(obj){
	obj.innerHTML = "NIKOLE";
	obj.style.color = "blue";
}

function mouseUp(obj){
	obj.innerHTML = "Nikole";
	obj.style.color = "blue";
	
}
function changeEvent(obj){
	obj.value = obj.value.toUpperCase();
}
function crushEvent(obj){
	obj.value = obj.value.innerHTML = "Zeki only";
}

function onLoad(obj){
	alert("Ang tunay na gwapo marunong makahintay");
		
}

