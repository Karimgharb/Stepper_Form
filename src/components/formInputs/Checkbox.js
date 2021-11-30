import { useState } from "react";
import { perks, sizes } from "../stepper/steps/utils/utils";
import "./FormInputs.styles.css";

export default function CheckboxForm({ data, title }) {
  const [checkedItem, setCheckedItem] = useState("");
  const [showOther, setShowOther] = useState(false);
  function checkSizeHandler(e) {
    setCheckedItem(e.target.value);
    if (e.target.value === "Other") {
      setShowOther(!showOther);
    }
  }

  const [input, setInput] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <h2 className="section__title">{title}</h2>
      <div className="input__container">
        {data.map((item) => (
          <div className="form__input--checkbox">
            {data === sizes ? (
              <input
                type="checkbox"
                value={item}
                name={item}
                onClick={checkSizeHandler}
                checked={checkedItem === item ? true : false}
                className="input--checkbox--box"
              />
            ) : (
              <input
                type="checkbox"
                value={item}
                name={item}
                onClick={checkSizeHandler}
                className="input--checkbox--box"
              />
            )}

            <label className="input--checkbox--label" htmlFor={item}>
              {item}
            </label>
          </div>
        ))}
      </div>
      {data === perks && showOther ? (
        <>
          <h3>What other perks you offer?</h3>
          <input
            className="input--checkbox--text description"
            type="text"
            value={input}
            onChange={inputHandler}
            placeholder="Other perks..."
          />
        </>
      ) : null}
    </>
  );
}
