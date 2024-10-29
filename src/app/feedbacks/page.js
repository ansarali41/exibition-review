'use client';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

const FeedbackResponses = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const response = async () => {
            try {
                setIsLoading(true);
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/save-feedback-db`);

                if (res.statusText !== 'OK' || res.status !== 200) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                if (res?.data?.data) {
                    setFeedbacks(res.data?.data);
                }
            } catch (error) {
                console.error('Error fetching feedbacks:', error);
            } finally {
                setIsLoading(false);
            }
        };
        response();
    }, []);

    const exportToExcel = () => {
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(
            feedbacks?.map((feedback, index) => ({
                No: index + 1,
                Name: feedback?.name,
                Organization: feedback?.organization,
                Comment: feedback?.comment,
                createdAt: feedback?.createdAt,
            })),
        );

        XLSX.utils.book_append_sheet(workbook, worksheet, 'Feedbacks');
        XLSX.writeFile(workbook, 'feedback_responses.xlsx');
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500"></div>
            </div>
        );
    }

    return (
        <div className="relative overflow-x-auto">
            <div className="flex justify-between items-center mb-4">
                <Link href="/">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md">Home</button>
                </Link>
                <button onClick={exportToExcel} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Export to Excel
                </button>
            </div>
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
