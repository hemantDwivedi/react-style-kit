import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies tortor vitae ligula tristique, vel malesuada magna gravida.</p>
                    </div>
                    <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="text-sm">123 Street Name<br />City, Country<br />email@example.com<br />+123 456 7890</p>
                    </div>
                    <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a className="text-white hover:text-gray-400 transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v14m-6-9v6a2 2 0 002 2h12a2 2 0 002-2v-6m-2-3v-2a4 4 0 00-4-4h-4a4 4 0 00-4 4v2m14 7h-6m-3 0h-2m5 0a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                            </a>
                            <a className="text-white hover:text-gray-400 transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-4.899 2.6a5.5 5.5 0 10-8.2 0M3 10h4m3 0h8m-5 3h2" />
                                </svg>
                            </a>
                            <a className="text-white hover:text-gray-400 transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 6c-1.049 0-2.047.175-2.983.492A5.999 5.999 0 0013 7c-3.309 0-6 2.691-6 6 0 .234.015.466.043.696C5.015 14.534 5 14.766 5 15c0 3.309 2.691 6 6 6 .843 0 1.647-.174 2.392-.492C18.953 21.153 19.951 21 21 21c3.309 0 6-2.691 6-6s-2.691-6-6-6zM8 14l4 4 9-9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center">
                <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
