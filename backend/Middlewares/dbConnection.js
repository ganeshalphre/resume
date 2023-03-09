import mongoose from "mongoose";

mongoose.set("strictQuery", false);
const connectDb = () => { return mongoose.connect('mongodb://127.0.0.1:27017/resume').then(() => console.log('Connected!'))};

export default connectDb;