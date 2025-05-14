const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors')
app.use(cors())
app.use(express.json())

// xtbP6mdwNXzbi5Tv // coffee-store






const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect;

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    finally {
        run().catch(console.dir);
    }
}























app.get('/', (req, res) => {
    res.send('This is Coffee Server')
})

app.listen(port, () => {
    console.log(`Coffee server running port on${port}`)
})