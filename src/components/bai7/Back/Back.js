import React from "react";

const Back = ({ onClick, className }) => {
  return (
    <>
      <div>
        <button className={className} onClick={onClick}>
          Back
        </button>
      </div>
    </>
  );
};

export default Back;
