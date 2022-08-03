import React from "react";

function SearchBox({value,onChange}) {
  return (
    <input
      type="text"
      name="query"
      placeholder="search..."
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
      className="form-control my-3"
    />
  );
}

export default SearchBox;
