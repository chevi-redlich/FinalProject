const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017"
const client = new MongoClient(url,{family:4});

const dbName='Recipes';

var data = {
    async get(collection){
         await client.connect();
         db = client.db(dbName);
         const myCollection = db.collection(collection);
         const findResult = await myCollection.find({}).toArray();
         return findResult;
     },
     async getById(collection,id){
         await client.connect();
         db = client.db(dbName);
         const myCollection = db.collection(collection);
         const findResult = await myCollection.find({"id":id}).toArray();
         console.log(findResult);
         return findResult;
     },
     async post(collection,object){
         await client.connect();
         db = client.db(dbName);
         const myCollection = db.collection(collection);
         const insertResult = await myCollection.insertMany([object]);
         return insertResult;
     },
     async delete(collection,id){
         await client.connect();
         db = client.db(dbName);
         const myCollection = db.collection(collection);
         const insertResult = await myCollection.deleteMany({"id":id});
         return insertResult;
     },
     async put(collection,object){
         await client.connect();
         db = client.db(dbName);
         const myCollection = db.collection(collection);
         const findResult = await myCollection.find({"id":object.id});
         if(findResult==null){
             return "error";
         }
         const insertResult = await myCollection.updateOne({"id":object.id},{$set:object});
         return insertResult;
     }
 
 }
 module.exports = data;