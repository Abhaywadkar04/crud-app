
import mongoose from "mongoose";

const connection = async () => {
    const URL = "mongodb://127.0.0.1:27017/CRUD";
    try {
        await mongoose.connect(URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("db connected");
    } catch (error) {
        console.log("error while connecting the db: " + error);
    }
}
export default connection

