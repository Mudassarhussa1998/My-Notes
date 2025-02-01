import React from "react";

export default function alert(props) {
  const alertStyles = {
    success: "bg-green-100 border-green-500 text-green-700",
    error: "bg-red-100 border-red-500 text-red-700",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
    info: "bg-blue-100 border-blue-500 text-blue-700",
  };

  return (
    <div
      className={`flex items-center justify-between px-4 py-3 border-l-4 rounded-md shadow-md ${
        alertStyles[props.type]
      }`}
      role="alert"
    >
      <span>{props.message}</span>

    </div>
  );
}
