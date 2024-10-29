import Image from 'next/image';
import Script from 'next/script';
import Image1 from '../../public/asset/image1.jpeg';
import Image2 from '../../public/asset/image2.jpeg';
import Image3 from '../../public/asset/image3.jpeg';
import Image4 from '../../public/asset/image4.jpeg';
import Image5 from '../../public/asset/image5.jpeg';

const ImageSlider = () => {
    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css" rel="stylesheet" />
            <Script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js" />

            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                <div className="relative rounded-lg h-96 overflow-hidden md:h-96">
                    {/* Item 1 */}
                    <div className="hidden duration-[5000]  ease-in-out" data-carousel-item>
                        <Image layout="fill" src={Image1} alt="Carousel 1" />
                    </div>
                    {/* Item 2 */}
                    <div className="hidden duration-[5000]  ease-in-out" data-carousel-item>
                        <Image layout="fill" src={Image2} alt="Carousel 2" />
                    </div>
                    <div className="hidden duration-[5000]  ease-in-out" data-carousel-item>
                        <Image layout="fill" src={Image3} alt="Carousel 2" />
                    </div>
                    <div className="hidden duration-[5000] ease-in-out" data-carousel-item>
                        <Image layout="fill" src={Image4} alt="Carousel 2" />
                    </div>
                    <div className="hidden duration-[5000]  ease-in-out" data-carousel-item>
                        <Image layout="fill" src={Image5} alt="Carousel 2" />
                    </div>
                </div>

                {/* Slider controls */}
                <button
                    type="button"
                    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white  dark:text-gray-800  rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </>
    );
};

export default ImageSlider;
