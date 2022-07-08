import React from "react";

const TableList = ({ name, emoji }) => {
  return (
    <>
      <div className="tableitems">
        <div>{name}</div>
        <div>{emoji}</div>
      </div>
    </>
  );
};

export default TableList;
