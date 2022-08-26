### College Management
 
#### Tech Stacks:
- Front End (React JS)
- Back End (Node JS)
- Database (MongoDB)
- Middleware (Express JS)
- Programming Languate (Javascript)
 
#### MongoDB: Getting Started
- Working with MongoDB Server - Local
- Working with MongoDB Server - Cloud (Atlas)
 
#### MongoDB: Advanced
- Connecting to MongoDB using Tool (Studio 3T)
- Connecting to MongoDB using Node JS (Server Code)
 
#### Working with MongoDB Server - CLI
- Installed MongoDB on the laptop
- Started the MongoDB Server in local using the comment
```mongod --dbpath "c:/data/db```
- Started the MongoDB CLI in Command Prompt to interact with the server
 
#### Working with MongoDB Server - Client Tool
- Installed MongoDB on the laptop
- Started the MongoDB Server in local using the comment
```mongod --dbpath "c:/data/db```
- Installed Studio 3T tool on the laptop
- Connected to the local database using localhost:27017 to interact with the server
 
#### Working with MongoDB Server - Node JS
- Installed MongoDB on the laptop
- Started the MongoDB Server in local using the comment
```mongod --dbpath "c:/data/db```
- Setup the Node JS Project
- Installed npm module - mongodb
- Connected to the local database using the server programming to interct with the DB Server
 
#### What Did I Learn?
- Learned on creating the database
- Learned on creating the collection
- Learned basic CRUD commands
   - Create Opeartion
   - Read Operation
   - Update Operation
   - Delete Operation

#### Working with MongoDB Server - Node JS with Express 
- Installed MongoDB on the laptop
- Started the MongoDB Server in local using the comment
```mongod --dbpath "c:/data/db```
- Setup the Node JS Project
- Installed middleware for different API routing - $ npm install express
- Learned on http protocol
- Learned different types of HTTP methods 
   - Post Method
   - Get Method
   - Put Method
   - Delete Method

#### Working with postman API tool
-  Installed Postman Tool on the laptop
- Learned how to hit the API URL for different  methods with postman request
- Learned different types of status code
    - 200 Success
    - 400 Bad Request	
    - 401 Unauthorized
    - 403 Forbidden	
    - 404 Not Found
    - 423 Locked
    - 429 Too Many Requests
    - 500 Internal Server Error
    - 503 Service Unavailable
#### Naming conventions
- File name should be camelCase
- Variable declaration should be camelCase
- Environment name should be UPPERCASE
- Folder name should be lowercase
- Project name should be kebab-case


####  Working with Callback,Promises,Async/Await - functions
- What is Callback function?
   - A callback is a function passed as an argument to another function.
   - As these take time to finish, we can neither proceed to next line because it might throw an error saying unavailable nor we can pause our program.
   - A callback function can run one after another function has finished.

- What is the problem with Callback function?
   - The problem with callback is that all functions are written in nested one within another, this resulting any error happens in middle of code often its  hard to read and debug.

- What is Async/Await
   -A function always returns a promise. Other values are wrapped in a resolved promise automatically.
   - Await function is only valid in async function which makes the program wait until the Promise resolves.
- Why Async/Await?
   - It allows the program to wait for any Network calls to be completed before moving to next line.

- What is preferrable?callback vs Async/Await
    - Async/Await, as the codes are easy to read and debug.
   

####  Working with Dynamicrequest
- Made the method - POST API
- Made the data dynamic in nature 
- Used bodyParser object exposes various factories to create middlewares.
- All middlewares will use the req.body
- Property with the parsed body when the Content-Type request header matches the type option, or an empty object ({}) 
- In that case in postman we use Json present in body 
- Select body raw json

- Using Postman to change the insertion different records
- Checking in the Mongodb/studio3T whether record is found
- And its created a middleware in server

- Learned abt the destructuring objects in javascripts
   - What is destructuring?
   - Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable. Destructuring allows us to write clean and readable code.
   - To avoid more using req.body we are going to destructuring object 

