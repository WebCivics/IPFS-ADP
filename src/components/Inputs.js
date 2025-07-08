import React from 'react';

const Input = ({ label, value, onChange, placeholder, listId }) => (
    <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            list={listId}
            className="w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
    </div>
);

export default Input;