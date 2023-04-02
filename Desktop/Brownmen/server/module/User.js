import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    slug: String,
    blogtitle: String,
    category: String,
    author:String,
    image:String,
    blog_desc:Array
});


const User = mongoose.model('User', userSchema,'abhis');

export default User;
