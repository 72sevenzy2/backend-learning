let posts = [
    { id: 1, title: "hello world" },
    { id: 2, title: "hello java" },
    { id: 3, title: "hello six seveeeeeen" }
];  

export const getAllPosts = (req, res) => {
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
        res.json(posts.slice(0, limit));
    }
    else {
        res.json(posts);
    }
}

export const getSinglePost = (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    const post = posts.find((p) => p.id === id);
    if (!post) {
        const error = new Error(`NOt found ${id}`);
        return next(error);
    }
    res.json(posts.filter((post) => post.id == id));
}

export const CreateNewPost = (req, res, next) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    }
    if (!newPost.title) {
        const error = new Error('Please include a title');
        return next(error);
    }
    else {
        posts.push(newPost);
    }
    res.status(201).json(posts);
}

export const changePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        const error = new Error("post not found");
        return next(error);
    }
    post.title = req.body.title;
    res.status(200).json(posts);
}

export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        const error = new Error("post not found");
        return next(error);
    }
    posts = posts.filter((p) => p.id !== id);
    res.status(200).json(posts);
}