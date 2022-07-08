import React, { useState, useEffect } from "react";
import SearchBar from "../searchbar/searchbar";
import { EMOJI } from "../helpers/tablearr";
// import Table from "../table/table";
const GalleryHome = () => {
  const [search, setSearch] = useState("");
  //   const [data, setData] = useState(EMOJI);
  const [emoji, setEmoji] = useState("Nothing to search");
  useEffect(() => {
   // array.find(function(currentValue, index, arr),thisValue)-------------Syntax of Find
    const result = EMOJI.find((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    console.log(result);
    setEmoji(result ? result.emoji : "No emoji found");
  }, [search]);

  return (
    <>
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      {/* <Table value={data} /> */}
      <div>{emoji}</div>
    </>
  );
};

export default GalleryHome;
