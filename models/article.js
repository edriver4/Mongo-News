
const mongoose = require('mongoose');
// const comment = require('./comments');
var Schema = mongoose.Schema;

// Mongoose Model
var ArticleSchema = new Schema ({
    // Props for the schema
    articleTitle:{
        type: String,
        default: 'No Title',
    },
    articleLink:{
        type: String,
        default: 'Article Link',
    },
    tagline: {
        type: String,
        default: 'No tagline',
    },
    image: {
        type: String,
        default: 'https://via.placeholder.com/250',
    },
    
});

// Create the model and export 
const Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;