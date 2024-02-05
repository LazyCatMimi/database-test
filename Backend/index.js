import { MongoClient, ServerApiVersion } from "mongodb";
import express from "express";
const app = express();
const PORT = 3001;

app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const uri =
  "mongodb+srv://quynh:hDTK0Nbt22pvFMjG@atlascluster.1rybup4.mongodb.net/react_db?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  // Connect the client to the server	(optional starting in v4.7)
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
}

async function connectAndQuery() {
  try {
    await client.connect();
    const database = client.db("sample_analytics");
    const collection = database.collection("accounts");

    const result = await collection.findOne({ account_id: 198100 });
    console.log(result);
  } finally {
    await client.close();
  }
}

app.get("/account", async (req, res) => {
  // res.send(JSON.stringify({ potato: "potato" }));
  await client.connect();
  const database = client.db("sample_analytics");
  const collection = database.collection("accounts");
  const result = await collection.findOne({ account_id: 198100 });
  console.log(result);
  res.send("hello");
  // try {
  //   await client.connect();
  //   const database = client.db("sample_analytics");
  //   const collection = database.collection("accounts");

  //   const result = await collection.findOne({ account_id: 198100 });
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  //   res.status(500).json({ error: "Internal Server Error" });
  // }
});
