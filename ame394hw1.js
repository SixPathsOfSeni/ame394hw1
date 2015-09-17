/* Seni Adeyemi
    AME 394 HW 1
    Fall 2015

    Write a simple web server with a single route /getFibonacci.This route should take in one argument n and return the first n Fibonacci numbers.

*/

var http = require('http');
var url = require('url');
var querystring = require('querystring');

// Calculate Fibonacci numbers recursively, store in array, and return n Fibonacci numbers
function fibbSeq(n){
   if(n == 2){
        return [0, 1];
    }
    else if(n == 1){
        return [0];
    }

    else{
        var x = fibbSeq(n-1);
        x[x.length] = x[x.length - 1] + x[x.length - 2];
        return x;
    }
}

function callback(req, res) {
        var query = url.parse(req.url).query;
        var route = req.url.split("?")[0];
        var params = querystring.parse(query);

        console.log(req.url);
        console.log(route);
        console.log(params);


    if(route === "/getFibonacci"){ // Define route /getFibonacci
        var n = parseFloat(params.n);
        res.writeHead(200, {'Content-Type': 'text/plain'}); // send response header
        res.end(fibbSeq(n).toString()); // send response body

    }
}

var server = http.createServer(callback) // create an http server
server.listen(9115, "127.0.0.1"); // make server listen to port 1337
console.log('Server running at http://127.0.0.1:9115/');