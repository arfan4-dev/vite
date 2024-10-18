import React from 'react';

const ComponentB = () => {
    return (
        <div className="flex justify-center items-center  bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
            <div className="bg-white shadow-md rounded-xl max-w-md w-full p-8 text-center">
                <h1 className="text-3xl font-bold text-[#282F5A] mb-4">Component B</h1>
                <p className="text-gray-600 mb-6">
                    Explore the features of Component B with this sleek and minimalistic design. Simple, elegant, and powerful.
                </p>
                <div className="flex justify-center">
                    <button className="px-5 py-3 bg-[#667eea] text-white font-semibold rounded-md hover:bg-[#5061c7] transition-colors duration-300 shadow-lg">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ComponentB;
