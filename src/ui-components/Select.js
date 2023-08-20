import React from "react";
import Label from "./Label";

const Select = ({ options, value, label, onChange, customStyles }) => {
  if (!options.length) {
    throw new Error("missing options");
  }

  return (
    <div className="flex flex-col mb-1">
      {label ? <Label>{label}</Label> : null}
      <select
        style={customStyles}
        className="mt-1 px-2 py-2 pr-10 border shadow-sm focus:ring-am-500 focus:border-am-500 block w-full sm:text-sm border-gray-300 rounded-3xl disabled:opacity-50"
        value={value}
        onChange={onChange}
      >
        {options.map(({ value, name }, index) => (
          <option key={index} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
