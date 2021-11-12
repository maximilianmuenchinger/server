"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endabgabe = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Endabgabe;
(function (Endabgabe) {
    let orders;
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let databaseUrl = "mongodb+srv://User1:F8bHZC2XgkJ9Pekl@maxscluster.juvc9.mongodb.net/<dbname>?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabse(databaseUrl);
    function startServer(_port) {
        console.log("Starting server");
        let server = Http.createServer();
        server.addListener("request", senden);
        
        server.listen(_port);}
    










const {MongoClient} = require ("mongodb");

//Senden
async function senden() {

    var names = "Max";
    
        const uri = "mongodb+srv://User1:F8bHZC2XgkJ9Pekl@maxscluster.juvc9.mongodb.net/<dbname>?retryWrites=true&w=majority"
    
    
        const client = new MongoClient(uri, {useUnifiedTopology: true});
        
    
        try{
        await client.connect();
       
       await createListing(client,{
    
    senden: "Test"})
    
    //await findOneListingsByName(client);
    
   // await deleteListingsByName(client);
    
    
        }catch(e){
            console.error(e);
        
        }finally{
            await client.close();
        }
    
    }


    async function createListing(client, newListing){
        const result =  await  client.db("Test2").collection("Test2").insertOne(newListing);
       console.log(`id of new listing: ${result.insertedId}`)
       console.log("testerfüllt")
       
       }

    })(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));