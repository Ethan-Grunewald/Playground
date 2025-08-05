var xhttp = new XMLHttpRequest();

console.log('Script loaded');

xhttp.open("GET", "http://localhost:8082");

xhttp.onreadystatechange = () => {
	console.log("STATE CHANGE");
	if (xhttp.readyState == XMLHttpRequest.DONE) {
		console.log(xhttp.response);
		var outputDiv = document.querySelector('#output');
		outputDiv.innerHTML = xhttp.response;
	}
}

xhttp.send();

