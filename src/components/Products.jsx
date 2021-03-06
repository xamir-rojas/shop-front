import React, { useState } from "react";
import ModalForm from "./ModalForm";

const Products = (props) => {
  const [item, setItem] = useState({});
  const [onScreen, setOnScreem] = useState(false);

  const handleClick = (event, item) => {
    setItem(item);
    setOnScreem(true);
  };

  const handleClose = () => {
    setItem({});
    setOnScreem(false);
  };

  return (
    <>
    {onScreen ?
      <ModalForm
        item={item}
        handleClose={handleClose}
      ></ModalForm> : <></>
    }
    <div className="products__list">
      {props.products.map((item) => {
        return (
          <div
            key={item.name}
            className="product__container overflow"
            onClick={(event) => handleClick(event, item)}
          >
            <div className="product_title overflow-hidden max-h-28 ">
              <h4 className="h4 text-blue-500 group-hover:text-white">
                {item.name}{" "}
              </h4>
            </div>
            <div className="product_info overflow-hidden max-h-28">
              <p className="group-hover:text-white">
                {"Calories :" + item.calories} <br />
                {"Protein :" + item.protein} <br />
                {"Rating :" + item.rating} <br />
              </p>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Products;
