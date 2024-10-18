import React from 'react';

const ComponentA = () => {
    return (
        <div className="flex justify-center items-center  bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center">
                <h1 className="text-2xl font-bold text-[#282F5A] mb-4">Welcome to Component A</h1>
                <p className="text-gray-600 mb-6">
                    This is a beautifully designed component with a modern look. Enjoy exploring more features and designs!
                </p>
                <button className="px-4 py-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-md shadow hover:shadow-lg hover:opacity-90 transition-all duration-300">
                    Try It Now
                </button>
            </div>
        </div>
    );
}

export default ComponentA;
