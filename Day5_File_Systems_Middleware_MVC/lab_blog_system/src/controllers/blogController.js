const fs = require('fs').promises;
const path = require('path');

const dataPath = path.join(__dirname, '../../data/posts.json');

// Get all posts for the list view
exports.getAllPosts = async (req, res) => {
    try {
        const data = await fs.readFile(dataPath, 'utf8');
        const posts = JSON.parse(data);
        res.render('index', { 
            title: "My Tech Blog",
            posts 
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error reading posts file");
    }
};

// Get a single post for detail view
exports.getPostById = async (req, res) => {
    try {
        const data = await fs.readFile(dataPath, 'utf8');
        const posts = JSON.parse(data);
        const post = posts.find(p => p.id === parseInt(req.params.id));
        
        if (!post) {
            return res.status(404).render('post', { 
                title: "Not Found",
                post: null 
            });
        }

        res.render('post', { 
            title: post.title,
            post 
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching post");
    }
};
