import mongodb from "mongodb";
//essa função cria um client de conexão com o Mongodb
function getPosts(){
    const uri = "aqui coloca a uri do mongodb"
    return new mongodb.MongoClient(uri); 
}

export {getPosts}
