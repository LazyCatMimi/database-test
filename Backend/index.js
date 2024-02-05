import {MongoClient, ServerApiVersion} from 'mongodb';
const app = express();
const PORT = 3001;

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const uri = "mongodb+srv://quynh:hDTK0Nbt22pvFMjG@atlascluster.1rybup4.mongodb.net/react_db?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


async function connectAndQuery() {
  try {
    await client.connect();
    const database = client.db('sample_analytics');
    const collection = database.collection('accounts');

    const result = await collection.findOne({ account_id: 198100 });
    console.log(result);
  } finally {
    await client.close();
  }
}

connectAndQuery();