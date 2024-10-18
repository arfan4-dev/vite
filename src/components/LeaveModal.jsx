import React from 'react';
import Input from './common/Input';
import Button from './common/Button';
import { useDispatch } from 'react-redux';
import { closeModal } from '../redux/slice/modalSlice';

function LeaveRequestModal({ leaveRequest, handleInputChange, handleSubmit }) {
    const dispatch = useDispatch();

    return (
        <>
            <h2 className="text-2xl font-bold mb-4 text-center">Leave Request</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    label="Reason for Leave"
                    name="reason"
                    value={leaveRequest.reason}
                    onChange={handleInputChange}
                    placeholder="Reason for Leave"
                    required
                />
                <Input
                    label="Date of Leave"
                    type="date"
                    name="date"
                    value={leaveRequest.date}
                    onChange={handleInputChange}
                    placeholder="Date of Leave"
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

export default LeaveRequestModal;
