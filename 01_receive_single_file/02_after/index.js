const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

app.use(express.static('public'));
app.use(fileUpload());

const port = 3000;

app.post('/api/single-file', (req, res) => {
    const f = req.files.myfile;
    res.set('Content-Type', 'text/html');
    f.mv('./uploads/' + f.name);
    res.send(`
        <table>
            <tr><td>Name</td><td>${f.name}</td></tr>
            <tr><td>Size</td><td>${f.size}</td></tr>
            <tr><td>MIME type</td><td>${f.mimetype}</td></tr>
        </table>
    `);
});

app.listen(port, () =>
    console.log(`Server is running and listening on port ${port}`)
);
