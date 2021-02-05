const http = require('http');
const url = require('url');
const {getDate} = require('./modules/utils');
const port = process.env.PORT || 12345;

const server = http.createServer((req, res)=> {
    res.writeHead(200, {'Content-type': 'text/plain'});

    const query = url.parse(req.url,true).query;
    const urls = url.parse(req.url, true).pathname.split('/');
    const action = urls[urls.length-2]
    if(action === 'getDate'){
        if(query.name) {
            res.write(`Hello ${query.name}, Here is the server's current date and time: ${getDate()}`);
        } else {
            res.write('invalid url');
        }
        
    } else {
        res.write("Wrong url");
    }
    res.end();
})

server.listen(port, ()=> {
    console.log(`listening at port ${12345}`);
});
