import React from 'react';
import Input from './common/Input';
import Button from './common/Button';
import { useDispatch } from 'react-redux';
import { closeModal } from '../redux/slice/modalSlice';

function AddSalaryModal({ salaryData, handleInputChange, handleSubmit }) {
    const dispatch = useDispatch();

    return (
        <>
            <h2 className="text-2xl font-bold mb-4 text-center">Add Salary</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    label="Employee Name"
                    name="employeeName"
                    value={salaryData.employeeName}
                    onChange={handleInputChange}
                    placeholder="Enter Employee Name"
                    required
                />
                <Input
                    label="Amount"
                    type="number"
                    name="amount"
                    value={salaryData.amount}
                    onChange={handleInputChange}
                    placeholder="Enter Amount"
                    required
                />
                <Input
                    label="Date of Salary"
                    type="date"
                    name="salaryDate"
                    value={salaryData.salaryDate}
                    onChange={handleInputChange}
                    required
                />
                <div className="flex justify-end space-x-2">
                    <Button
                        text="Cancel"
                        onClick={() => dispatch(closeModal())}
                        style={{ backgroundColor: '#e5e7eb', color: '#374151' }}
                    />
                    <Button text="Submit" type="submit" />
                </div>
            </form>
        </>
    );
}

export default AddSalaryModal;
