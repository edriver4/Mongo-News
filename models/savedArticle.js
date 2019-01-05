const mongoose = require('mongoose');

var Schema = mongoose.Schema;

// SaveArticle model
var SavedArticleSchema = new Schema({
    // Props for the schema
    name: {
        type: String,
        default: 'Rando',
    },
    comment: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now(),
    },
});

// Create the model and export
const SavedArticle = mongoose.model('SavedArticle', SavedArticleSchema);
module.exports = SavedArticle;