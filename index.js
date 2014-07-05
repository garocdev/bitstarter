var express = require('express')
var app = express();
var fs = require('fs')

fs.readFile('index.html',function (err, data) {
 if (err) throw err;
console.log("read file\n");
console.log(data);
});

var buffer = new Buffer();
buffer = fs.readFile('index.html')


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
//  response.send(buffer.toString("utf-8"))
  response.send("This is another test")
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
