const express = require('express')
const { result } = require('lodash')
const app = express()
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
    const insertResult = await studentCollection.insertOne({ name: "suppi", age: 22, dept: "CSE" });
    res.send(insertResult)
})
app.get('/list', (req, res) => {
    client.connect();
    const studentCollection = client.db("college").collection("students");
    const findResult = studentCollection.find({ dept: { $eq: "CSE" } });
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