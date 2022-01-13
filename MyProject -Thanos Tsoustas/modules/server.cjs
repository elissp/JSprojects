const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 8080;




app.get('/',((req, res) => {
    res.status(200).sendFile(path.join(__dirname, '/index.html'))
}))
app.get('/styles.css',((req, res) => {
    res.status(200).sendFile(path.join(__dirname, '/styles.css'))
}))
app.get('/dist/bundle.js',((req, res) => {
    res.status(200).sendFile(path.join(__dirname, '/dist/bundle.js'))
}))




app.listen(port, () => console.log(`http://localhost:${port}`));
