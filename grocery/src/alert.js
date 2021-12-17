import { React, useEffect } from "react";

function Alert({ type, msg, remove }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      remove();
    }, 2000);
    // return () => clearTimeout(timeout);
  }, []);
  return <p className={`alert alert-${type}`}>{msg}</p>;
}

export default Alert;
