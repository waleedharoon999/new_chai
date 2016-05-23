var http = require('http');
var fs = require("fs");

http.createServer(function(request, response) {
    var imgExt=request.url.split('.').pop();
    if(request.url.indexOf('.'+imgExt) != -1)
    {
        fs.readFile('.'+request.url, function (err, data) {
            if(err)
            {
                response.writeHead(404);
                response.write("Not Found"+ request.url);
            }
            else
            {
                response.writeHead(200, {'Content-Type': 'text/'+imgExt});
                response.write(data);
            }

            response.end();
        });
    }
    else
    {
        response.writeHead(404);
        response.write("Not Found"+request.url);
        response.end();
    }
}).listen(8000);


/**
 * Created by aalli on 5/19/16.
 */
