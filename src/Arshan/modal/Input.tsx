import React from "react";
const Input = ({ data }) => {
  return (
    <div className={``}>
      <input
        id={data.name}
        name={data.name}
        type={data.type}
        value={data.value}
        onChange={data.onChange}
        placeholder={data.placeholder}
        className="w-full py-2 px-6 border border-gray-300 rounded-[0.8px]"
      />
    </div>
  );
};

export default Input;
