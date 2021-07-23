const fs = require("fs");
const http = require("http");
const path = require("path");

http.createServer((req, res) => {
    const {url, method} = req;
    let filename = "404.html"
    
    if(method == "GET"){
        if (url == "/"){
            filename = "index.html"
        } else if (url == "/about") {
            filename = "about.html"
        } 
    }

    const readStream = fs.createReadStream(
        path.join(process.cwd(), "/public/" + filename)
    );

    res.statusCode = filename.startsWith("not") ? 404 : 200;
    res.setHeader("Content-Type", "text/html");
    readStream.pipe(res);
})    
.listen(8080, function(){
    console.log("Server running!");
});