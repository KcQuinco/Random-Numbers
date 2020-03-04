function randomnum () {
	var x = Math.random() * 100;
	x = Math.round(x);
	var y = x.toString ();
	document.getElementById("num").innerHTML += " " +y;

	if (x%2 == 0) {
		var product = parseInt(document.getElementById("p").innerHTML); 
		product = product * x;
		document.getElementById("e").innerHTML += " " + y;
		document.getElementById("p").innerHTML = product;
	}
	else {
		var sum = parseInt(document.getElementById("s").innerHTML); 
		sum = sum + x;
		document.getElementById("o").innerHTML += " " + y;
		document.getElementById("s").innerHTML = +sum;
	}
}

