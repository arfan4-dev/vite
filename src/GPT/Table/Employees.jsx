import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomTable from '../Table/Table';

const Employees = () => {
    const [employees, setEmployees] = useState([]);

    // Fetch employees from backend when the component mounts
    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/employees')
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the employee data!', error);
            });
    }, []);

    const handleEmployeeEdit = (row) => {
        const updatedName = prompt('Edit name:', row.name);
        if (updatedName) {
            axios.put(`http://localhost:8000/api/v1/employees/${row.empId}`, {
                ...row,
                name: updatedName,
            })
                .then((response) => {
                    setEmployees((prevData) =>
                        prevData.map((item) =>
                            item.empId === row.empId ? { ...item, name: updatedName } : item
                        )
                    );
                })
                .catch((error) => {
                    console.error('There was an error updating the employee!', error);
                });
        }
    };
    const handleEmployeeDelete = (id) => {
        console.log("Deleting employee with id:", id);

        // Confirm before deleting
        if (window.confirm('Are you sure you want to delete this employee?')) {
            // Make sure `id` is passed correctly as a string or ObjectId type.
            axios.delete(`http://localhost:8000/api/v1/employees/${id}`)
                .then(() => {
                    // Remove the deleted employee from the state
                    setEmployees((prevData) => prevData.filter((item) => item._id !== id));
                })
                .catch((error) => {
                    console.error('There was an error deleting the employee!', error);
                });
        }
    };

    const handleEmployeeAdd = () => {
        const newEmpId = prompt('Enter employee ID:');
        const newName = prompt('Enter new name:');
        const newFatherName = prompt('Enter father\'s name:');
        const newAddress = prompt('Enter address:');
        const newPhone = prompt('Enter phone number:');
        const newEmail = prompt('Enter email address:');
        const newOfficialEmail = prompt('Enter official email:');
        const newEducation = prompt('Enter education:');
        const newUniversity = prompt('Enter university:');
        const newEmergencyPhoneNo = prompt('Enter emergency phone number:');
        const newCareerStart = prompt('Enter career start date (YYYY-MM-DD):');
        const newDOB = prompt('Enter date of birth (YYYY-MM-DD):');
        const newCNIC = prompt('Enter CNIC:');
        const newSalary = prompt('Enter salary:');
        const newIncrementalPlan = prompt('Enter incremental plan:');
        const newBankName = prompt('Enter bank name:');
        const newBankAccount = prompt('Enter bank account number:');
        const newDesignation = prompt('Enter new designation:');
        const newJoiningDate = prompt('Enter joining date:');
        const newStatus = prompt('Enter status (Active/Inactive):');

        if (
            newEmpId && newName && newFatherName && newAddress && newPhone &&
            newEmail && newOfficialEmail && newEducation && newUniversity &&
            newEmergencyPhoneNo && newCareerStart && newDOB && newCNIC &&
            newSalary && newIncrementalPlan && newBankName && newBankAccount &&
            newDesignation && newJoiningDate && newStatus
        ) {
            // Add the new employee to the database
            axios.post('http://localhost:8000/api/v1/employees', {
                empId: newEmpId,
                name: newName,
                fatherName: newFatherName,
                address: newAddress,
                phoneNo: newPhone,
                emailAddress: newEmail,
                officialEmail: newOfficialEmail,
                education: newEducation,
                university: newUniversity,
                emergencyPhoneNo: newEmergencyPhoneNo,
                careerStart: newCareerStart,
                DOB: newDOB,
                CNIC: newCNIC,
                salary: parseFloat(newSalary),
                incrementalPlan: newIncrementalPlan,
                bankName: newBankName,
                bankAccount: newBankAccount,
                designation: newDesignation,
                joiningDate: newJoiningDate,
                status: newStatus,
            })
                .then(() => {
                    // After successfully adding the new employee, fetch the updated employee list
                    axios.get('http://localhost:8000/api/v1/employees')
                        .then((response) => {
                            setEmployees(response.data); // Update state with the new list of employees
                        })
                        .catch((error) => {
                            console.error('There was an error fetching the updated employee data!', error);
                        });
                })
                .catch((error) => {
                    console.error('There was an error adding the employee!', error);
                });
        } else {
            alert('Please fill in all fields.');
        }
    };





    return (
        <div>
            <h2 className="text-lg font-bold mt-8 mb-4">Employee Data Table</h2>
            <CustomTable
                columns={[
                    { header: 'Employee ID', accessor: 'empId' },
                    { header: 'Name', accessor: 'name' },
                    { header: 'Father Name', accessor: 'fatherName' },
                    { header: 'Address', accessor: 'address' },
                    { header: 'Phone No.', accessor: 'phoneNo' },
                    { header: 'Email Address', accessor: 'emailAddress' },
                    { header: 'Official Email', accessor: 'officialEmail' },
                    { header: 'Education', accessor: 'education' },
                    { header: 'University', accessor: 'university' },
                    { header: 'Emergency Phone No.', accessor: 'emergencyPhoneNo' },
                    { header: 'Career Start', accessor: 'careerStart' },
                    { header: 'DOB', accessor: 'DOB' },
                    { header: 'CNIC', accessor: 'CNIC' },
                    { header: 'Salary', accessor: 'salary' },
                    { header: 'Incremental Plan', accessor: 'incrementalPlan' },
                    { header: 'Bank Name', accessor: 'bankName' },
                    { header: 'Bank Account', accessor: 'bankAccount' },
                    { header: 'Designation', accessor: 'designation' },
                    { header: 'Joining Date', accessor: 'joiningDate' },
                    { header: 'Status', accessor: 'status' },
                ]}
                data={employees}
                onEdit={handleEmployeeEdit}
                onDelete={handleEmployeeDelete}
                onAdd={handleEmployeeAdd}
            />
        </div>
    );
};

export default Employees;
