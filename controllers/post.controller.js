import { loggers } from "winston";
import PostService from "../services/post.service.js";

async function createPost(req, res, next){
    try {
        let post = req.body;
        if(!post.titulo || !post.conteudo || !post.comentarios){
            throw new Error("Há campos obrigatórios não preenchidos");
        }
        await PostService.createPost(post);
        res.end();
        loggers.post(`POST /post - ${JSON.stringify(post)}`)
    } catch (err) {
        next(err);   
    }
}

async function postComent(req, res, next){
    try {
        let post = req.body;
        if(!post._id){
            throw new Error("Há campos obrigatórios não preenchidos");
        }
        post = await PostService.postComent(post);
        res.send(await PostService.getPost());
    loggers.info(`PUT /post - ${JSON.stringify(post)}`);
    } catch (err) {
        next(err);   
    }
}

async function getPost(req, res, next){
    try {
        res.send(await PostService.getPost());
        loggers.info("GET /post");
    } catch (err) {
        next(err);   
    }
}

export default{
    createPost,
    postComent,
    getPost
}