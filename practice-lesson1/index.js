const http = require('http');
const fs = require('fs');
const url = require('url');

const app = http.createServer(handleRequest)
let port = 8080;


function handleRequest(request, response){

    function renderText(statusCode = 200, content){
        response.writeHead(statusCode)
        response.write(content)
        response.end()
    }

    function renderTemplate(path, statusCode = 200, params = {}){
        fs.readFile(`./templates/${path}`, "utf8", (err, data) => {
            response.writeHead(statusCode, {'Content-type': "text/html"});
            if(!err){
                Object.keys(params).forEach(name => {
                    data = data.replace(`{{${name}}}`, params[name])
                })
            } 
            response.write(data)
            response.end()
        })
    }

    const info = url.parse(request.url, true);

    if(info.pathname === "/"){
        renderTemplate("index.html", 200, info.query)
    } else if(request.url === "/dogs"){
        renderTemplate("dogs.html", 200)
    } else {
        renderText(404, "Sorry that path doesn't exist")
    }  
}

app.listen(port)