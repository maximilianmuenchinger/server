const {MongoClient} = require ("mongodb");


async function main() {

var names = "Max";

    const uri = "mongodb+srv://User1:F8bHZC2XgkJ9Pekl@maxscluster.juvc9.mongodb.net/<dbname>?retryWrites=true&w=majority"


    const client = new MongoClient(uri, {useUnifiedTopology: true});
    

    try{
    await client.connect();
   // await listDatabases(client);
   //await createListing(client,{

//name: names,Alter: 22 })




//await findOneListingsByName(client);

await deleteListingsByName(client);


    }catch(e){
        console.error(e);
    
    }finally{
        await client.close();
    }

}



async function findOneListingsByName(client){
  const result = await client.db("Test2").collection("Test2").findOne({}, {sort:{$natural:-1}})

  console.log(result);
}





main().catch(console.error);


async function deleteListingsByName(client){
    const result = await client.db("Test2").collection("Test2").deleteOne();
    console.log(result);
}









async function createListing(client, newListing){
 const result =  await  client.db("Test2").collection("Test2").insertOne(newListing);
console.log(`id of new listing: ${result.insertedId}`)

}





async function listDatabases(client){
   const databasesList =  await client.db().admin().listDatabases();
   console.log("Databases:");
   databasesList.databases.forEach(db => {
       console.log(`-${db.name}`);
   });
}

