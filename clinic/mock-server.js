const http = require('http')
const url = require("url");

const serviceCall = function(time = 1000) {
    return new Promise(res => setTimeout(res, time))
}

const server = http.createServer(async function (req, res) {
    const queryObject = url.parse(req.url,true).query;
    await serviceCall(queryObject.time);
    res.end('Done');
})

server.listen(3001);
