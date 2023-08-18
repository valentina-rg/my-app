import React from "react";

const Label = ({ children }) => {
  return (
    <label className="block text-md font-[600] text-gray-700">
      {children}
    </label>
  );
};

export default Label;
