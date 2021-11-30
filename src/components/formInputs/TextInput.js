import { useState } from "react";
import "./FormInputs.styles.css";

export default function TextInput({ placeholder, title }) {
  const [value, setValue] = useState("");

  return (
    <>
      <h2 className="section__title">{title}</h2>
      <input
        className="input--checkbox--text description"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </>
  );
}
