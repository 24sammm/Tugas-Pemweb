const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif'
};

const server = http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let namafile = path.join(__dirname, q.pathname === "/" ? "index.html" : q.pathname);
    namafile = path.normalize(namafile);

    console.log("File yang diminta:", namafile);

    fs.readFile(namafile, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            return res.end("404 - File tidak ditemukan");
        }

        let ext = path.extname(namafile).toLowerCase();
        let contentType = mimeTypes[ext] || 'application/octet-stream';

        res.statusCode = 200;
        res.setHeader('Content-Type', contentType);
        res.write(data);
        return res.end();
    });
});

server.listen(3000, () => {
    console.log("Server berjalan di http://localhost:3000");
});
