'use client';
import React, { useState } from 'react';

const UserForm = ({ showModal }) => {
    const [formData, setFormData] = useState({
        name: '',
        organization: '',
        comment: '',
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        // Send form data to the server
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/save-feedback-db`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (res?.ok) {
            showModal();
            setFormData({
                name: '',
                organization: '',
                comment: '',
            });
        } else {
            alert('Failed to save data.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full p-4 shadow-md rounded-md">
            <div className="text-2xl font-bold text-green-500 py-4">Please Provide Your Feedback</div>
            <div className="mb-4">
                <label htmlFor="name" className="block font-bold text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    placeholder="Enter your Name"
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="organization" className="block font-bold text-gray-700">
                    Organization Name
                </label>
                <input
                    type="text"
                    name="organization"
                    id="organization"
                    placeholder="Enter your Organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="comment" className="block font-bold text-gray-700">
                    Comment
                </label>
                <textarea
                    name="comment"
                    id="comment"
                    value={formData.comment}
                    placeholder="Enter your valuable feedback"
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700"
                    rows="4"
                ></textarea>
            </div>

            <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">
                Submit Your Feedback
            </button>
        </form>
    );
};

export default UserForm;
