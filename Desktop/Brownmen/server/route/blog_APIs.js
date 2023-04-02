import express from 'express';
import User from '../module/User.js';
import checkAPIsKey from '../middleware/verify_API_key.js'


const apiRouter = express.Router()



// This API router handles GET requests to fetch all blog from the database
// If successful, it returns an array of user objects, otherwise it returns an error message.
// The API URL should follow the format: http://localhost:9000/category/all_blog



apiRouter.get('/category/all_blog',checkAPIsKey, async (req, res) => {
  try {
    const users = await User.find({});
    const names = users.map(users => users.name)
    res.send(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving users from database');
  }
})



// This API router handles GET requests to fetch all blog from the database
// who belong to a particular category, specified in the URL parameter 'categoryName'.
// If successful, it returns an array of user objects, otherwise it returns an error message.
// The API URL should follow the format: http://localhost:9000/category/{category}



apiRouter.get('/category/:categoryName',checkAPIsKey, async (req, res) => {
  try {
    const category_type = req.params.categoryName
    const users = await User.find({ category: category_type })
    res.send(users)
  } catch (err) {
    console.log(err)
    res.status(500).send('Error retrieving users from database');
  }
})




// This API router handles GET requests to fetch blog posts from the database
//  based on the slug parameter provided in the URL. 
//  If successful, it returns an array of user objects that match the specified slug, otherwise it returns an error message. 
//  The API URL should follow the format: http://localhost:9000/category/blog/{slug}.



apiRouter.get('/category/blog/:slug',checkAPIsKey, async (req, res) => {
  try {
    const slug_params = req.params.slug
    const users = await User.find({ slug: slug_params })
    res.send(users)
  } catch (err) {
    console.log(err)
    res.status(500).send('Error retrieving users from database');
  }
})



//This code defines an API endpoint that handles GET requests to fetch all unique categories from the database.
//  The API URL should follow the format: http://localhost:9000/category.

apiRouter.get('/category',checkAPIsKey, async (req, res) => {
  try {
    const users = await User.find({});
    const names =[...new Set (users.map(users => (users.category)))]
    res.send(names);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving users from database');
  }
})


export default apiRouter;