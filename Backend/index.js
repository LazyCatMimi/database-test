import { MongoClient, ServerApiVersion } from "mongodb";
import express from "express";
import cors from "cors"
import 'dotenv/config';

// import routes
import exampleRoutes from "./routes/routes.js";

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

// port to run server
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
await client.connect();

// use the imported routes here!!
exampleRoutes(app, client);

