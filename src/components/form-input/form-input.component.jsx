import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherprops }) => {
  return (
    <div className="group">
      <input onChange={handleChange} className="form-input" {...otherprops} />
      {label ? (
        <label
          className={`${
            otherprops.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
