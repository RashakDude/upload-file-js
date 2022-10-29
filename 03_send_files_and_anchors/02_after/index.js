const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/api/download', (_req, res) => {
    res.download('./public/kittens_1.jpg', 'foo.jpg');
});

app.get('/api/sendfile', (_req, res) => {
    res.sendFile(path.join(__dirname, 'public/kittens_1.jpg'));
});

app.get('/api/attachment', (_req, res) => {
    res.attachment('./public/kittens_1.jpg');
    res.end();
});

const port = 3000;

app.listen(port, () =>
    console.log(`Server is running and listening on port ${port}`)
);
