import React from "react";

function ErrorMessage({ errorMessage }) {
  return (
    <div className="error_message_container">
      {errorMessage && (
        <div className="error_message_paragraph">{errorMessage}</div>
      )}
    </div>
  );
}

export default ErrorMessage;
