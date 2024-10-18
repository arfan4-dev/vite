import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // Render nothing if the modal is closed

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-1/3">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-gray-400 text-white p-1 rounded-full"
                >
                    X
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
