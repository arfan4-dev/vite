import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/slice/modalSlice';
import ComponentB from '../ComponentB';
import Input from '../../components/common/Input'; // Import the updated Input component

const SimpleComponentTwo = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePhoneChange = (phone) => {
        setFormData({ ...formData, phone });
    };

    const handleCreate = () => {
        dispatch(openModal({ componentName: ComponentB, componentProps: { someProp: 'value' } }));
    };

    // Array of input field configurations
    const inputFields = [
        { label: 'Name', name: 'name', type: 'text', placeholder: 'Name' },
        { label: 'Email', name: 'email', type: 'email', placeholder: 'Email' },
        { label: 'Address', name: 'address', type: 'text', placeholder: 'Address' },
        { label: 'Phone', name: 'phone', type: 'phone', placeholder: 'Phone' }, // Type 'phone' for PhoneInput
        { label: 'Description', name: 'description', type: 'text', placeholder: 'Description' },
    ];

    return (
        <div className="flex flex-col items-center my-4">
            {inputFields.map((field) => (
                <Input
                    key={field.name}
                    label={field.label}
                    name={field.name}
                    type={field.type}
                    value={formData[field.name]}
                    onChange={field.type === 'phone' ? handlePhoneChange : handleChange}
                    placeholder={field.placeholder}
                    className="mb-2"
                />
            ))}

            <button
                onClick={handleCreate}
                className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
                Open Component B Modal
            </button>
        </div>
    );
};

export default SimpleComponentTwo;
