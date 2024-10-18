import React, { useEffect, useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/slice/modalSlice';
import Table from './Table';
import ComponentA from '../../Arshan/ComponentA';
import { Pagination } from './Pagination';

const EmployeeTable = () => {
    const dispatch = useDispatch();
    const handleCreate = () => {
        dispatch(openModal({ componentName: ComponentA, componentProps: { someProp: 'value' } }));
    };
    const [data, setData] = useState([
        {
            'Employee ID': 1,
            name: 'John Doe',
            position: 'Software Engineer',
            "Phone No.": "03453322334",
            'Email Address': 'john.doe@example.com',
            "Joining Date": "23-04-2024",
            status: (
                <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                </a>
            ),
            action: (
                <span className='flex items-center gap-x-1'>
                    <p
                        onClick={handleCreate}
                        className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                    >
                        <FaRegEdit size={20} />
                    </p>
                    <p className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1">
                        <RiDeleteBin6Line size={20} />
                    </p>
                </span>
            ),
        },
        {
            'Employee ID': 2,
            name: 'Jane Smith',
            position: 'Project Manager',
            "Phone No.": "03453322335",
            'Email Address': 'jane.smith@example.com',
            "Joining Date": "01-05-2023",
            status: (
                <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                </a>
            ),
            action: (
                <span className='flex items-center gap-x-1'>
                    <p
                        onClick={handleCreate}
                        className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                    >
                        <FaRegEdit size={20} />
                    </p>
                    <p className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1">
                        <RiDeleteBin6Line size={20} />
                    </p>
                </span>
            ),
        },
        {
            'Employee ID': 3,
            name: 'Michael Johnson',
            position: 'UI/UX Designer',
            "Phone No.": "03453322336",
            'Email Address': 'michael.johnson@example.com',
            "Joining Date": "10-06-2022",
            status: (
                <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                </a>
            ),
            action: (
                <span className='flex items-center gap-x-1'>
                    <p
                        onClick={handleCreate}
                        className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                    >
                        <FaRegEdit size={20} />
                    </p>
                    <p className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1">
                        <RiDeleteBin6Line size={20} />
                    </p>
                </span>
            ),
        },
        {
            'Employee ID': 4,
            name: 'Emily Davis',
            position: 'Quality Assurance Engineer',
            "Phone No.": "03453322337",
            'Email Address': 'emily.davis@example.com',
            "Joining Date": "17-03-2024",
            status: (
                <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                </a>
            ),
            action: (
                <span className='flex items-center gap-x-1'>
                    <p
                        onClick={handleCreate}
                        className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                    >
                        <FaRegEdit size={20} />
                    </p>
                    <p className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1">
                        <RiDeleteBin6Line size={20} />
                    </p>
                </span>
            ),
        },
        {
            'Employee ID': 5,
            name: 'Robert Brown',
            position: 'DevOps Engineer',
            "Phone No.": "03453322338",
            'Email Address': 'robert.brown@example.com',
            "Joining Date": "14-09-2021",
            status: (
                <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                </a>
            ),
            action: (
                <span className='flex items-center gap-x-1'>
                    <p
                        onClick={handleCreate}
                        className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                    >
                        <FaRegEdit size={20} />
                    </p>
                    <p className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1">
                        <RiDeleteBin6Line size={20} />
                    </p>
                </span>
            ),
        },
        {
            'Employee ID': 6,
            name: 'Sophia Martinez',
            position: 'Full Stack Developer',
            "Phone No.": "03453322339",
            'Email Address': 'sophia.martinez@example.com',
            "Joining Date": "01-02-2022",
            status: (
                <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                </a>
            ),
            action: (
                <span className='flex items-center gap-x-1'>
                    <p
                        onClick={handleCreate}
                        className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                    >
                        <FaRegEdit size={20} />
                    </p>
                    <p className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1">
                        <RiDeleteBin6Line size={20} />
                    </p>
                </span>
            ),
        },
        {
            'Employee ID': 7,
            name: 'Sophia Martinez',
            position: 'Full Stack Developer',
            "Phone No.": "03453322339",
            'Email Address': 'sophia.martinez@example.com',
            "Joining Date": "01-02-2022",
            status: (
                <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                </a>
            ),
            action: (
                <span className='flex items-center gap-x-1'>
                    <p
                        onClick={handleCreate}
                        className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                    >
                        <FaRegEdit size={20} />
                    </p>
                    <p className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1">
                        <RiDeleteBin6Line size={20} />
                    </p>
                </span>
            ),
        },
        {
            'Employee ID': 8,
            name: 'Sophia Martinez',
            position: 'Full Stack Developer',
            "Phone No.": "03453322339",
            'Email Address': 'sophia.martinez@example.com',
            "Joining Date": "01-02-2022",
            status: (
                <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                </a>
            ),
            action: (
                <span className='flex items-center gap-x-1'>
                    <p
                        onClick={handleCreate}
                        className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                    >
                        <FaRegEdit size={20} />
                    </p>
                    <p className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1">
                        <RiDeleteBin6Line size={20} />
                    </p>
                </span>
            ),
        },
        {
            'Employee ID': 9,
            name: 'Sophia Martinez',
            position: 'Full Stack Developer',
            "Phone No.": "03453322339",
            'Email Address': 'sophia.martinez@example.com',
            "Joining Date": "01-02-2022",
            status: (
                <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                </a>
            ),
            action: (
                <span className='flex items-center gap-x-1'>
                    <p
                        onClick={handleCreate}
                        className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                    >
                        <FaRegEdit size={20} />
                    </p>
                    <p className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1">
                        <RiDeleteBin6Line size={20} />
                    </p>
                </span>
            ),
        },
        {
            'Employee ID': 10,
            name: 'Sophia Martinez',
            position: 'Full Stack Developer',
            "Phone No.": "03453322339",
            'Email Address': 'sophia.martinez@example.com',
            "Joining Date": "01-02-2022",
            status: (
                <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                </a>
            ),
            action: (
                <span className='flex items-center gap-x-1'>
                    <p
                        onClick={handleCreate}
                        className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                    >
                        <FaRegEdit size={20} />
                    </p>
                    <p className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1">
                        <RiDeleteBin6Line size={20} />
                    </p>
                </span>
            ),
        },
        {
            'Employee ID': 11,
            name: 'Sophia Martinez',
            position: 'Full Stack Developer',
            "Phone No.": "03453322339",
            'Email Address': 'sophia.martinez@example.com',
            "Joining Date": "01-02-2022",
            status: (
                <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                </a>
            ),
            action: (
                <span className='flex items-center gap-x-1'>
                    <p
                        onClick={handleCreate}
                        className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                    >
                        <FaRegEdit size={20} />
                    </p>
                    <p className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1">
                        <RiDeleteBin6Line size={20} />
                    </p>
                </span>
            ),
        },
        {
            'Employee ID': 12,
            name: 'Sophia Martinez',
            position: 'Full Stack Developer',
            "Phone No.": "03453322339",
            'Email Address': 'sophia.martinez@example.com',
            "Joining Date": "01-02-2022",
            status: (
                <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                </a>
            ),
            action: (
                <span className='flex items-center gap-x-1'>
                    <p
                        onClick={handleCreate}
                        className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                    >
                        <FaRegEdit size={20} />
                    </p>
                    <p className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1">
                        <RiDeleteBin6Line size={20} />
                    </p>
                </span>
            ),
        },
        {
            'Employee ID': 13,
            name: 'Sophia Martinez',
            position: 'Full Stack Developer',
            "Phone No.": "03453322339",
            'Email Address': 'sophia.martinez@example.com',
            "Joining Date": "01-02-2022",
            status: (
                <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                </a>
            ),
            action: (
                <span className='flex items-center gap-x-1'>
                    <p
                        onClick={handleCreate}
                        className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                    >
                        <FaRegEdit size={20} />
                    </p>
                    <p className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1">
                        <RiDeleteBin6Line size={20} />
                    </p>
                </span>
            ),
        },
        {
            'Employee ID': 14,
            name: 'Sophia Martinez',
            position: 'Full Stack Developer',
            "Phone No.": "03453322339",
            'Email Address': 'sophia.martinez@example.com',
            "Joining Date": "01-02-2022",
            status: (
                <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                </a>
            ),
            action: (
                <span className='flex items-center gap-x-1'>
                    <p
                        onClick={handleCreate}
                        className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                    >
                        <FaRegEdit size={20} />
                    </p>
                    <p className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1">
                        <RiDeleteBin6Line size={20} />
                    </p>
                </span>
            ),
        },
        {
            'Employee ID': 15,
            name: 'Sophia Martinez',
            position: 'Full Stack Developer',
            "Phone No.": "03453322339",
            'Email Address': 'sophia.martinez@example.com',
            "Joining Date": "01-02-2022",
            status: (
                <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                </a>
            ),
            action: (
                <span className='flex items-center gap-x-1'>
                    <p
                        onClick={handleCreate}
                        className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                    >
                        <FaRegEdit size={20} />
                    </p>
                    <p className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1">
                        <RiDeleteBin6Line size={20} />
                    </p>
                </span>
            ),
        },
        {
            'Employee ID': 16,
            name: 'Sophia Martinez',
            position: 'Full Stack Developer',
            "Phone No.": "03453322339",
            'Email Address': 'sophia.martinez@example.com',
            "Joining Date": "01-02-2022",
            status: (
                <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                </a>
            ),
            action: (
                <span className='flex items-center gap-x-1'>
                    <p
                        onClick={handleCreate}
                        className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                    >
                        <FaRegEdit size={20} />
                    </p>
                    <p className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1">
                        <RiDeleteBin6Line size={20} />
                    </p>
                </span>
            ),
        },
        {
            'Employee ID': 17,
            name: 'Sophia Martinez',
            position: 'Full Stack Developer',
            "Phone No.": "03453322339",
            'Email Address': 'sophia.martinez@example.com',
            "Joining Date": "01-02-2022",
            status: (
                <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                </a>
            ),
            action: (
                <span className='flex items-center gap-x-1'>
                    <p
                        onClick={handleCreate}
                        className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                    >
                        <FaRegEdit size={20} />
                    </p>
                    <p className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1">
                        <RiDeleteBin6Line size={20} />
                    </p>
                </span>
            ),
        },
        {
            'Employee ID': 18,
            name: 'Sophia Martinez',
            position: 'Full Stack Developer',
            "Phone No.": "03453322339",
            'Email Address': 'sophia.martinez@example.com',
            "Joining Date": "01-02-2022",
            status: (
                <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                </a>
            ),
            action: (
                <span className='flex items-center gap-x-1'>
                    <p
                        onClick={handleCreate}
                        className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                    >
                        <FaRegEdit size={20} />
                    </p>
                    <p className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1">
                        <RiDeleteBin6Line size={20} />
                    </p>
                </span>
            ),
        },
        {
            'Employee ID': 19,
            name: 'Sophia Martinez',
            position: 'Full Stack Developer',
            "Phone No.": "03453322339",
            'Email Address': 'sophia.martinez@example.com',
            "Joining Date": "01-02-2022",
            status: (
                <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                </a>
            ),
            action: (
                <span className='flex items-center gap-x-1'>
                    <p
                        onClick={handleCreate}
                        className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                    >
                        <FaRegEdit size={20} />
                    </p>
                    <p className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1">
                        <RiDeleteBin6Line size={20} />
                    </p>
                </span>
            ),
        },
        {
            'Employee ID': 20,
            name: 'Sophia Martinez',
            position: 'Full Stack Developer',
            "Phone No.": "03453322339",
            'Email Address': 'sophia.martinez@example.com',
            "Joining Date": "01-02-2022",
            status: (
                <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                </a>
            ),
            action: (
                <span className='flex items-center gap-x-1'>
                    <p
                        onClick={handleCreate}
                        className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                    >
                        <FaRegEdit size={20} />
                    </p>
                    <p className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1">
                        <RiDeleteBin6Line size={20} />
                    </p>
                </span>
            ),
        },
        {
            'Employee ID': 20,
            name: 'Sophia Martinez',
            position: 'Full Stack Developer',
            "Phone No.": "03453322339",
            'Email Address': 'sophia.martinez@example.com',
            "Joining Date": "01-02-2022",
            status: (
                <a className="flex items-center gap-x-1">
                    <GoDotFill color={"#2AB108"} size={20} />
                    <p>Active</p>
                </a>
            ),
            action: (
                <span className='flex items-center gap-x-1'>
                    <p
                        onClick={handleCreate}
                        className="font-medium cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] p-2 transition-all duration-300"
                    >
                        <FaRegEdit size={20} />
                    </p>
                    <p className="font-medium cursor-pointer text-red-600 dark:text-red-500 ms-1">
                        <RiDeleteBin6Line size={20} />
                    </p>
                </span>
            ),
        },

    ]); // Initialize your data here


    const headings = ['Employee ID', 'Name', 'Designation', 'Phone No.', 'Email Address', 'Joining Date', 'Status', 'Action'];
    // const [data, setData] = useState([]); // Initialize your data here
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow); // Slice data based on current page
    useEffect(() => {
        setCurrentPage(1); // Reset to first page whenever the data changes
    }, [data]);
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Employee Table</h1>
            <Table
                headings={headings}
                data={currentRows} // Pass currentRows instead of full data
                rowsPerPage={rowsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <Pagination
                totalRows={data.length} // Total rows
                rowsPerPage={rowsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setRowsPerPage={setRowsPerPage} // Pass setRowsPerPage to Pagination
            />
        </div>
    );
};

export default EmployeeTable;
