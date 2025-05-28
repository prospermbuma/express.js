/*==============================================
# Posts
==============================================*/
let posts = [
    { id: 1, title: 'Express lEARNING' },
    { id: 2, title: 'Node lEARNING' },
    { id: 3, title: 'MongoDB lEARNING' }
];

/*==============================================
# Get all posts
==============================================*/
// Endpoint: /api/posts
// Method: GET
const getPosts = (req, res, next) => {
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    }
    res.status(200).json(posts);
};

/*==============================================
# Get single post
==============================================*/
// Endpoint: /api/posts/:id
// Method: GET
const getPost = (req, res, next) => {
    const id = parseInt(req.params.id);
    // res.status(200).json(posts.filter((post) => post.id === id));
    const post = posts.find((post) => post.id === id);
    if (!post) {
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    }
    res.status(200).json(post);
};

/*==============================================
# Creat new post
==============================================*/
// Endpoint: /api/posts
// Method: POST
const createPost = (req, res, next) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    };

    if (!newPost.title) {
        const error = new Error('Please include a title');
        error.status = 400;
        return next(error);
    }
    posts.push(newPost);
    res.status(201).json(posts);
};

/*==============================================
# Update post
==============================================*/
// Endpoint: /api/posts/:id
// Method: PUT
const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    }
    post.title = req.body.title;
    res.status(200).json(posts);
};

/*==============================================
# Delete post
==============================================*/
// Endpoint: /api/posts/:id
// Method: DELETE
const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    }
    // posts.pop(post);
    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
};

export {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
};