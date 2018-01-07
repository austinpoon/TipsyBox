var express = require('express');
var http = require('http');
var path = require('path');

var api = require('./server/routes/api');

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

var port = process.env.PORT || '3001';
app.set('port', port);

var server = http.createServer(app);
server.listen(port, () => console.log('Running'));
