import React from "react";
import "./SortControl.css";

const SortControl = (props) => {
  return (
    <>
      <h5 className="mx-6 sortby">Sort By</h5>
      <select
        className="sortOptions"
        onChange={(event) => {
          props.onFilterChange(event.target.value);
        }}
      >
        <option value="Release Date">Release Date</option>
        <option value="Title">Title</option>
      </select>
    </>
  );
};

export default SortControl;
