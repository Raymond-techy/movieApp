import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

function Table({ movies, sortColumn, onSort, columns }) {
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={movies} columns={columns} />
    </table>
  );
}

export default Table;
