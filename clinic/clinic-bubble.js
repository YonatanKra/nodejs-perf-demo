const http = require('http')
const fetch = require('node-fetch');

const serviceCall = function(time = 1000) {
    return fetch(`http://localhost:3001/time=${time}`);
}

const server = http.createServer(async function (req, res) {
    // Promise.all([
    //     serviceCall(500),
    //     serviceCall(1500),
    //     serviceCall(2500),
    // ]);
    await serviceCall(500);
    await serviceCall(1500);
    await serviceCall(2500);
    res.end('Done');
})

server.listen(3000)
