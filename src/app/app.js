const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const MongoClient = require('mongodb').MongoClient



app.use(bodyparser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/shirts', (req, res) => {
    req.header(headers)
    MongoClient.connect('mongodb://0.0.0.0:27017', (err, client) => {
        if (err) throw err
        const db = client.db('shirt-shop')
        db.collection('Shirts').find().toArray((err, result) => {
            if (err) throw err
            res.send(result);
            console.log(result)
        })
    })
});

const port = process.env.port || 3000;
app.listen(port, () => {`listening on ${port}`});
