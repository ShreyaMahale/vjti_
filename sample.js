var express = require('express');
console.log('hey you!')

var server = new express();

server.listen(8000,function(){console.log('Listening on localhost:8000')})