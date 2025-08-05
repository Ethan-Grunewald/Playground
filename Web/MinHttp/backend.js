let http = require('http');

http.createServer(function(req, res) {
	console.log('METHOD: ' + req.method);
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
	res.setHeader('Access-Control-Allow-Headers', '*');

	if (req.method === 'OPTIONS') {
		res.writeHead(204);
		res.end();
		return;
	}

	res.writeHead(200);
	res.end('Hello from the backend!');
}).listen(8082, 'localhost');
