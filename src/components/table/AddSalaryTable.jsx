import React from 'react';
import Table from './Table'; // Make sure to adjust the import path according to your file structure
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { openModal } from '../../redux/slice/modalSlice';
import { useDispatch } from 'react-redux';
import { GoDotFill } from 'react-icons/go';
import ComponentB from '../../Arshan/ComponentB';

const AddSalaryTable = () => {
    const dispatch = useDispatch();
    const handleCreate = () => {
        dispatch(openModal({ componentName: ComponentB, componentProps: { someProp: 'value' } }));
    };
    const headings = ['Employee ID', 'Name', 'Designation', 'Phone No.', 'Email Address', 'Joining Date', 'Status', 'Action'];

    const data = [
        {
            'Employee ID': 1,
            name: 'John Doe',
            position: 'Software Engineer',
            "Phone No.": "03453322334",
            'Email Address': 'arfan@gmail.com',
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
                        onClick={handleCreate} // Pass 'employee' as formType
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
    ];


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Add Salary Table</h1>
            <Table headings={headings} data={data} />
        </div>
    );
};

export default AddSalaryTable;
