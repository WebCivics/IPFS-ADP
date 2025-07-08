import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', disabled = false }) => {
    const baseClasses = "px-4 py-2 rounded-md font-semibold text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-150 transform hover:scale-105";
    const variants = {
        primary: 'bg-blue-600 hover:bg-blue-500 text-white focus:ring-blue-500',
        secondary: 'bg-gray-600 hover:bg-gray-500 text-gray-200 focus:ring-gray-400',
    };
    return (
        <button onClick={onClick} disabled={disabled} className={`${baseClasses} ${variants[variant]} ${className} disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100`}>
            {children}
        </button>
    );
};
export default Button;