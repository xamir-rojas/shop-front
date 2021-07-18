import React, { useState, useEffect, useContext, useMemo } from "react";
import { AccountContext } from "../Account";

const Products = (props) => {

  return (
    <div className="products__list">
      {props.products.map((item) => {
        return (
          <div
            key={item.name}
            className="product m-2 p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 bg-gray-400"
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default Products;
