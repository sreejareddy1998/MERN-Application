import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>{error.data}</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Error;
