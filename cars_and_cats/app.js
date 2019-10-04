const http = require('http');
const fs = require('fs');
const server = http.createServer(function (request, response) {
    console.log('client request URL: ', request.url);

    // this is how we do routing:
    if (request.url === "/cars") {
        fs.readFile('views/index.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    } else if (request.url === '/images/car1.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car1.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/car2.jpg') {
        fs.readFile('./images/car2.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/car3.jpg') {
        fs.readFile('./images/car3.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/cats") {
        fs.readFile('views/cats.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/cat1.jpg') {
        fs.readFile('images/cat1.jpg', function (errors, contents) {
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/cat2.jpg') {
        fs.readFile('images/cat2.jpg', function (errors, contents) {
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/cat3.jpg') {
        fs.readFile('images/cat3.jpg', function (errors, contents) {
            response.write(contents);
            response.end();
        });

    }

    if (request.url === "/cars/new") {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' }); 
            response.write(contents); 
            response.end(); 
        });
    }
    else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
         response.writeHead(200, {'Content-type': 'text/css'});
         response.write(contents);
         response.end();
        });
      }    
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('page not found');

    }
});
// tell your server which port to run on
server.listen(7070);
console.log('Server running at port 7070');