import React, { useState, useEffect } from "react";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaBuilding,
    FaUniversity,
    FaCalendarAlt,
    FaMoneyBillWave,
    FaCity,
    FaGraduationCap,
} from "react-icons/fa";
import { CiLocationOn, CiMobile2 } from "react-icons/ci";
import { MdOutlineMail, MdPerson } from "react-icons/md";
import { IoCalendarSharp } from "react-icons/io5";
import { GiPackedPlanks } from "react-icons/gi";
import { BsBank } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import Input from "./Input";
import ReactPhoneInput from "react-phone-input-2"; // Import the package

const SimpleComponent = () => {
    const [formData, setFormData] = useState({
        name: "",
        fatherName: "",
        position: "",
        address: "",
        email: "",
        officialEmail: "",
        education: "",
        university: "",
        phoneNumber: "",
        emergencyContact: "",
        joiningDate: "",
        careerStart: "",
        dob: "",
        cnic: "",
        salary: "",
        incrementalPlan: "",
        bankName: "",
        bankAccount: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, phoneNumber: value });
    };
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData); // This logs the form data when the form is submitted
    }

    const formFields = [
        {
            label: "Name",
            name: "name",
            type: "text",
            value: formData.name,
            placeholder: "Dallas Keuchal",
            icon: <FaUser className="mr-1" />,
        },
        {
            label: "Father Name",
            name: "fatherName",
            type: "text",
            value: formData.fatherName,
            placeholder: "Keuchal",
            icon: <FaUser className="mr-1" />,
        },
        {
            label: "Position",
            name: "position",
            type: "text",
            value: formData.position,
            placeholder: "Manager",
            icon: <FaBuilding className="mr-1" />,
        },
        {
            label: "Email Address",
            name: "email",
            type: "email",
            value: formData.email,
            placeholder: "dallas@gmail.com",
            icon: <FaEnvelope className="mr-1" />,
        },
        {
            label: "Education",
            name: "education",
            type: "text",
            value: formData.education,
            placeholder: "BBA",
            icon: <FaUniversity className="mr-1" />,
        },
        {
            label: "Phone Number",
            name: "phoneNumber",
            type: "tel", // Set the type to 'tel'
            value: formData.phoneNumber,
            placeholder: "+92 327 1234567",
            icon: <FaPhone className="mr-1" />,
            inputComponent: (
                <ReactPhoneInput
                    country={"pk"}
                    value={formData.phoneNumber}
                    onChange={handlePhoneChange}
                    inputStyle={{
                        width: "100%",
                        padding: "1.1rem 3rem", // Can be replaced with 'py-2 px-6'
                        border: "1px solid #e2e8f0", // Can be replaced with 'border-gray-300'
                        borderRadius: "0.8px", // Can be replaced with 'rounded-[0.8px]'
                        className: "w-full py-2 px-6 border border-gray-300 rounded-[0.8px]", // Tailwind styling
                    }}
                    buttonStyle={{
                        borderRadius: "0.8px", // Button border-radius
                    }}
                />

            ),
        },
        {
            label: "Joining Date",
            name: "joiningDate",
            type: "date",
            value: formData.joiningDate,
            placeholder: "dd-mm-yyyy",
            icon: <FaCalendarAlt className="mr-1" />,
        },
        {
            label: "DOB",
            name: "dob",
            type: "date",
            value: formData.dob,
            placeholder: "dd-mm-yyyy",
            icon: <FaCalendarAlt className="mr-1" />,
        },
        {
            label: "Salary",
            name: "salary",
            type: "number",
            value: formData.salary,
            placeholder: "25000",
            icon: <FaMoneyBillWave className="mr-1" />,
        },
        {
            label: "Bank Name",
            name: "bankName",
            type: "text",
            value: formData.bankName,
            placeholder: "Faysal Bank",
            icon: <FaCity className="mr-1" />,
        },
        {
            label: "Address",
            name: "address",
            type: "text",
            value: formData.address,
            placeholder: "street no 7, house no 67 johar town",
            icon: <CiLocationOn className="mr-1" />,
        },
        {
            label: "Official Email",
            name: "officialEmail",
            type: "email",
            value: formData.officialEmail,
            placeholder: "arfan@gmail.com",
            icon: <MdOutlineMail className="mr-1" />,
        },
        {
            label: "University",
            name: "university",
            type: "text",
            value: formData.university,
            placeholder: "GC University Lahore",
            icon: <FaGraduationCap className="mr-1" />,
        },
        {
            label: "Emergency Contact No.",
            name: "emergencyContact",
            type: "text",
            value: formData.emergencyContact,
            placeholder: "03213232323",
            icon: <CiMobile2 className="mr-1" />,
        },
        {
            label: "Career Start",
            name: "careerStart",
            type: "date",
            value: formData.careerStart,
            placeholder: "mm/dd/yyyy",
            icon: <IoCalendarSharp className="mr-1" />,
        },
        {
            label: "CNIC",
            name: "cnic",
            type: "text",
            value: formData.cnic,
            placeholder: "33100-03232322-11",
            icon: <MdPerson className="mr-1" />,
        },
        {
            label: "Incremental Plan",
            name: "incrementalPlan",
            type: "text",
            value: formData.incrementalPlan,
            placeholder: "Yearly",
            icon: <GiPackedPlanks className="mr-1" />,
        },
        {
            label: "Bank Account",
            name: "bankAccount",
            type: "text",
            value: formData.bankAccount,
            placeholder: "0000000000000000000000000",
            icon: <BsBank className="mr-1" />,
        },
    ];


    return (
        <div>
            <div className=" w-[1084px] mx-auto p-8 bg-white shadow-lg text-[#282F5A] rounded-[0.8px] relative z-50 ">
                <div className="flex items-center justify-between">
                    <h2 className={`${ttCommonsRegular.className} text-[24px] font-semibold mb-6`}
                    >
                        Add Employee Details
                    </h2>
                    <RxCross1 className={`cursor-pointer ${ttCommonsBold.className}`} size={20} onClick={closeEmployeeModal} />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={`grid grid-cols-2 gap-6 ${ttCommonsRegular.className}`}
                    >
                        {formFields.map((field) => (
                            <div key={field.name} className="relative">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    {field.label}
                                </label>
                                {field.inputComponent ? (
                                    field.inputComponent // Render phone input here
                                ) : (
                                    <Input
                                        data={{
                                            ...field,
                                            value: formData[field.name],
                                            onChange: handleChange,
                                        }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-6 space-x-4">
                        <button
                            type="submit"
                            disabled={!isFormValid} // Disable button if form is invalid
                            className={`h-[48px] w-[155px] cursor-pointer text-[20px] shadow-md text-[#282F5A] rounded-[8px] 
                ${isFormValid
                                    ? "hover:bg-[#DFECFF80]"
                                    : "bg-gray-200 cursor-not-allowed"
                                }`}
                            onClick={addEmployees}
                        >
                            Save
                        </button>
                        <button
                            onClick={closeEmployeeModal}
                            type="button"
                            className="h-[48px] w-[155px] cursor-pointer text-[20px] shadow-md text-[#DF0D0D] rounded-[8px] hover:bg-[#DF0D0D1A]"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SimpleComponent;
