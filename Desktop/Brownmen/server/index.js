import dataBase from './Database_Connect/db.js'
import express from 'express';
import getBlog from './route/blog_APIs.js'
// import getCategory from './route/all_category.js    '

const app = express()
const port = 3002

app.use(express.json())


// Retrieve blog post including category and everything
app.use('/', getBlog)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


dataBase();