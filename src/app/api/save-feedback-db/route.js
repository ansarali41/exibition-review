import connectDB from '../../../../config/db';
import Feedback from '../../../../models/feedback-schema';

export async function POST(req) {
    const { name, organization, comment } = await req.json();
    try {
        await connectDB();
        const feedback = await Feedback.create({ name, organization, comment });
        return new Response(JSON.stringify(feedback), { status: 201 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
        });
    }
}

export async function GET(req) {
    try {
        await connectDB();
        const feedbacks = await Feedback.find({}).sort({ createdAt: -1 });
        return new Response(JSON.stringify(feedbacks), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
        });
    }
}
