import React, { useState } from 'react';
import CustomTable from './Table';
import EmployeeForm from './EmployeeForm';
import Modal from '../Modal';

const Employees = () => {
    // Employee dataset
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: 'John Doe',
            designation: 'Software Engineer',
            phone: '123-456-7890',
            email: 'john.doe@example.com',
            joiningDate: '2022-01-15',
            status: 'Active',
        },
        {
            id: 2,
            name: 'Jane Smith',
            designation: 'Project Manager',
            phone: '987-654-3210',
            email: 'jane.smith@example.com',
            joiningDate: '2021-06-10',
            status: 'Inactive',
        },
    ]);

    // Columns for the employee dataset
    const employeeColumns = [
        { header: 'Employee ID', accessor: 'id' },
        { header: 'Name', accessor: 'name' },
        { header: 'Designation', accessor: 'designation' },
        { header: 'Phone no.', accessor: 'phone' },
        { header: 'Email Address', accessor: 'email' },
        { header: 'Joining Date', accessor: 'joiningDate' },
        { header: 'Status', accessor: 'status' },
        { header: 'Actions', accessor: 'actions' },
    ];

    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState(null); // Used for editing

    const handleEmployeeEdit = (employee) => {
        setFormData(employee);
        setShowForm(true);
    };

    const handleEmployeeDelete = (id) => {
        setEmployees((prevData) => prevData.filter((item) => item.id !== id));
    };

    const handleEmployeeAdd = () => {
        setFormData(null);
        setShowForm(true);
    };

    const handleFormSubmit = (newEmployee) => {
        if (newEmployee.id) {
            // Editing existing employee
            setEmployees((prevData) =>
                prevData.map((item) =>
                    item.id === newEmployee.id ? { ...item, ...newEmployee } : item
                )
            );
        } else {
            // Adding new employee
            const newId = employees.length + 1;
            setEmployees((prevData) => [
                ...prevData,
                { ...newEmployee, id: newId },
            ]);
        }
    };

    const closeForm = () => {
        setShowForm(false);
        setFormData(null);
    };

    return (
        <div className="p-8">
            <h2 className="text-lg font-bold mt-8 mb-4">Employee Data Table</h2>
            <button
                onClick={handleEmployeeAdd}
                className="bg-green-500 text-white p-2 rounded mb-4"
            >
                Add New Employee
            </button>

            {/* Modal for Add/Edit Employee */}
            <Modal isOpen={showForm} onClose={closeForm}>
                <EmployeeForm
                    onSubmit={handleFormSubmit}
                    initialData={formData}
                    closeForm={closeForm}
                />
            </Modal>

            {/* Employee Data Table */}
            <CustomTable
                columns={employeeColumns}
                data={employees}
                onEdit={handleEmployeeEdit}
                onDelete={handleEmployeeDelete}
            />
        </div>
    );
};

export default Employees;
