'use client';
import UserForm from '@/components/Form';
import Image from 'next/image';
import ImageSlider from '@/components/ImageSlider';
import { useState } from 'react';
import brandLogo from '../../public/asset/logo1.png';
import Link from 'next/link';

export default function Home() {
    const [isModalOpen, setModalOpen] = useState(false);

    const showModal = () => {
        setModalOpen(true);
        setTimeout(() => {
            setModalOpen(false);
        }, 1000); // Hide modal after 5 seconds
    };
    return (
        <>
            <div className="p-4 grid grid-cols-12 rounded-xl w-full h-screen">
                <div className="p-4 col-span-7 rounded-md mb-4 h-full">
                    <header className="flex flex-col items-end">
                        <div className="text-5xl font-bold text-[#3bb74a] text-right m-0 p-0">
                            Surging <br />
                            Hope
                        </div>
                        <div className="text-black font-bold m-0 p-0"> Stories of Climate Resilience </div>
                    </header>
                    <div className="grid grid-cols-12 m-0 p-0">
                        <div className="col-span-2 ">
                            <div className="max-h-96 flex items-center justify-center">
                                <p className="text-4xl text-[#5f9ad1] font-bold transform rotate-180" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                                    PHOTOGRAPHY EXHIBITION
                                </p>
                            </div>
                        </div>
                        <div className="col-span-10 h-full m-0 p-0">
                            <div className="flex items-center justify-center">
                                <div className="w-full h-full rounded-lg">
                                    <Image className="rounded-md" src="https://i.ibb.co.com/WpnSXB6/image2.jpg" alt="img 1" width={600} height={100} />
                                </div>
                            </div>
                            <div className="flex items-center justify-end py-4">
                                <Image src={brandLogo} height={100} width={200} alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex col-span-5 h-full w-full">
                    <div className="w-full p-4 rounded-md">
                        <div className="flex flex-1 space-x-4">
                            <UserForm showModal={showModal} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <Link href="/feedbacks">
                    <small className=" text-[#3bb74a] font-bold py-2 px-4 rounded">View Feedback</small>
                </Link>
            </div>
            {/* Button to Show Modal */}
            {/* <div className="fixed bottom-5 right-5">
          <button
            onClick={showModal}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Show Modal
          </button>
        </div> */}

            {/* Centered Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-10">
                    <div className="bg-[#1995ad] rounded-lg shadow-lg w-[600px]  text-center p-8">
                        <h2 className="text-5xl font-bold text-white">Thanks</h2>
                        <p className="mt-4 font-semibold text-3xl text-[#a1d6e2]">For Your Valuable Feedback</p>
                    </div>
                </div>
            )}
        </>
    );
}
