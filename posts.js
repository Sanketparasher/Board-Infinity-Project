const express = require ('express');
const router = express.Router();
const Post = require('../models/Post');


router.get('/', (req,res) => {
    res.send('We are on posts');
});


router.post('/', (req,res) => {
    const post = new Post({
        task_name: req.body.task_name,
        task_description: req.body.task_description,
        creator: req.body.creator,
        duration_in_minutes: req.body.duration_in_minutes
    });
});

module.exports = router;