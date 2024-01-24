var http = require('http');

var server = http.createServer(function (req, res) {
    
    //change the content according to the URL
    if(req.method === 'POST' && req.url === '/'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        //read data from the form and save it in a variable
        var data = '';
        req.on('data', function(chunk){
            data += chunk;
        });

        req.on('end', function(){
            //split data from username=kukldee&password=wefwed
            //and save it in an array
            var dataArray = data.split('&');
            console.log(dataArray);
            //split username=kukldee
            var username = dataArray[0].split('=')[1];
            var password = dataArray[1].split('=')[1];
            setTimeout(function(){
            res.write(`{"username": "${username}", "password": "${password}"}`);
            res.end();
            },1000);
        });
    }
    else if (req.url === '/') {
        //form to enter username and password
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<form method='post'>");
        res.write("<label>Username</label>");
        res.write("<input type='text' name='username' />");
        res.write("<label>Password</label>");
        res.write("<input type='password' name='password' />");
        res.write("<input type='submit' value='Login' />");
        res.write("</form>");
    } else if (req.url === '/login') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write('{"path": "/login"}');
        res.end();
    }
    else if (req.url === '/signup') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write('{"path": "/signup"}');
        res.end();
    } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write('{"path": "/404"}');
        res.end();
    }
});


server.listen(3000, function () {
    console.log('Server is running on port 3000');
});