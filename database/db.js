import mongoose from "mongoose";



const DBConnection = async()=>{
    const MONGODB_URI = `mongodb://user:aneela@ac-temrin7-shard-00-00.ud5unqf.mongodb.net:27017,ac-temrin7-shard-00-01.ud5unqf.mongodb.net:27017,ac-temrin7-shard-00-02.ud5unqf.mongodb.net:27017/?ssl=true&replicaSet=atlas-axr4sr-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{
        await mongoose.connect(MONGODB_URI,{useNewUrlParser:true});
        console.log('Database connected successfully')
    }catch(error){
        console.error('Error while connecting with the database',error.message);
    }
}

export default DBConnection;