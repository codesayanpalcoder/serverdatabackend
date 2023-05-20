import mongoose from "mongoose";

// database connection
export const mongoDB = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log(" connected!");
    })
    .catch((error) => {
        console.log(error);
    });
}