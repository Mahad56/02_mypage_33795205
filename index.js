const http = require("http");
const port = 8000;

http.createServer(function(req, res) {
    console.log(req); 

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>My Page</title>
            </head>
            <body>
                <h1>Hello, I'm Mahad!</h1>
                <h2>About Me</h2>
                <p>I am a Computer Science student at Goldsmiths.</p>
            </body>
        </html>
    `);
}).listen(port, function() {
    console.log(`Node server is running on port ${port}...`);
});
