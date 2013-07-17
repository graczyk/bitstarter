var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var file = fs.readFileSync(index.html);
	buf = new Buffer();
	buf.write(file);
	response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
