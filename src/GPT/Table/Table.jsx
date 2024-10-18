import React from 'react';

const CustomTable = ({ columns, data, onEdit, onDelete, onAdd }) => {

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
                {/* Table Header */}
                <thead className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
                    <tr>
                        {columns.map((column, index) => (
                            <th
                                key={index}
                                className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-100 border-b border-purple-500"
                            >
                                {column.header}
                            </th>
                        ))}
                        {/* Action Column */}
                        <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-100 border-b border-purple-500">
                            Actions
                        </th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={`${rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                } hover:bg-gray-100 transition-colors duration-200 ease-in-out`}
                        >
                            {columns.map((column, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200"
                                >
                                    {row[column.accessor]}
                                </td>
                            ))}
                            {/* Action Buttons */}
                            <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200 flex space-x-4">
                                <button
                                    onClick={() => onEdit(row)}
                                    className="text-blue-600 hover:underline"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDelete(row._id)}
                                    className="text-red-600 hover:underline"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Add Button */}
            <div className="mt-4">
                <button
                    onClick={onAdd}
                    className="px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
                >
                    Add New Row
                </button>
            </div>
        </div>
    );
};

export default CustomTable;
