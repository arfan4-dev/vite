import React from 'react';
import Input from './common/Input';
import Button from './common/Button';
import { useDispatch } from 'react-redux';
import { closeModal } from '../redux/slice/modalSlice';

function AddAttendanceModal({ attendanceData, handleInputChange, handleSubmit }) {
    const dispatch = useDispatch();

    return (
        <>
            <h2 className="text-2xl font-bold mb-4 text-center">Add Attendance</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    label="Employee Name"
                    name="employeeName"
                    value={attendanceData.employeeName}
                    onChange={handleInputChange}
                    placeholder="Enter Employee Name"
                    required
                />
                <Input
                    label="Date of Attendance"
                    type="date"
                    name="attendanceDate"
                    value={attendanceData.attendanceDate}
                    onChange={handleInputChange}
                    required
                />
                <Input
                    label="Status"
                    name="status"
                    value={attendanceData.status}
                    onChange={handleInputChange}
                    placeholder="Present/Absent"
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

export default AddAttendanceModal;
