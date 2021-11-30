import React, { useState } from "react";
import CheckboxForm from "../../formInputs/Checkbox.js";
import TextInput from "../../formInputs/TextInput.js";
import { sizes, perks } from "./utils/utils.js";

export default function GenericData() {
  return (
    <div className="form">
      {/* Post title */}
      <div className="form__section">
        <TextInput title="Post title" placeholder="add a title to your post" />
      </div>

      {/* Size selection */}
      <div className="form__section">
        <CheckboxForm data={sizes} title="House Size" />
      </div>

      {/* Perks selection */}
      <div className="form__section">
        <CheckboxForm data={perks} title="Any perks?" />
      </div>

      {/* Post title */}
      <div className="form__section">
        <TextInput
          title="How would you describe your house?"
          placeholder="add a title description to your post"
        />
      </div>
    </div>
  );
}
