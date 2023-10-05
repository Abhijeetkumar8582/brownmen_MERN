import express from 'express';
import User from '../module/User.js';
import checkAPIsKey from '../middleware/verify_API_key.js';
// const { body, validationResult } = require('express-validator');
import { body } from 'express-validator'


const apiRouter = express.Router()



// This API router handles GET requests to fetch all blog from the database
// If successful, it returns an array of user objects, otherwise it returns an error message.
// The API URL should follow the format: http://localhost:9000/category/all_blog



apiRouter.get('/category/all_blog', checkAPIsKey, async (req, res) => {
  try {
    const date = new Date();
    const users = await User.find().sort({ date: -1 });
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



apiRouter.get('/category/:categoryName', checkAPIsKey, async (req, res) => {
  try {
    // const Current_date = new Date();
    const category_type = req.params.categoryName
    const users = await User.find({ category: category_type }).sort({ date: -1 });
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



apiRouter.get('/category/blog/:slug', checkAPIsKey, async (req, res) => {
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

apiRouter.get('/category', checkAPIsKey, async (req, res) => {
  try {
    const users = await User.find({});
    const names = [...new Set(users.map(users => (users.category)))]
    res.send(names);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving users from database');
  }
})


// This is an API route designed to create a new blog post
// using middleware to validate the input parameters. It then saves the blog post to
// a database and returns the saved blog object as a response. The use of try-catch blocks 
// ensures proper error handling, and the API key check adds an extra layer of security. 
// Overall, this API route appears to be well-constructed and follows best practices for creating a RESTful API.




apiRouter.post('/createBlog', checkAPIsKey, [
  body("id").isLength({min:1}),
  body("blogtitle").isLength({min:3}),
  body("category").isLength({min:3}),
  body("author").isLength({min:3}),
  body("image"),
  body("date"),
  body("blog_desc")
], async (req, res) => {
  try {
    const { id, blogtitle, category, author, image, date, blog_desc } = req.body;
    const blog = new User({
      id, blogtitle, category, author, image, date, blog_desc
    })
    const saveBlog = await blog.save()
    res.send(saveBlog);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving users from database');
  }
})





export default apiRouter;