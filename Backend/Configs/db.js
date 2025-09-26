import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "usersData"
        });
    } catch (error) {
        console.error(error.message);
    }
}