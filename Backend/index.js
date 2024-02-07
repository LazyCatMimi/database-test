import { MongoClient, ServerApiVersion } from "mongodb";
import express from "express";
import cors from "cors"
import 'dotenv/config';
import routes from "./routes/routes.js";

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// connect to MongoDB
const client = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});


// use the imported routes here
routes(app, client);





// debug DB
// async function run() {
//   await client.connect();
//   await client.db("admin").command({ ping: 1 });
//   console.log("Pinged your deployment. You successfully connected to MongoDB!");
// }

