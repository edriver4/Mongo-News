// dependencies
const dataModels = require('../models');


module.exports = app => {
    // GET a specific top 5 topics
    app.get('/topics', (req, res) => {
        dataModels.Article.find({})
        .sort({ createdAt: 'desc'})
        .limit(50).then(topics => {
            res.render('topics', {topics});
        })
    });

    // GET a specific topic
    app.get('/topics/:id', (req, res) => {
        dataModels.Article.findOne({
            _id: req.params.id
        }).populate('comments')
        .then(topic => {
            res.render('comment', {topic});
        })
    });

    // POST a comment to a specific comment
    app.post('/topics/:id', (req, res) => {
        // Create the comment in the db
        dataModels.Comment.create({name: req.body.name, comment: req.body.comment})
        .then(comment => {
            return dataModels.Article.findOneAndUpdate({ _id: req.body.id }, {$push: { comments: comment._id}} , { new: true});
        }).then(() => {
            res.redirect(`/topics/${req.body.id}`);
        }).catch(err => {
            if (err) {
                console.log('Posting error', err);
            }
        });
    });
};
