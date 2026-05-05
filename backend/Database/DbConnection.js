import mongoose from 'mongoose';

let mongoDb = async () =>{
    try{
        let conn = await mongoose.connect(process.env.MONGO_URL)
        // console.log("MongoDB is connected with ", conn.connection.host);
        return conn;
    }
    catch(err){
        console.log("Error in connecting to MongoDB ", err);
    }
}

export default mongoDb;