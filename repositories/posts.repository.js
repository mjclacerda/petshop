import {getPosts} from "./mongo.js"

async function createPost(post){
    const client = getPosts(); //aqui estou chamando a função que conecta ao banco mongo
    try {
        await client.connect(); //aqui estou abrindo a conexão em si
        await client.db("store").collection("posts").insertOne(post)
    } catch (err) {
        throw new err; 
    } finally{
        await client.close(); // aqui estou fechando a conexão
    }
}

async function postComent(post){
    const client = getPosts(); //aqui estou chamando a função que conecta ao banco mongo
    try {
        await client.connect(); //aqui estou abrindo a conexão em si
        await client.db("store").collection("posts").updateOne({posts:post._id},{$set:{...post}})
    } catch (err) {
        throw new err; 
    } finally{
        await client.close(); // aqui estou fechando a conexão
    }
}

async function getPost(){
    const client = getPosts(); //aqui estou chamando a função que conecta ao banco mongo
    try {
        await client.connect(); //aqui estou abrindo a conexão em si
        return await client.db("store").collection("posts").find({}).toArray();
    } catch (err) {
        throw new err; 
    } finally{
        await client.close(); // aqui estou fechando a conexão
    }
}

export default {createPost, postComent, getPost}