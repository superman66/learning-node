const fs = require('fs');
const server = requrie('http').createServer();
server.on('request', (req, res) => {
    fs.readFile('../../data/big.file', (err, data) => {
        if(err) throw err;

        res.end(data);
    });
});

server.listen(8000);