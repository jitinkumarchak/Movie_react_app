import React from "react";

const Dropdown = ({ title, options, func }) => {
  if (!Array.isArray(options)) {
    console.error("The options prop must be an array");
    return null;
  }

  return (
    <div className="select">
      <select defaultValue="0" onChange={func} name="format" id="format">
        <option value="0" disabled>
          {title}
        </option>
        {options.map((o, i) => (
          <option key={i} value={o}>
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
