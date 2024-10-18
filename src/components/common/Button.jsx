import React from 'react';

const Button = ({ text, onClick, style, type = "button", disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-4 py-2 rounded-lg ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
            style={style}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default Button;
