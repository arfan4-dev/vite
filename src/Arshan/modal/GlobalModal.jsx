import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTimes } from 'react-icons/fa'; // Importing the cross icon from react-icons
import { closeModal } from '../../redux/slice/modalSlice';

const GlobalModal = () => {
    const dispatch = useDispatch();
    const modal = useSelector(state => state.modal);
    const { isOpen, componentName: ComponentToRender, componentProps } = modal;

    if (!isOpen || !ComponentToRender) return null;


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg relative shadow-lg w-full max-w-lg">
                <button
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                    onClick={() => dispatch(closeModal())}
                >
                    <FaTimes size={16} />
                </button>
                <ComponentToRender {...componentProps} />
            </div>
        </div>
    );
};

export default GlobalModal;
