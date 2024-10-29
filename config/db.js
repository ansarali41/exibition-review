import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        console.log('MongoDB URI:', process.env.MONGO_URI);

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
        console.error('MongoDB connection error:', error);
        throw error;
    }
};

export default connectDB;
