import React from "react";
import { useHistory } from "react-router-dom";

const Error = () => {
  const history = useHistory();

  setTimeout(() => {
    history.goBack();
  }, 3000);
  return (
    <div>
      <h1>404 Not Found!</h1>
    </div>
  );
};

export default Error;
