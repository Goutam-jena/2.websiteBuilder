// import mongoose from "mongoose"

// const connectDb=async ()=>{
//     try {
//         await mongoose.connect(process.env.MONGODB_URL)
//         console.log("db connected")
//     } catch (error) {
//         console.log("db error")
//     }
// }

// export default connectDb




import mongoose from "mongoose"

const connectDb = async () => {
    try {
        // This will connect using the URL in your .env
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        // This will tell us EXACTLY what is wrong (e.g., wrong password or IP not allowed)
        console.error("❌ MongoDB Connection Error:");
        console.error(error.message); 
    }
}

export default connectDb;