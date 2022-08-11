const { MongoClient } = require('mongodb');
// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
// const dbName = 'students';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const studentCollection = client.db("college").collection("students");
    // const parentCollection = client.db("college").collection("parents");

    await studentCollection.insertOne({ name: "sindhu", age: 27, marks: 300 });
    const insertResult = await studentCollection.insertMany([{ name: "suppi", age: 22, dept: "CSE" }, { name: "sindhu", age: 22, dept: "ECE" }, { name: "sin", age: 22, dept: "CSE" }]);
    console.log('Inserted documents =>', insertResult);
    const findResult = await studentCollection.find({ dept: { $eq: "CSE" } })
    console.log('Found documents =>', findResult);
    // const updateResult = await studentCollection.updateOne({ name: "sin", age: 22, dept: "CSE" }, { $set: { dept: "CIVIL" } });
    // console.log('Updated documents =>', updateResult);
    const deleteResult = await studentCollection.deleteOne({ name: "suppi", age: 22, dept: "CSE" });
    // console.log('Deleted documents =>', deleteResult);
    // studentCollection.find({ marks: { $gt: 300 } })




    // await parentCollection.insertOne({ name: "padma", age: 30, occupation: "housewife" });
    // const result = await studentCollection.find({})
    // console.log(result);
    // const collection = db.collection('documents');
    // the following code examples can be pasted here...

    return 'done';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
