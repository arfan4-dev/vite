import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Input = ({ label, name, type = 'text', value, onChange, placeholder, required = false, className = '', ...rest }) => {
    return (
        <div className="mb-4 w-full">
            {label && (
                <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}
            {type === 'phone' ? (
                <PhoneInput
                    country={'pk'}
                    value={value}
                    onChange={onChange}
                    inputProps={{
                        name: name,
                        required: required,
                        autoFocus: false,
                    }}
                    containerClass="phone-input-container"
                    inputClass="phone-input"
                    buttonClass="country-dropdown"
                    style={{
                        width: '100%',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        padding: '10px',
                        boxSizing: 'border-box',
                    }}
                    {...rest}
                />

            ) : (
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${className}`}
                    {...rest}
                />
            )}
        </div>
    );
};

export default Input;
