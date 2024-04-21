import { useState } from 'react';

const RangeSlider = () => {
    const [value, setValue] = useState(20);

    const handlePlus = () => {
        setValue(prevValue => (prevValue < 100 ? prevValue + 1 : prevValue));
    };

    const handleMinus = () => {
        setValue(prevValue => (prevValue > 0 ? prevValue - 1 : prevValue));
    };

    const handleChange = event => {
        setValue(parseInt(event.target.value));
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Range Slider</h2>
                <div className="flex items-center justify-center">
                    <button onClick={handleMinus} className="px-2 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                    </button>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={value}
                        onChange={handleChange}
                        className="flex-grow appearance-none h-3 bg-gray-300 rounded-md mx-4"
                    />
                    <button onClick={handlePlus} className="px-2 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>
                <div className="mt-6">
                    <p className="text-gray-700">Value: {value}</p>
                </div>
            </div>
        </div>
    );
};

export default RangeSlider;