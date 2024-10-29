import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        console.log('connecting to MongoDB');
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
        return true;
    } catch (error) {
        console.log('Error connecting to MongoDB:', error);
        return false;
    }
};

export default connectDB;
