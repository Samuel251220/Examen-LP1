
function home(){
	document.getElementById('iframe').src="../vista/iframe.html";
	var home = document.getElementById('home');
	var sales = document.getElementById('sales');

	home.style.background="rgba(0,0,0,0.2)";
	sales.style.background="transparent";
}
function sales(){
	document.getElementById('iframe').src="../vista/iframe2.html";
	var home = document.getElementById('home');
	var sales = document.getElementById('sales');

	sales.style.background="rgba(0,0,0,0.2)";
	home.syle.background="transparent";
}