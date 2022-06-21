import PostsRepository from "../repositories/posts.repository.js"

async function createPost(post){
    await PostsRepository.createPost(post);
}

async function postComent(post){
    await PostsRepository.postComent(post);
}

async function getPost(){
    return await PostsRepository.getPost();
}

export default{
    createPost,
    postComent,
    getPost
}