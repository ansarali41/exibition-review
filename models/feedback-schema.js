import { Schema, model } from 'mongoose';

const feedbackSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        organization: {
            type: String,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

export default model('feedback', feedbackSchema);
