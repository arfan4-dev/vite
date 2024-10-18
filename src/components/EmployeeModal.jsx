import React from 'react';
import Input from './common/Input';
import Button from './common/Button';
import { useDispatch } from 'react-redux';
import { closeModal } from '../redux/slice/modalSlice';

function EmployeeFormModal({ employee, handleInputChange, handleSubmit }) {
    const dispatch = useDispatch();

    return (
        <>
            <h2 className="text-2xl font-bold mb-4 text-center">Employee Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    label="Name"
                    name="name"
                    value={employee.name}
                    onChange={handleInputChange}
                    placeholder="Enter the Name"
                    required
                />
                <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={employee.email}
                    onChange={handleInputChange}
                    placeholder="Enter the Email"
                    required
                />
                <Input
                    label="Position"
                    name="position"
                    value={employee.position}
                    onChange={handleInputChange}
                    placeholder="Enter the Position"
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

export default EmployeeFormModal;
