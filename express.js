const express = require('express')
const bodyParser = require('body-parser');
const { result } = require('lodash')
const app = express()
app.use(bodyParser.json());
const port = 3000

const { MongoClient } = require('mongodb');
// Database Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


app.get('/', (req, res) => {
    res.send('Welcome to student management!')
})



app.post('/create', async (req, res) => {
    await client.connect();
    const studentCollection = client.db("college").collection("students");
    const { firstName, age, dept } = req.body
    const insertResult = await studentCollection.insertOne({ firstName: firstName, age: age, dept: dept });
    res.send(insertResult)
})

app.get('/list', async (req, res) => {
    await client.connect();
    const studentCollection = client.db("college").collection("students");
    console.log(req.body);
    const findResult = await studentCollection.find({ dept: { $eq: req.body.dept } });
    res.send(findResult)
})

app.delete('/delete', async (req, res) => {
    await client.connect();
    const studentCollection = client.db("college").collection("students");
    const deleteResult = await studentCollection.deleteOne({ name: "suppi", age: 22, dept: "CSE" });
    res.send(deleteResult)
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})