'use client';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const FeedbackResponses = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    useEffect(() => {
        const response = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/save-feedback-db`);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                if (data) {
                    setFeedbacks(data);
                }
            } catch (error) {
                console.error('Error fetching feedbacks:', error);
            }
        };
        response();
    }, []);
    return (
        <div className="relative overflow-x-auto">
            <Link href="/">
                <button className="bg-green-500 text-white px-4 py-2 rounded-md">Home</button>
            </Link>
            <h2 className="text-2xl font-bold mb-4 text-center text-[#3bb74a]">Feedback Responses</h2>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            #
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Organization
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Comment
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {feedbacks?.map((feedback, index) => (
                        <tr key={feedback?._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {index + 1}
                            </th>
                            <td className="px-6 py-4">{feedback?.name}</td>
                            <td className="px-6 py-4">{feedback?.organization}</td>
                            <td className="px-6 py-4">{feedback?.comment}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FeedbackResponses;
