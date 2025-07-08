import React from 'react';

const Select = ({ label, value, onChange, children }) => (
    <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
        <select
            value={value}
            onChange={onChange}
            className="w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
            {children}
        </select>
    </div>
);

export default Select;