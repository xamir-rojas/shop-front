import React from "react";

const Search = (props) => {

    return (
      <>
        <div className="flex flex-col justify-center items-center w-full h-1/3 mt-20">
          <h3 className="h3">Home Page</h3>
            <input
              type="text"
              className="search__input"
              placeholder="Search any product"
              value={props.search}
              onChange={props.handleSearch}
            />
        </div>
      </>
    );
}

export default Search;
