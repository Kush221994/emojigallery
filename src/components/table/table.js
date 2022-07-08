import React from "react";
import TableList from "../table/tablelist";
const Table = ({ value }) => {
  return (
    <>
      <div className="tablecontained">
        <div className="tablehead">
          <div>Name</div>
          <div>Emoji</div>
        </div>
        <div>
          {value.map((EMOJI, i) => (
            <TableList key={i} name={EMOJI.name} emoji={EMOJI.emoji} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Table;
