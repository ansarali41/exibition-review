import { NextResponse } from 'next/server';
import connectDB from '../../../../config/db';
import Feedback from '../../../../models/feedback-schema';

export async function POST(req) {
    try {
        // Validate request body
        const body = await req.json();
        const { name, organization, comment } = body;

        if (!name || !organization || !comment) {
            return new Response(
                JSON.stringify({
                    error: 'Missing required fields',
                }),
                { status: 400 },
            );
        }

        // Connect to database
        await connectDB();

        // Create feedback
        const feedback = await Feedback.create({
            name,
            organization,
            comment,
        });

        return NextResponse.json({ message: 'Success', data: feedback }, { status: 201 });
    } catch (error) {
        console.error('Post feedback API Error:', error);
        return NextResponse.json(
            {
                error: error.message,
                stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
            },
            { status: 500 },
        );
    }
}

export async function GET(req) {
    try {
        // Connect to database
        await connectDB();

        // Fetch feedbacks
        const feedbacks = await Feedback.find({}).sort({ createdAt: -1 }).select('-__v'); // Exclude version key

        return NextResponse.json({ data: feedbacks }, { status: 200 });
    } catch (error) {
        console.error('Get feedback API Error:', error);
        return NextResponse.json(
            {
                error: error.message,
                stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
            },
            { status: 500 },
        );
    }
}
