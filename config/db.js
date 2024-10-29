import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI is not defined in environment variables');
        }

        if (mongoose.connections[0].readyState) {
            return true;
        }

        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
        return true;
    } catch (error) {
        console.error('MongoDB connection error:', error?.message);
        throw error;
    }
};

export default connectDB;
