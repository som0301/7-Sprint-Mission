import React from "react";
import TogglePassword from "./TogglePassword";
import { FieldInfo } from "../../../types/Auth";

interface InputFieldProps {
  field: FieldInfo;
}

const InputField: React.FC<InputFieldProps> = ({ field }) => {
  return (
    <div className="input-area" key={field.id}>
      <label htmlFor={field.id}>{field.label}</label>
      <div
        className={
          field.name === "password" || field.name === "confirmPassword"
            ? "password-input"
            : ""
        }
      >
        <input
          id={field.id}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
          autoComplete={field.autoComplete}
          required={field.required}
        />
        {(field.name === "password" || field.name === "confirmPassword") && (
          <TogglePassword />
        )}
      </div>
      <h3 id={`${field.id}-error`} className={`error-message ${field.name}`}>
        {field.errorMessage}
      </h3>
    </div>
  );
};

export default InputField;
