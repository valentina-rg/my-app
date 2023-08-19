import React from "react";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import Label from "./Label";

const style =
  "mt-1 mb-2 border shadow-sm focus:ring-am-500 focus:border-am-500 block w-full sm:text-sm border-gray-300 rounded-3xl disabled:opacity-50";

const componentStyle = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: "1.3rem",
    borderColor: state.isFocused ? "black" : "transparent",
    boxShadow: "none !important",
    "&:hover": {
      borderColor: "black",
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    position: "absolute",
  }),
  input: (provided, state) => ({
    input: {
      border: 0,
      outline: 0,
      boxShadow: "none !important",
      borderColor: state.isFocused ? "black" : "transparent",
    },
  }),
};

const SearchSelect = ({
  loadOptions,
  label,
  options,
  onChange,
  value,
  isMulti,
  CustomOption,
  ...props
}) => {
  let component = null;
  const components = CustomOption ? { Option: CustomOption } : {};
  if (!loadOptions || isMulti) {
    component = (
      <Select
        components={components}
        styles={componentStyle}
        className={style}
        isSearchable={true}
        options={options}
        onChange={onChange}
        value={value}
        placeholder=""
        isMulti={isMulti}
        {...props}
      />
    );
  } else {
    component = (
      <AsyncSelect
        components={components}
        cacheOptions
        styles={componentStyle}
        value={value}
        loadOptions={loadOptions}
        onChange={onChange}
        className={style}
        placeholder=""
        {...props}
      />
    );
  }
  return (
    <div className="flex items-center flex-col mb-1">
      {label ? <Label>{label}</Label> : null}
      {component}
    </div>
  );
};

export default SearchSelect;
