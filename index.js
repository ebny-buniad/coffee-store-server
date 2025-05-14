const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors')
app.use(cors())
app.use(express.json())
require('dotenv').config()

// xtbP6mdwNXzbi5Tv // coffee-store





const uri = `mongodb+srv://${process.env.DB_user}:${process.env.DB_pass}@cluster0.dpqzrtb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    finally {

    }
}

run().catch(console.dir);






















app.get('/', (req, res) => {
    res.send('This is Coffee Server')
})

app.listen(port, () => {
    console.log(`Coffee server running port on: ${port}`)
})