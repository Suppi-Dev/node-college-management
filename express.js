const express = require('express')
const { result } = require('lodash')
const app = express()
const port = 3000

const { MongoClient } = require('mongodb');
// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


app.get('/', (req, res) => {
    res.send('Welcome to student management!')
})



app.post('/create', async (req, res) => {
    await client.connect();
    const studentCollection = client.db("college").collection("students");
    const insertResult = await studentCollection.insertMany([{ name: "suppi", age: 22, dept: "CSE" }, { name: "sindhu", age: 22, dept: "ECE" }, { name: "sin", age: 22, dept: "CSE" }]);
    res.send(insertResult)
})
app.post('/list', async (req, res) => {
    await client.connect();
    const studentCollection = client.db("college").collection("students");
    const findResult = await studentCollection.find({ dept: { $eq: "CSE" } });
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