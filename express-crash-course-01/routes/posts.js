import express from 'express';
import { Router } from 'express';
import { 
    getPosts, 
    getPost, 
    createPost, 
    updatePost, 
    deletePost 
} from '../controllers/postControllers.js';

const router = Router();

// Routing
// router.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// router.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

// Get all posts
router.get('/', getPosts);

// Get a single post
router.get('/:id', getPost);

// Create new post
router.post('/', createPost);

// Update post
router.put('/:id', updatePost);

// Delete post
router.delete('/:id', deletePost);

export default router;
