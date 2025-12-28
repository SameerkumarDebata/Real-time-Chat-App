import mongoose from "mongoose";
export const connectDB= async()=>{
    try{

        const MONGODB_URL=process.env.MONGODB_URL;
       const instance= await mongoose.connect(MONGODB_URL);
   
       console.log(`Database connected to ${instance.connection.host}:${instance.connection.port}`);
    }catch(error){
        console.log("Error in DB connection",error);
    }
}