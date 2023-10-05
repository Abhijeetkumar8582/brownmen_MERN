import dataBase from './Database_Connect/db.js'
import express from 'express';
import getBlog from './route/blog_APIs.js'
import dotenv from 'dotenv';
dotenv.config();


const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())

// Retrieve blog post including category and everything

app.use('/', getBlog)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


dataBase();