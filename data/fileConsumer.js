const fs = require('fs');
const server = require('http').createServer();

server.on('request', async (req, res) => {
    res.writeHead(200);
    if (req.url === '/stream') {
        const data = fs.createReadStream('./data.file');
        console.log('Got Data as stream');
        await new Promise(res => setTimeout(res, 5000));
        data.pipe(res);
        return;
    }
    fs.readFile('./data.file', async (err, data) => {
        if (err) throw err;
        console.log('Got Data: ', data.length);
        await new Promise(res => setTimeout(res, 5000));
        res.end(data);
    });
});

server.listen(8000);
