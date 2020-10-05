import React from "react";
import "./errorMessage.scss";
import Wrong from "./wrong";

const ErrorMessage = ({ message }) => {
  return (
    <div className="error">
      <Wrong />
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
