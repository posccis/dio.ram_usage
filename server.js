const http = require('http');
const host = "http://localhost";
const port = "3000";
const stats = require('./RamUsage');


http.createServer((req, res) => {
    let url = req.url;
    if(url === '/stats'){
        res.end(JSON.stringify(stats, null, 2));
    }
    res.end('<h1>Server is working</h1>');
}).listen(port, () => console.log(`Server is running in ${host}:${port}`));