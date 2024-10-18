import React, { useState } from 'react';
import { Pagination } from './Pagination';


const Table = ({ headings, data, rowsPerPage, currentPage, setCurrentPage }) => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const selectedData = data.slice(startIndex, startIndex + rowsPerPage);

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        {headings.map((heading, index) => (
                            <th key={index} className="py-3 px-6 text-left">
                                {heading}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {selectedData.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className="border-b border-gray-300 hover:bg-gray-100 transition duration-200"
                        >
                            {Object.keys(row).map((key, index) => (
                                <td key={index} className="py-3 px-6 text-left">
                                    {row[key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default Table;
