import React, { useState, useEffect } from "react";

const DropdownComponent = ({ label, jsonData, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedParentValue, setSelectedParentValue] = useState("");
  useEffect(() => {
    setSelectedValue("");
  }, [selectedParentValue]);
  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedValue(value);
    onSelect(value);
  };
  const filteredData = jsonData.country.filter((item) => {
    switch (label) {
      case "State":
        return true;
      case "District":
        return item.State === selectedParentValue;
      case "City":
        return (
          item.State === selectedParentValue && item.District === selectedValue
        );
      case "Pincode":
        return (
          item.State === selectedParentValue &&
          item.District === selectedValue &&
          item.City === selectedValue
        );
      default:
        return true;
    }
  });
  const options = Array.from(new Set(filteredData.map((item) => item[label])));
  return (
    <div className="flex space-x-4">
      {" "}
      <label htmlFor={label.toLowerCase()}>{label}:</label>{" "}
      <select
        id={label.toLowerCase()}
        value={selectedValue}
        onChange={handleChange}
        disabled={!selectedParentValue}
      >
        {" "}
        <option value="">Select {label}</option>{" "}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {" "}
            {option}{" "}
          </option>
        ))}{" "}
      </select>{" "}
    </div>
  );
};

export default DropdownComponent;