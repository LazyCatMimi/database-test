import { MongoClient, ServerApiVersion } from "mongodb";
import express from "express";
import cors from "cors"
import 'dotenv/config';


const PORT = process.env.PORT

const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// debug DB
// async function run() {
//   await client.connect();
//   await client.db("admin").command({ ping: 1 });
//   console.log("Pinged your deployment. You successfully connected to MongoDB!");
// }

// example route
app.get("/meow", async (req, res) => {

  try {
    await client.connect();
    const database = client.db("sample_analytics");
    const collection = database.collection("accounts");
    const result = await collection.findOne({ account_id: 198100 });
    console.log(result);
    res.send(JSON.stringify(result))
  
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
