var i = 0;
var prome = 0;
var ri = 0;
function rellenar(){
	var producto = document.getElementById("select").value;

	if (producto=="Arroz") {
		precio=3.4;
		cantidadstock=20;
	}
	if (producto=="Papa") {
		precio=1.2;
		cantidadstock=50;
	}
	if (producto=="Azucar") {
		precio=3.4;
		cantidadstock=30;
	}
	if (producto=="Tomate") {
		precio=3.4;
		cantidadstock=15;
	}
	if (producto=="Limon") {
		precio=3.4;
		cantidadstock=20;
	}

	document.getElementById("nombreP").value=producto;
	document.getElementById("precioP").value=precio;
	document.getElementById("cantidadStock").value=cantidadstock;
	var Producto = producto;
	var Precio = precio;
	var Cantidadstock = cantidadstock;
	//agregar(Producto,Precio,Cantidadstock);
}

function agregar(Producto,Precio,Cantidadstock){
	i++;
	var tabla=document.getElementById("tabla");
	var nombreP = document.getElementById("nombreP").value;
	var precioP = document.getElementById("precioP").value;
	var stock = document.getElementById("cantidadStock").value;
	var cantidad = document.getElementById("cantidad").value;

	tabla.innerHTML=tabla.innerHTML+"<tr><td>"+i+"</td><td>"+nombreP+"</td><td>"+precioP+"</td><td>"+stock+"</td><td>"+cantidad+"</td><td>"+cantidad*precio+"</td><td><button onclick='borrar(this)'>borrar</button></td>";

	var sacarL = document.getElementById("select");
    sacarL.remove(sacarL.selectedIndex);
	//var text="xd";
	limpiar();
	
}
function borrar(x){
	var f=x.parentNode.parentNode;
	//var tabla=document.getElementById("tabla");
    var tabla=f.parentNode;
    tabla.removeChild(f);
	//document.getElementById("tabla").deleteRow(f);
}
function limpiar(){
	document.getElementById("nombreP").value="";
	document.getElementById("precioP").value="";
	document.getElementById("cantidadStock").value="";
	document.getElementById("cantidad").value="";
}

