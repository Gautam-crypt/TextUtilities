import React, { useState } from 'react';
import { toUpperCase, toLowerCase } from './utils';

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleOnClick = () => {
    setText(toUpperCase(text));
  };

  const handleLoClick = () => {
    setText(toLowerCase(text));
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="my-box"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleOnClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
      </div>
      <h1>Your Text Summary</h1>
      <p>
        {text.split(" ").filter((word) => word !== "").length} words and{" "}
        {text.length} characters
      </p>
      <p>{0.008 * text.split(" ").filter((word) => word !== "").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </>
  );
}
