import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to Uppercase", "success");
  };

  const handleCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to Lowercase", "success");
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const handleExtra = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h4 className="mt-1">Add Your Text Below</h4>
        <div className="mb-2">
          <textarea
            className="form-control"
            rows="9"
            placeholder="Enter Text Here"
            value={text}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary btn-sm mb-5"
          onClick={handleClick}
        >
          Convert To Uppercase
        </button>
        &nbsp; &nbsp;
        <button
          type="button"
          className="btn btn-primary btn-sm  mb-5"
          onClick={handleCase}
        >
          Convert To Lowercase
        </button>
        &nbsp; &nbsp;
        <button
          type="button"
          className="btn btn-primary btn-sm  mb-5"
          onClick={handleCopy}
        >
          Copy to Clipboard
        </button>
        &nbsp; &nbsp;
        <button
          type="button"
          className="btn btn-primary btn-sm  mb-5"
          onClick={handleClear}
        >
          Clear Text
        </button>
        &nbsp; &nbsp;
        <button
          type="button"
          className="btn btn-primary btn-sm  mb-5"
          onClick={handleExtra}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-1"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h4>Your Text Summary</h4>
        <p>
          Text has {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.08 * text.split(" ").length} Minutes Read</p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
